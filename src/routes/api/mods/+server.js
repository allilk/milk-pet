import JSZip from "jszip";
import { prisma } from "../../../hooks.server";
import { CWebp } from "cwebp";
import { json } from "@sveltejs/kit";
import { MODS_API_KEY } from "$env/static/private";

import crypto from "crypto";
import fs from "fs/promises";
import path from "path";

// fsPromises.stat annoyingly throws if the file doesn't exist.
const fileExists = async (path) => !!(await fs.stat(path).catch((e) => false));

const IMAGE_PATH = "static/mods/images";

function jsonWithStatus(status, data) {
    return new Response(JSON.stringify(data), {
        status,
        headers: {
            "Content-Type": "application/json",
        },
    });
}

async function downloadImpl(url, folder) {
    const fileName = path.basename(url);
    // Use a hash of the URL to avoid collisions.
    const outputFile =
        crypto.createHash("md5").update(url).digest("hex") +
        fileName.substring(fileName.lastIndexOf("."));

    if (await fileExists(`${folder}/${outputFile}`)) {
        console.log(`LOG: ${url} already exists as ${folder}/${outputFile}`);

        return outputFile;
    }

    console.log(`LOG: Downloading mod "${fileName}" FROM ${url}...`);

    const saveFile = await fetch(url);
    const blob = await saveFile.blob();

    await fs.writeFile(`${folder}/${outputFile}`, blob.stream());
    console.log(
        `LOG: Downloading Complete. Written to ${folder}/${outputFile}.`
    );

    return outputFile;
}

async function downloadFile(url) {
    return "/mods/files/" + (await downloadImpl(url, "static/mods/files"));
}

async function getImageFromZip(zipFile, file) {
    const zipFileName = path.basename(zipFile);
    const contents = await fs.readFile(zipFile);
    const zip = await JSZip.loadAsync(contents);

    const entry = zip.file(file);
    if (!entry) {
        return null;
    }

    const outputFile = `${zipFileName.substring(
        0,
        zipFileName.lastIndexOf(".")
    )}-${file.substring(0, file.lastIndexOf("."))}.webp`;
    console.log(`LOG: Extracting ${file} from ${zipFile} to ${outputFile}`);

    const data = await entry.async("nodebuffer");
    const encoder = new CWebp(data);
    await encoder.lossless().write(`${IMAGE_PATH}/${outputFile}`);
    return "/mods/images/" + outputFile;
}

export async function GET({ request }) {
    if (request.headers.get("authorization") !== "Bearer " + MODS_API_KEY) {
        return jsonWithStatus(401, { message: "Invalid API key" });
    }

    // TODO: need to add query parameters, filtering, limits, etc.
    const mods = (await prisma.modChip.findMany()).map((mod) => ({
        ...mod,
        author: JSON.parse(mod.author),
        chipInformation: JSON.parse(mod.chipInformation),
        filePaths: JSON.parse(mod.filePaths),
    }));
    return json({ mods });
}

export async function PUT({ request }) {
    if (request.headers.get("authorization") !== "Bearer " + MODS_API_KEY) {
        return jsonWithStatus(401, { message: "Invalid API key" });
    }

    const input = await request.json();

    if (!input) {
        return jsonWithStatus(400, { message: "Missing input data" });
    }

    for (let key of ["type", "name", "discordDownloadLink", "author"]) {
        if (!key in input) {
            return jsonWithStatus(400, {
                message: `Missing required key "${key}"`,
            });
        }
    }

    const existingMod = input.id
        ? await prisma.modChip.findUniqueOrThrow({ where: { id: input.id } })
        : null;

    try {
        const data = {
            ...input,
            id: undefined,
            previewZipPath: undefined,
            iconZipPath: undefined,
            author: input.author ? JSON.stringify(input.author) : undefined,
            chipInformation: input.chipInformation
                ? JSON.stringify(input.chipInformation)
                : undefined,
            uploadedAt: new Date(),
        };

        const downloadPath = await downloadFile(input.discordDownloadLink);

        const [previewImagePath, iconImagePath] = await Promise.all([
            getImageFromZip("static" + downloadPath, input.previewZipPath ?? "preview.png"),
            getImageFromZip("static" + downloadPath, input.iconZipPath ?? "icon.png"),
        ]);

        data.filePaths = JSON.stringify({
            mod: downloadPath,
            preview: previewImagePath,
            icon: iconImagePath,
        });

        console.log(`LOG: Downloading completed, saving mod to database...`);
        let mod;
        if (!existingMod) {
            mod = await prisma.modChip.create({ data });
        } else {
            mod = await prisma.modChip.update({
                data,
                where: { id: existingMod.id },
            });
        }
        console.log(
            `LOG: Mod ${mod.id} successfully downloaded and saved to database.`
        );

        return json({
            message: `${existingMod ? "Updated" : "Created"} mod.`,
            data: mod,
        });
    } catch (err) {
        console.error("Failed to handle mod PUT for input", input, err);
        return jsonWithStatus(500, {
            message: err.toString() || "Error saving mod",
        });
    }
}

export async function DELETE({ request }) {
    if (request.headers.get("authorization") !== "Bearer " + MODS_API_KEY) {
        return jsonWithStatus(401, { message: "Invalid API key" });
    }

    const input = await request.json();

    if (!input.id) {
        return jsonWithStatus(400, {
            message: 'Missing required input key "id".',
        });
    }

    try {
        const mod = await prisma.modChip.delete({ where: { id: input.id } });
        return json({ message: `Deleted mod.`, data: mod });
    } catch (err) {
        // Record not found.
        if (err.code === "P2025") {
            return jsonWithStatus(404, { message: "Mod not found" });
        }
        throw err;
    }
}

import AdmZip from 'adm-zip';
import { prisma } from '../../../hooks.server';

import crypto from 'crypto';
import fs from 'fs/promises';
import path from 'path';

// fsPromises.stat annoyingly throws if the file doesn't exist.
const fileExists = async (path) => !!(await fs.stat(path).catch((e) => false));

const IMAGE_PATH = 'static/mods/images';

async function downloadImpl(url, folder) {
    const fileName = path.basename(url);
    // Use a hash of the URL to avoid collisions.
    const outputFile =
        crypto.createHash('md5').update(url).digest('hex') +
        fileName.substr(fileName.lastIndexOf('.'));

    if (await fileExists(`${folder}/${outputFile}`)) {
        console.log(`LOG: ${url} already exists as ${folder}/${outputFile}`);

        return outputFile;
    }

    console.log(`LOG: Downloading mod "${fileName}" FROM ${url}...`);

    const saveFile = await fetch(url);
    const blob = await saveFile.blob();

    await fs.writeFile(`${folder}/${outputFile}`, blob.stream());
    console.log(
        `LOG: Downloading Complete. Written to ${folder}/${outputFile}.`,
    );

    return outputFile;
}

async function downloadImage(url) {
    if (!url) {
        return null;
    }
    return '/mods/images/' + (await downloadImpl(url, IMAGE_PATH));
}

async function downloadFile(url) {
    return '/mods/files/' + (await downloadImpl(url, 'static/mods/files'));
}

async function getImageFromZip(zipFile, file) {
    const zipFileName = path.basename(zipFile);
    const zip = new AdmZip(zipFile);

    const entry = zip.getEntry(file);
    if (!entry) {
        return null;
    }

    const outputFile = `${zipFileName.substr(
        0,
        zipFileName.lastIndexOf('.'),
    )}-${file}`;
    console.log(`LOG: Extracting ${file} from ${zipFile} to ${outputFile}`);

    await fs.writeFile(`${IMAGE_PATH}/${outputFile}`, entry.getData());

    return '/mods/images/' + outputFile;
}

export async function GET() {
    // TODO: need to add query parameters, filtering, limits, etc.
    const mods = (await prisma.modChip.findMany()).map((mod) => ({
        ...mod,
        author: JSON.parse(mod.author),
        chipInformation: JSON.parse(mod.chipInformation),
        filePaths: JSON.parse(mod.filePaths),
    }));
    return new Response(JSON.stringify({ mods }), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export async function PUT({ request }) {
    // TODO: API key validation.

    // TODO: Should mod names be unique or something?
    // If so, then the filename hashing is unnecessary, since they can just be `files/modname.zip`, `images/modname-preview.zip` etc
    const input = await request.json();

    if (!input) {
        return new Response(JSON.stringify({ message: 'Missing input data' }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    for (let key of ['type', 'name', 'discordDownloadLink', 'author']) {
        if (!key in input) {
            return new Response(
                JSON.stringify({ message: `Missing required key "${key}"` }),
                {
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            );
        }
    }

    let existingMod = input.id
        ? await prisma.modChip.findUniqueOrThrow({ where: { id: input.id } })
        : null;

    try {
        const data = {
            ...input,
            id: undefined,
            author: input.author ? JSON.stringify(input.author) : undefined,
            chipInformation: input.chipInformation
                ? JSON.stringify(input.chipInformation)
                : undefined,
            uploadedAt: new Date(),
        };

        let [downloadPath, previewImagePath, iconImagePath] = await Promise.all(
            [
                downloadFile(input.discordDownloadLink),
                downloadImage(input.previewImageURL),
                downloadImage(input.iconImageURL),
            ],
        );

        if (!previewImagePath) {
            previewImagePath = await getImageFromZip(
                'static' + downloadPath,
                'preview.png',
            );
        }
        if (!iconImagePath) {
            iconImagePath = await getImageFromZip(
                'static' + downloadPath,
                'icon.png',
            );
        }

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
            `LOG: Mod ${mod.id} successfully downloaded and saved to database.`,
        );

        return new Response(
            JSON.stringify(
                {
                    message: `${existingMod ? 'Updated' : 'Created'} mod.`,
                    data: mod,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            ),
        );
    } catch (err) {
        console.error('Failed to handle mod PUT for input', input, err);
        return new Response(
            JSON.stringify({ message: err.toString() || 'Error saving mod' }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        );
    }
}

export async function DELETE({ request }) {
    // TODO: API key validation.

    const input = await request.json();

    if (!input.id) {
        return new Response(
            JSON.stringify({ message: 'Missing required input key "id".' }),
            {
                status: 400,
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        );
    }

    try {
        const mod = await prisma.modChip.delete({ where: { id: input.id } });
        return new Response(
            JSON.stringify(
                { message: `Deleted mod.`, data: mod },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            ),
        );
    } catch (err) {
        // Record not found.
        if (err.code === 'P2025') {
            return new Response(JSON.stringify({ message: 'Mod not found' }), {
                status: 404,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }
        throw err;
    }
}


import { json } from "@sveltejs/kit";
import { prisma } from "../../../../hooks.server";

export async function GET({ request, url }) {
    const query = url.searchParams.get("query");

    const mods =
        await prisma.modChip.findMany(
            {
                where: { name: { contains: query, mode: "insensitive" } }
            }
        )

    return json({
        mods: mods.map(mod => ({
            ...mod,
            author: JSON.parse(mod.author),
            chipInformation: JSON.parse(mod.chipInformation),
            filePaths: JSON.parse(mod.filePaths)
        }))
    })

}
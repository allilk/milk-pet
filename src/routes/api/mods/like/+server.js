import { prisma } from "../../../../hooks.server.js";
import { json } from "@sveltejs/kit";

export async function POST({ request }) {
    try {
        // Restrict to only same site.
        if (process.env.HOST !== request.headers.get("origin"))
            return json({ message: "Bad Host" });

        const { modId, userId } = await request.json();

        const newLike = await prisma.like.upsert({
            where: {
                userId_modId: {
                    modId,
                    userId,
                },
            },
            update: {
                modId,
                userId,
            },
            create: {
                modId,
                userId,
            },
        });

        const mod = await prisma.modChip.findFirst({
            where: {
                id: modId,
            },
            include: {
                likes: true,
            },
        });

        return json({
            message: "Liked Mod!",
            like: newLike,
            mod: {
                ...mod,
                filePaths: JSON.parse(mod.filePaths),
                author: mod?.author ? JSON.parse(mod.author) : undefined,
                chipInformation: mod?.chipInformation
                    ? JSON.parse(mod.chipInformation)
                    : undefined,
            },
        });
    } catch (err) {
        console.log(err);

        return json({ message: "Error liking mod" });
    }
}

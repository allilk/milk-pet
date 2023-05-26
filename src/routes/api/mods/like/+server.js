import { prisma } from "../../../../hooks.server.js";
import { json } from "@sveltejs/kit";

export async function POST({ request }) {
    try {
        // Restrict to only same site.
        if (process.env.HOST !== request.headers.get("origin"))
            throw new Error("Bad Host");

        const { modId, userId } = await request.json();

        const newLike = await prisma.like.create({
            data: {
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
            mod,
        });
    } catch (err) {
        return json({ message: "Error liking mod" });
    }
}

import { prisma } from "../../../../hooks.server.js";

export async function POST({ request }) {
    try {
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

        return new Response(
            JSON.stringify(
                {
                    message: "Liked Mod!",
                    like: newLike,
                    mod,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
        );
    } catch (err) {
        return new Response(
            JSON.stringify({ message: err.toString() || "Error liking mod" })
        );
    }
}

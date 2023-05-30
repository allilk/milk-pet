import { json } from "@sveltejs/kit";
import { prisma } from "../../../../hooks.server";
import randomstring from "randomstring";

const generateCollectionId = async () => {
    const id = randomstring.generate(5);

    const existingCollectionId = await prisma.collection.findUnique({
        where: {
            sharingId: id,
        },
    });

    return existingCollectionId ? await generateCollectionId() : id;
};

export async function POST(request) {
    try {
        const session = await request.locals.getSession();
        const body = await request.request.json();
        const { modIds, name } = body;
        if (!modIds || !name || !session)
            return new Response(
                JSON.stringify({
                    message: "Missing required params",
                }),
                {
                    status: 422,
                }
            );

        const newCollectionId = await generateCollectionId();

        const newCollection = await prisma.collection.create({
            data: {
                sharingId: newCollectionId,
                createdById: session.user.id,
                modIds,
                name,
            },
        });

        return json({
            sharingId: newCollectionId,
        });
    } catch (err) {
        console.log(err);
        return json({ message: err });
    }
}

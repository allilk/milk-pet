import { prisma } from "../../../hooks.server";

export const prerender = "auto";

export const load = async ({ params }) =>
    new Promise(async (resolve, reject) => {
        try {
            const data = await prisma.collection.findUniqueOrThrow({
                where: {
                    sharingId: params.sharingId,
                },
                select: {
                    sharingId: true,
                    createdBy: {
                        select: {
                            name: true,
                            image: true,
                            id: true,
                        },
                    },
                    mods: {
                        include: {
                            likes: true,
                        },
                    },
                    name: true,
                },
            });

            const mappedModData = data.mods.map((elem) => ({
                ...elem,
                filePaths: JSON.parse(elem.filePaths),
                author: elem?.author ? JSON.parse(elem.author) : undefined,
                chipInformation: elem?.chipInformation
                    ? JSON.parse(elem.chipInformation)
                    : undefined,
            }));

            return resolve({
                data: {
                    ...data,
                    mods: mappedModData,
                },
            });
        } catch (err) {
            return reject(err);
        }
    });

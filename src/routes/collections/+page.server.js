import { prisma } from "../../hooks.server";

export const load = async () =>
    new Promise(async (resolve, reject) => {
        try {
            const data = await prisma.collection.findMany({
                select: {
                    sharingId: true,
                    createdBy: {
                        select: {
                            name: true,
                            image: true,
                            id: true,
                        },
                    },
                    mods: true,
                    name: true,
                },
            });

            return resolve({
                data: data.map((ction) => ({
                    ...ction,
                    mods: ction.mods.map((elem) => ({
                        ...elem,
                        filePaths: JSON.parse(elem.filePaths),
                        author: elem?.author
                            ? JSON.parse(elem.author)
                            : undefined,
                        chipInformation: elem?.chipInformation
                            ? JSON.parse(elem.chipInformation)
                            : undefined,
                    })),
                })),
            });
        } catch (err) {
            return reject(err);
        }
    });

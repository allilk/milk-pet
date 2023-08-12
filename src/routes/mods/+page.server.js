/** @type {import('./$types').PageLoad} */
import { prisma } from "../../hooks.server";

export const load = async ({ fetch }) =>
    new Promise(async (resolve, reject) => {
        try {
            const data = await prisma.modChip.findMany({
                include: {
                    likes: true,
                },
                take: 100,
            });
            const mappedData = JSON.parse(JSON.stringify(data)).map((elem) => ({
                ...elem,
                filePaths: JSON.parse(elem.filePaths),
                author: elem?.author ? JSON.parse(elem.author) : undefined,
                chipInformation: elem?.chipInformation
                    ? JSON.parse(elem.chipInformation)
                    : undefined,
                page: 1,
            }));

            return resolve({ data: JSON.parse(JSON.stringify(mappedData)) });
        } catch (err) {
            return reject(err);
        }
    });

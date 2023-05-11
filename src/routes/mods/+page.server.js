/** @type {import('./$types').PageLoad} */
import { ModChip } from "../../db/mongo";
import { modList } from "../../stores";

export const load = async ({ fetch }) =>
    new Promise(async (resolve, reject) => {
        try {
            const data = await ModChip.find({});
            const mappedData = JSON.parse(JSON.stringify(data)).map((elem) => ({
                ...elem,
                filePaths: JSON.parse(elem.filePaths),
                author: elem?.author ? JSON.parse(elem.author) : undefined,
                chipInformation: elem?.chipInformation
                    ? JSON.parse(elem.chipInformation)
                    : undefined,
            }));

            modList.set(mappedData);

            return resolve({ data: JSON.parse(JSON.stringify(mappedData)) });
        } catch (err) {
            return reject(err);
        }
    });

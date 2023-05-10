// import fs from "fs";
// import { ModChip } from "../../../db/mongo.js";

// export async function GET() {
//     const data = await ModChip.find({}).limit(50);
//     const mappedData = JSON.parse(JSON.stringify(data)).map((elem) => ({
//         ...elem,
//         author: elem?.author ? JSON.parse(elem.author) : undefined,
//         chipInformation: elem?.chipInformation
//             ? JSON.parse(elem.chipInformation)
//             : undefined,
//     }));

//     // return mods - need to add query parameters, filtering, limits, etc.

//     return new Response(JSON.stringify({ data: mappedData }), {
//         headers: {
//             "Content-Type": "application/json",
//         },
//     });
// }

// export async function PUT({ request }) {
//     const newMod = await request.json();
//     // Add new mod
//     try {
//         const data = new ModChip({
//             ...newMod,
//             author: newMod?.author ? JSON.stringify(newMod.author) : undefined,
//             chipInformation: newMod?.chipInformation
//                 ? JSON.stringify(newMod.chipInformation)
//                 : undefined,
//         });

//         const saveFile = await fetch(newMod?.discordDownloadLink);

//         const fileName = newMod?.discordDownloadLink.split("/")[6];
//         const blob = await saveFile.blob();

//         console.log(`LOG: Downloading mod "${fileName}"...`);
//         const buffer = Buffer.from(await blob.arrayBuffer());
//         fs.writeFileSync(`static/mods/${fileName}`, buffer);

//         console.log(`LOG: Downloading completed, saving mod to database...`);
//         await data.save();
//         console.log(`LOG: Mod succesfully downloaded and saved to database.`);

//         return new Response(JSON.stringify(newMod), {
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });
//     } catch (err) {
//         return new Response(
//             JSON.stringify({ message: err.toString() || "Error saving mod" })
//         );
//     }
// }

// export function DELETE() {
//     const modToDelete = {};

//     // Delete mod

//     return new Response(JSON.stringify({ modToDelete }), {
//         headers: {
//             "Content-Type": "application/json",
//         },
//     });
// }

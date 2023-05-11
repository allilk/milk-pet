// import fs from "fs";
// import { ModChip } from "../../../db/mongo.js";

// const endpoint = "https://www.keristero.xyz";

// const downloadImage = (imageURL) => {
//     const fileName = imageURL.split("/")[4];
//     // console.log(`LOG: Downloading "${fileName}"...`);

//     // const saveFile = await fetch(imageURL);
//     // const blob = await saveFile.blob();

//     // const buffer = Buffer.from(await blob.arrayBuffer());
//     // fs.writeFileSync(`static/mods/images/${fileName}`, buffer);
//     // console.log(`LOG: Downloading Complete`);

//     return `/mods/images/${fileName}`;
// };

// const mapData = (data) =>
//     Object.values(data).map((mod) => ({
//         type: mod.data.type,
//         name:
//             mod?.data?.name ||
//             mod?.attachment_data?.thread_name.match(/(?:\[.+\]) *(.+)$/)[1],
//         shortname: mod?.data?.detail?.props?.shortname || "",
//         description:
//             mod?.data?.detail?.props?.long_description ||
//             mod?.data?.detail?.props?.description,
//         shortDescription: mod?.data?.description,
//         previewImageURL: mod?.data?.detail?.preview
//             ? `${endpoint}/${mod?.data?.detail?.preview.replace("\\", "/")}`
//             : undefined,
//         iconImageURL: mod?.data?.detail?.icon
//             ? `${endpoint}/${mod?.data?.detail?.icon.replace("\\", "/")}`
//             : undefined,
//         discordDownloadLink: mod.attachment_data.discord_url,
//         filePaths: {
//             mod: "",
//             preview: mod?.data?.detail?.preview
//                 ? downloadImage(
//                       `${endpoint}/${mod?.data?.detail?.preview.replace(
//                           "\\",
//                           "/"
//                       )}`
//                   )
//                 : undefined,
//             icon: mod?.data?.detail?.icon
//                 ? downloadImage(
//                       `${endpoint}/${mod?.data?.detail?.icon.replace(
//                           "\\",
//                           "/"
//                       )}`
//                   )
//                 : undefined,
//         },
//         author: {
//             authorName: mod.attachment_data.author_name,
//             authorId: mod.attachment_data.author_id,
//             threadName: mod.attachment_data.thread_name,
//             threadId: mod.attachment_data.thread_id,
//             attachmentId: mod.attachment_data.attachment_id,
//             channelId: mod.attachment_data.channel_id,
//         },
//         chipInformation: {
//             labelColor: undefined,
//             chipColor: mod?.data?.detail?.color
//                 ? mod?.data?.detail?.color.toLowerCase()
//                 : undefined,
//             codes: mod?.data?.detail?.codes,
//             damage: mod?.data?.detail?.props?.damage,
//             timeFreeze: mod?.data?.detail?.props?.time_freeze,
//             element: mod?.data?.detail?.props?.element,
//             secondaryElement: mod?.data?.detail?.props?.secondary_element,
//             limit: mod?.data?.detail?.props?.limit,
//             canBoost: mod?.data?.detail?.props?.can_boost,
//             shape: mod?.data?.detail?.shape,
//             isProgram: mod?.data?.detail?.is_program,
//             cardClass: mod?.data?.detail?.props?.card_class,
//         },
//         uploadedAt: mod.attachment_data.timestamp,
//     }));

// export async function GET() {
//     const data = await ModChip.find({});
//     const mappedData = JSON.parse(JSON.stringify(data)).map((elem) => ({
//         ...elem,
//         filePaths: JSON.parse(elem.filePaths),
//         author: elem?.author ? JSON.parse(elem.author) : undefined,
//         chipInformation: elem?.chipInformation
//             ? JSON.parse(elem.chipInformation)
//             : undefined,
//     }));

//     // return mods - need to add query parameters, filtering, limits, etc.

//     // const mappedData = mapData(data).map((elem) => ({
//     //     ...elem,
//     //     filePaths: JSON.stringify(elem.filePaths),
//     //     chipInformation: JSON.stringify(elem.chipInformation),
//     //     author: JSON.stringify(elem.author),
//     // }));

//     // await ModChip.insertMany(mappedData);

//     //     console.log("complete");

//     return new Response(
//         JSON.stringify({ total: mappedData.length, data: mappedData }),
//         {
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         }
//     );
// }

// // export async function PUT({ request }) {
// //     const newMod = await request.json();
// //     // Add new mod
// //     try {
// //         const data = new ModChip({
// //             ...newMod,
// //             author: newMod?.author ? JSON.stringify(newMod.author) : undefined,
// //             chipInformation: newMod?.chipInformation
// //                 ? JSON.stringify(newMod.chipInformation)
// //                 : undefined,
// //         });

// // const saveFile = await fetch(newMod?.discordDownloadLink);

// // const fileName = newMod?.discordDownloadLink.split("/")[6];
// // const blob = await saveFile.blob();

// // console.log(`LOG: Downloading mod "${fileName}"...`);
// // const buffer = Buffer.from(await blob.arrayBuffer());
// // fs.writeFileSync(`static/mods/${fileName}`, buffer);

// //         console.log(`LOG: Downloading completed, saving mod to database...`);
// //         await data.save();
// //         console.log(`LOG: Mod succesfully downloaded and saved to database.`);

// //         return new Response(JSON.stringify(newMod), {
// //             headers: {
// //                 "Content-Type": "application/json",
// //             },
// //         });
// //     } catch (err) {
// //         return new Response(
// //             JSON.stringify({ message: err.toString() || "Error saving mod" })
// //         );
// //     }
// // }

// // export function DELETE() {
// //     const modToDelete = {};

// //     // Delete mod

// //     return new Response(JSON.stringify({ modToDelete }), {
// //         headers: {
// //             "Content-Type": "application/json",
// //         },
// //     });
// // }

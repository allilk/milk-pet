// import mongoose from "mongoose";

// const BattleChip = mongoose.model("Chip");

// export const load = async function () {
//     const data = await BattleChip.find({}, { limit: 50 }).select({
//         name: 1,
//         description: 1,
//         id: 1,
//         _id: 0,
//     });
//     // const data = new BattleChip({
//     //     id: "66667",
//     //     name: "test chip",
//     //     description: "test",
//     // });

//     // await data.save();

//     console.log({ ...data });

//     return {
//         chips: JSON.parse(JSON.stringify(data)),
//     };
// };

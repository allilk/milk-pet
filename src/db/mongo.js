import { MONGO_URL } from "$env/static/private";
import mongoose from "mongoose";
import { battleChipSchema } from "./models/BattleChip";

mongoose.model("Chip", battleChipSchema);

export function start_mongo() {
    console.log("Starting mongo connection...");
    return mongoose.connect(MONGO_URL, {
        socketTimeoutMS: 30000,
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

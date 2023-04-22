import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const battleChipSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        trim: true,
        default: "",
    },
    description: {
        type: String,
        default: "",
    },
});

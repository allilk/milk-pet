import mongoose from "mongoose";

const Schema = mongoose.Schema;

const battleChipSchema = new Schema({
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

mongoose.model("Chip", battleChipSchema);

import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const modchipSchema = new Schema({
    type: {
        type: String,
        trim: true,
        default: "",
        required: true,
    },
    name: {
        type: String,
        trim: true,
        default: "",
        required: true,
    },
    shortname: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
        default: "",
    },
    previewImageURL: {
        type: String,
        trim: true,
        default: "",
    },
    iconImageURL: {
        type: String,
        trim: true,
        default: "",
    },
    discordDownloadLink: {
        type: String,
        trim: true,
        default: "",
        required: true,
    },
    filePaths: {
        type: String,
        trim: true,
        default: "",
        required: true,
    },
    author: {
        type: String,
        default: "{}",
        required: true,
    },
    chipInformation: {
        type: String,
        default: "{}",
        required: true,
    },
    uploadedAt: {
        type: Date,
        default: Date.now(),
        required: true,
    },
});

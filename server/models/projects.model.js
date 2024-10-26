import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: "A title is required",
    },
    technologies: {
        type: String,
        trim: true,
        required: "A technology list is required",
    },
    short_description: {
        type: String,
        required: "A short description is required",
    },
    long_description: {
        type: String,
        trim: true,
        required: "A long description is required",
    },
    mainImageSrc: {
        type: String,
        required: "A main image is required",
    },
    extraImageSrc1: {
        type: String,
    },
    extraImageSrc2: {
        type: String,
    },
    extraImageSrc3: {
        type: String,
    },
    extraImageSrc4: {
        type: String,
    },
    startDate: {
        type: Date,
        required: "A start date is required",
    },
    endDate: {
        type: Date,
        required: "An end date is required",
    },
});

export default mongoose.model("Project", ProjectSchema);

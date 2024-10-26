import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: "Name is required",
    },
    phone: {
        type: String,
        trim: true,
        required: "Phone number is required",
    },
    email: {
        type: String,
        trim: true,
        required: "Email is required",
    },
    subject_type: {
        type: String,
        trim: true,
        required: "Subject type is required",
    },
    title: {
        type: String,
        required: "Title is required",
    },
    description: {
        type: String,
        required: "Description is required",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

export default mongoose.model("Contact", ContactSchema);

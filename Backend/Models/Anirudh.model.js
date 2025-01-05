import mongoose from "mongoose";

const anirudhSchema = new mongoose.Schema ({
    name: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required:true
    },
    frameworks: {
        type: Array,
        required: true
    },
    developerTools: {
        type: Array,
        required: true
    },
    libraries: {
        type: Array,
        required: true
    },
    databases: {
        type: Array,
        required: true,
    },
    languages: {
        type: Array,
        required: true,
    }
});

const Anirudh = mongoose.model("Anirudh", anirudhSchema, "anirudh");
export default Anirudh;
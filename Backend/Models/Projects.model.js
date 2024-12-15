import mongoose from "mongoose";

const projectSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    technologies: {
        type: Array,
        required: true
    }
});

const Product = mongoose.model("Project", projectSchema);
export default Project;
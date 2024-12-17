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
        type: String,
        required: true
    }
});

const Project = mongoose.model("Project", projectSchema,"projects");
export default Project;
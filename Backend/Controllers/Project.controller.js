import router from "../Routes/Projects.route.js";
import mongoose from "mongoose";
import Projects from "../Models/Projects.model.js"
export const getProjects = async (req,res) => {
    try {
        const projects = await Project.find({});
        res.status(200).json({success:true,data:projects});
    } catch (error) {
        console.log("error in fetching projects:", error.message);
        res.status(500).json({success:false, message:"Server Error"});
    }
};
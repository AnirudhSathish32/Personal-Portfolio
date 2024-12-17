import express from "express"
import Project from "../Models/Projects.model.js";

const router = express.Router();


router.get("/", async (req,res) => {
    try {
        const projects = await Project.find({});
        res.status(200).json({success:true,data:projects});
    } catch (error) {
        console.log("error in fetching projects:", error.message);
        res.status(500).json({success:false, message:"Server Error"});
    }
});


router.post("/", async (req, res) => {
    const project = req.body;

    const newProject = new Project(project)
    try {
        await newProject.save();
        res.status(201).json({success:true, data:newProject})
    } catch (error) {
        console.error("Error in create project:", error.message)
        res.status(500).json({success:false, message: "server error"});
    }
});

router.put

export default router;
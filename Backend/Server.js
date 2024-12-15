import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./Config/database.js";
import Project from ".../Models/Projects.model.js"
import Anirudh from ".../Models/Anirudh.model.js"
dotenv.config();

const app = express();

app.get("/api/projects", async (req,res) => {
    try {
        const projects = await Project.find({});
        res.status(200).json({success:true,data:projects});
    } catch (error) {
        console.log("error in fetching projects:", error.message);
        res.status(500).json({success:false, message:"Server Error"});
    }
})
app.get("/api/projects", (req,res) => {
    res.send("Server is ready");
});

console.log(process.env.MONGO_URI);
app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");
});
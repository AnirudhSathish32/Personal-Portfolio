import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./Config/database.js";
import Project from ".../Models/Projects.model.js"
import Anirudh from ".../Models/Anirudh.model.js"

import projectsRoute from "./Routes/Projects.route.js";
import anirudhRoute from "./Routes/Anirudh.route.js"

dotenv.config();

const app = express();

app.get("/", (req,res) => {
    res.send("Server is ready");
});

console.log(process.env.MONGO_URI);

app.use("/api/products", projectRoutes);
app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");
});
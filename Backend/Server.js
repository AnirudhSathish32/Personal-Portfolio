import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./Config/database.js";
import projectsRoute from "./Routes/Projects.route.js";
import anirudhRoute from "./Routes/Anirudh.route.js"

dotenv.config();

const app = express();

console.log(process.env.MONGO_URI);

app.use(express.json());

app.use("/api/projects", projectsRoute);
app.use("/api/anirudh", anirudhRoute);

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");
});
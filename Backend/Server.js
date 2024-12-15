import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./Config/database.js";
import projectsRoute from "./Routes/Projects.route.js";


dotenv.config();

const app = express();

console.log(process.env.MONGO_URI);

app.use("/api/products", projectsRoute);
app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");
});
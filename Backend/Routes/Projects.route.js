import express from "express"
import mongoose from "mongoose";
import getProjects from "../Controllers/Project.controller.js"
const router = express.Router();

router.get("/", getProjects)

export default router;
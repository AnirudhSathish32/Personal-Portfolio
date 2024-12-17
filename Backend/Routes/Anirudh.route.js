import Anirudh from "../Models/Anirudh.model.js";
import express from "express";

const router = express.Router();


router.get("/", async (req,res) => {
    try {
        const anirudh = await Anirudh.find({});
        res.status(200).json({success:true,data:anirudh});
    } catch (error) {
        console.log("error in fetching information:", error.message);
        res.status(500).json({success:false, message:"Server Error"});
    }
});


router.post("/", async (req, res) => {
    const anirudhInformation = req.body;

    const newAnirudhInformation = new Anirudh(anirudhInformation)
    try {
        await newAnirudhInformation.save();
        res.status(201).json({success:true, data:newAnirudhInformation})
    } catch (error) {
        console.error("Error in create project:", error.message)
        res.status(500).json({success:false, message: "server error"});
    }
});

export default router;
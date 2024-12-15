import express from "express"

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

export default router;
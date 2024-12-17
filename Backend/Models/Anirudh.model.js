import mongoose from "mongoose";

const anirudhSchema = new mongoose.Schema ({
    name: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required:true
    },
});

const Anirudh = mongoose.model("Anirudh", anirudhSchema, "anirudh");
export default Anirudh;
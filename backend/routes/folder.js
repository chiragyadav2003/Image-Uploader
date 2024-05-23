import express from 'express';
import Folder from "../models/Folder.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

//create a new folder
router.post("/", protect, async (req, res) => {
    const { name, parentFolder } = req.body;
    try {
        const folder = new Folder({
            name, parentFolder, user: req.user._id
        })
        await folder.save();
        res.status(201).json(folder);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
})

//get all folders
router.get("/", protect, async (req, res) => {
    try {
        const folders = await Folder.find({ user: req.user._id });
        res.json(folders);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
})

export default router;
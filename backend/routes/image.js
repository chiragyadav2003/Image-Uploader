import express from "express";
import multer from "multer";
import Image from "../models/Image.js";
import protect from "../middleware/authMiddleware.js";
import fs from "fs/promises";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// multer for disk storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueImageSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueImageSuffix + '-' + file.originalname);
    },
});

const upload = multer({ storage });

//upload an image
router.post("/", protect, upload.single('image'), async (req, res) => {
    const { name, folder } = req.body;
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No image file uploaded" });
        }

        // Check if the folder is provided and is a valid ObjectId
        const folderId = folder && folder !== 'null' ? folder : null;

        const image = new Image({
            name,
            url: req.file.path,
            user: req.user._id,
            ...(folderId && { folder: folderId }) // Only add folder if it's provided
        })

        await image.save();

        // Delete the uploaded image file from the uploads folder after saving to database
        const imagePath = path.join(__dirname, `../${req.file.path}`);
        await fs.unlink(imagePath);

        res.status(201).json(image);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
});

//all the images for authenticated users
router.get("/", protect, async (req, res) => {
    try {
        const images = await Image.find({ user: req.user._id });
        res.status(200).json(images);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
});

//search image by name for authenticated user
router.get("/search", protect, async (req, res) => {
    const { name } = req.query;
    try {
        const images = await Image.find({ name: { $regex: name, $options: "i" }, user: req.user._id });
        res.status(200).json(images);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
});

export default router;
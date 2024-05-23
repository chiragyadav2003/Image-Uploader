import express from 'express';
import cookieParser from 'cookie-parser';

import connectDb from "./db.js";
import { PORT as dbPORT } from "./dotenv.config.js"
import authRoutes from "./routes/auth.js"
import folderRoutes from "./routes/folder.js";
import imageRoutes from "./routes/image.js";

const app = express();
connectDb();

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/folders", folderRoutes);
app.use("/api/images", imageRoutes);

const PORT = dbPORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 🚀`);
});
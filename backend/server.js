import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import connectDb from "./db.js";
import { PORT as dbPORT } from "./dotenv.config.js"
import authRoutes from "./routes/auth.js"
import folderRoutes from "./routes/folder.js";
import imageRoutes from "./routes/image.js";


const app = express();
connectDb();

// Configure CORS middleware
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from localhost:5173
    credentials: true // Allow sending of cookies
}));

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/folders", folderRoutes);
app.use("/api/images", imageRoutes);

const PORT = dbPORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 🚀`);
});
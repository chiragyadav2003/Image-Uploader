import express from 'express';
import cookieParser from 'cookie-parser';

import connectDb from "./db.js";
import { PORT as dbPORT } from "./dotenv.config.js"

const app = express();

connectDb();

app.use(cookieParser());
app.use(express.json());

const PORT = dbPORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 🚀`);
});
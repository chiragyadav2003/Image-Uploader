import jwt from 'jsonwebtoken';
import User from "../models/User.js";
import { JWT_SECRET } from '../dotenv.config';

const protect = async (req, res, next) => {
    const token = req.header('Authorization').split(' ')[1];
    console.log("@@auth token", token)

    if (!token) {
        return res.status(401).json({ message: "Not authorized, no auth token" });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');
        //select all except password
        next();
    }
    catch (error) {
        res.status(401).json({ message: "Not authorized, token failed" })
    }
};

export default password;

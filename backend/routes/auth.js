import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from "../models/User.js";
import { JWT_SECRET } from '../dotenv.config';

const router = express.Router();

router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    try {
        const userExists = await User.findOne({
            username
        });
        if (userExists) {
            return res.status(400).json({
                message: 'User already exists'
            });
        }
        const user = new User({ username, password });
        await user.save();
        res.status(201).json({
            message: 'User created'
        });
    } catch (error) {
        console.log(error?.message);
        res.status(500).json({
            message: 'Server error'
        });
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({
            username
        });

        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({
                message: 'Invalid credentials'
            });
        }
        const token = jwt.sign(
            {
                id: user._id
            }, JWT_SECRET, {
            expiresIn: '1d'
        });

        res.cookie('Authorization', `Bearer ${token}`);
        res.status(200).json({
            message: 'User logged in'
        });
    } catch (error) {
        console.log(error?.message);
        res.status(500).json({
            message: 'Server error',
            error: error?.message
        });
    }
});

router.post('/logout', (req, res) => {
    res.clearCookie('Authorization');
    res.status(200).json({
        message: 'User logged out'
    });
});

export default router;
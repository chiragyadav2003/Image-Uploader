import express from 'express';
import jwt from 'jsonwebtoken';
import User from "../models/User.js";
import { JWT_SECRET } from '../dotenv.config.js';
import protect from "../middleware/authMiddleware.js"


const router = express.Router();

router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    try {
        const userExists = await User.findOne({
            email
        });
        if (userExists) {
            return res.status(400).json({
                message: 'User already exists'
            });
        }
        const user = new User({ email, password });

        await user.save();

        return res.status(201).json({
            message: 'User created successfully'
        });
    } catch (error) {
        console.log(error?.message);
        return res.status(500).json({
            error: error?.message,
            message: 'signup error'
        });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({
            email
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

        res.cookie('token', token);
        res.status(200).json({
            message: 'User logged in'
        });
    } catch (error) {
        console.log(error?.message);
        res.status(400).json({
            error: error?.message,
            message: 'login error',
        });
    }
});

router.post('/logout', (req, res) => {
    res.clearCookie('token');
    res.status(200).json({
        message: 'User logged out'
    });
});


router.get('/authStatus', protect, (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Authenticated',
        user: req.user
    })
});

export default router;
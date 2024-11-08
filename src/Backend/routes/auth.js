import express from 'express';
import User from '../models/User.js'; // Adjust this import according to your models folder

const router = express.Router();

// Registration route
router.post('/register', async (req, res) => {
    const { userName, userEmail, userPassword, linkedinProfile, events, cateringName, menuDetails, functionHallName, hallCapacity } = req.body;
    
    try {
        const newUser = new User({
            userName,
            userEmail,
            userPassword,
            linkedinProfile,
            events,
            cateringName,
            menuDetails,
            functionHallName,
            hallCapacity,
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { userEmail, userPassword } = req.body;

    try {
        const user = await User.findOne({ userEmail });
        if (!user || user.userPassword !== userPassword) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;

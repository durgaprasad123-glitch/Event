import express from 'express';
import Booking from '../models/Booking.js'; // Ensure you have a Booking model

const router = express.Router();

// GET all bookings
router.get('/', async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new booking
router.post('/', async (req, res) => {
    const booking = new Booking(req.body);
    try {
        await booking.save();
        res.status(201).json(booking);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

export default router; // Change module.exports to export default

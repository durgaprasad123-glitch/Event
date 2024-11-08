import express from 'express';
import Event from '../models/Event.js'; // Make sure to add .js extension

const router = express.Router();

// GET all events
router.get('/', async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new event
router.post('/', async (req, res) => {
    const event = new Event(req.body);
    try {
        await event.save();
        res.status(201).json(event);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

export default router; // Change module.exports to export default

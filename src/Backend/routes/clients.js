import express from 'express';
import Client from '../models/Client.js'; // Ensure you have a Client model

const router = express.Router();

// GET all clients
router.get('/', async (req, res) => {
    try {
        const clients = await Client.find();
        res.json(clients);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new client
router.post('/', async (req, res) => {
    const client = new Client(req.body);
    try {
        await client.save();
        res.status(201).json(client);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

export default router; // Change module.exports to export default

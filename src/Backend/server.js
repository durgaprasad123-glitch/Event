import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import path from 'path';
import authRoutes from './routes/auth.js';
import clientRoutes from './routes/clients.js';
import eventRoutes from './routes/events.js';

dotenv.config(); // Load environment variables

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/events', eventRoutes);

// Serve React frontend in production
if (process.env.NODE_ENV === 'production') {
    const __dirname = path.dirname(new URL(import.meta.url).pathname); // ES module-friendly __dirname
    app.use(express.static(path.join(__dirname, '../frontend/dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend/dist', 'index.html'));
    });
} else {
    // For development, API routes are available, but no frontend static files served.
    app.get('/', (req, res) => {
        res.send('API is running...');
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

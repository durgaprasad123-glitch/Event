import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
    date: { type: Date, required: true },
    // Add other fields as needed
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking; 
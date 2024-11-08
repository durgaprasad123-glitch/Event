import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    // Add other fields as needed
});

const Client = mongoose.model('Client', clientSchema);

export default Client;

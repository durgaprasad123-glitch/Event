import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    userEmail: { type: String, required: true, unique: true },
    userPassword: { type: String, required: true },
    linkedinProfile: String,
    events: [String],
    cateringName: String,
    menuDetails: String,
    functionHallName: String,
    hallCapacity: Number,
});

export default mongoose.model('User', userSchema);

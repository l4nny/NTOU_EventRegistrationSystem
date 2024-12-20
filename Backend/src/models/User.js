// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ['guest', 'normalUser', 'advancedUser', 'admin'], required: true },
    // registeredEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }],
    // attendedEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }]
});

module.exports = mongoose.model('User', userSchema);

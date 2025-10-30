const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
    caption: String,
    url: String,
    public_id: String,
    uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Photo', PhotoSchema);
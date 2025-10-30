const mongoose = require('mongoose');

const StatusSchema = new mongoose.Schema({
    url: String,
    public_id: String,
    resource_type: { type: String, enum: ['image', 'video'], default: 'image' },
    createdAt: { type: Date, default: Date.now },
    expireAt: { type: Date, required: true }
});

StatusSchema.index({ expireAt: 1 }, { expireAfterSeconds: 0 });

module.exports = mongoose.model('Status', StatusSchema);
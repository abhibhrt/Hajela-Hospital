const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const { adminAuth } = require('../middlewares/auth.js');
const Status = require('../models/status.js');
const { uploadBufferToCloudinary, cloudinary } = require('../configs/cloudinary.js');

// NOTE: for videos we will rely on Cloudinary's returned 'duration' field to validate <= 15s.
// This approach uploads then validates; if invalid we delete the uploaded asset and return error.
// Requires Cloudinary account that reports duration for video uploads.

router.post('/', adminAuth, upload.single('file'), async (req, res) => {
    if (!req.file) return res.status(400).json({ message: 'file required' });

    // determine resource type by mimetype
    const isVideo = req.file.mimetype.startsWith('video/');
    const resource_type = isVideo ? 'video' : 'image';
    try {
        const result = await uploadBufferToCloudinary(req.file.buffer, { folder: 'doctor/statuses', resource_type });
        // if video, ensure duration <= 15
        if (isVideo) {
            // Cloudinary returns 'duration' in seconds for many video uploads
            const duration = result.duration || 0;
            if (duration > 15) {
                // delete uploaded video
                try { await cloudinary.uploader.destroy(result.public_id, { resource_type: 'video' }); } catch (e) { }
                return res.status(400).json({ message: 'video duration exceeds 15 seconds' });
            }
        }

        const now = new Date();
        const expireAt = new Date(now.getTime() + 24 * 60 * 60 * 1000);
        const s = new Status({
            url: result.secure_url,
            public_id: result.public_id,
            resource_type,
            createdAt: now,
            expireAt
        });
        await s.save();
        res.json(s);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'upload failed' });
    }
});

// public: list active statuses (server TTL will remove expired ones automatically)
router.get('/', async (req, res) => {
    const active = await Status.find().sort({ createdAt: -1 });
    res.json(active);
});

// admin: delete status
router.delete('/:id', adminAuth, async (req, res) => {
    const s = await Status.findById(req.params.id);
    if (!s) return res.status(404).json({ message: 'not found' });
    try {
        const opts = s.resource_type === 'video' ? { resource_type: 'video' } : undefined;
        await cloudinary.uploader.destroy(s.public_id, opts);
    } catch (e) { }
    await s.deleteOne();
    res.json({ message: 'deleted' });
});

module.exports = router;
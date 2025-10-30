const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const { adminAuth } = require('../middlewares/auth.js');
const Photo = require('../models/photos.js');
const { uploadBufferToCloudinary, cloudinary } = require('../configs/cloudinary.js');

// create photo (admin only)
router.post('/', adminAuth, upload.single('file'), async (req, res) => {
    if (!req.file) return res.status(400).json({ message: 'file required' });
    try {
        const result = await uploadBufferToCloudinary(req.file.buffer, { folder: 'doctor/photos', resource_type: 'image' });
        const p = new Photo({ caption: req.body.caption || '', url: result.secure_url, public_id: result.public_id });
        await p.save();
        res.json(p);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'upload failed' });
    }
});

// read all photos (public)
router.get('/', async (req, res) => {
    const photos = await Photo.find().sort({ uploadedAt: -1 });
    res.json(photos);
});

// update caption or replace image (admin)
router.put('/:id', adminAuth, upload.single('file'), async (req, res) => {
    const p = await Photo.findById(req.params.id);
    if (!p) return res.status(404).json({ message: 'not found' });
    if (req.file) {
        // delete old
        try { await cloudinary.uploader.destroy(p.public_id); } catch (e) { /* ignore */ }
        const result = await uploadBufferToCloudinary(req.file.buffer, { folder: 'doctor/photos', resource_type: 'image' });
        p.url = result.secure_url;
        p.public_id = result.public_id;
    }
    if (typeof req.body.caption !== 'undefined') p.caption = req.body.caption;
    await p.save();
    res.json(p);
});

// delete photo (admin)
router.delete('/:id', adminAuth, async (req, res) => {
    const p = await Photo.findById(req.params.id);
    if (!p) return res.status(404).json({ message: 'not found' });
    try { await cloudinary.uploader.destroy(p.public_id); } catch (e) { /* ignore */ }
    await p.deleteOne();
    res.json({ message: 'deleted' });
});

module.exports = router;
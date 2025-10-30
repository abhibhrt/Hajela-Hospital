const express = require('express');
const router = express.Router();
const Appointment = require('../models/appointment.js');
const { adminAuth } = require('../middlewares/auth.js');

// public booking endpoint — multiple users can book same slot (no exclusivity)
router.post('/book', async (req, res) => {
    const { name, phone, email, date, type, message } = req.body;
    if (!name || !phone || !email || !date || !type) return res.status(400).json({ message: 'all fields are required' });

    const appointmentDate = new Date(date);
    if (isNaN(appointmentDate.getTime())) return res.status(400).json({ message: 'invalid date' });

    const appt = new Appointment({ name, phone, email, date: appointmentDate, type, message });
    await appt.save();
    res.json({ message: 'booked', appointment: appt });
});

// admin-only: view all bookings
router.get('/all', adminAuth, async (req, res) => {
    const all = await Appointment.find().sort({ date: 1 });
    res.json(all);
});

module.exports = router;
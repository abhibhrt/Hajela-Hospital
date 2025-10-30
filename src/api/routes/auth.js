const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const DEFAULT_ADMIN_PW = 'admin123'; // change after first login

// ensure admin user exists on first run
async function ensureAdminExists() {
    const email = process.env.ADMIN_EMAIL;
    if (!email) return;
    const existing = await User.findOne({ email });
    if (existing) return;
    let password = DEFAULT_ADMIN_PW;
    // optional: if ADMIN_PASSWORD_HASH provided, use it
    if (process.env.ADMIN_PASSWORD_HASH) {
        const user = new User({ email, passwordHash: process.env.ADMIN_PASSWORD_HASH, role: 'admin' });
        await user.save();
        return;
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = new User({ email, passwordHash: hash, role: 'admin' });
    await user.save();
}
ensureAdminExists().catch(console.error);

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: 'email+password required' });
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'invalid' });
    const ok = await user.verifyPassword(password);
    if (!ok) return res.status(401).json({ message: 'invalid' });
    const token = jwt.sign({ id: user._id, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token });
});

module.exports = router;
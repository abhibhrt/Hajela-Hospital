const jwt = require('jsonwebtoken');

function adminAuth(req, res, next) {
    const header = req.headers.authorization;
    if (!header) return res.status(401).json({ message: 'no token' });
    const token = header.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'no token' });
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        if (payload.role !== 'admin') return res.status(403).json({ message: 'forbidden' });
        req.admin = payload;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'invalid token' });
    }
}

module.exports = { adminAuth };
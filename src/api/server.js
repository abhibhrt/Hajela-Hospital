require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const authRoutes = require('./routes/auth.js');
const appointmentRoutes = require('./routes/appointments.js');
const photoRoutes = require('./routes/photos.js');
const statusRoutes = require('./routes/statuses.js');

const app = express();
app.use(cors({
    origin: "*"
}));
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/auth', authRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/photos', photoRoutes);
app.use('/api/statuses', statusRoutes);

const PORT = process.env.PORT || 5000;

async function start() {
    await mongoose.connect(process.env.MONGO_URI, {});
    // ensure TTL index for statuses created below by model definition
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
}
start().catch(err => {
    console.error('Startup error', err);
    process.exit(1);
});
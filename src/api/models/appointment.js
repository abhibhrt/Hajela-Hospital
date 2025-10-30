const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    match: [/^\+?[1-9]\d{1,14}$/, 'Please fill a valid phone number'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/.+@.+\..+/, 'Please fill a valid email address'],
    trim: true
  },
  date: {
    type: Date,
    required: [true, 'Appointment date is required'],
    validate: {
      validator: function (value) {
        return value >= new Date().setHours(0, 0, 0, 0);
      },
      message: 'Appointment date must be today or in the future'
    }
  },
  type: {
    type: String,
    required: [true, 'Appointment type is required'],
    enum: ['ivf', 'iui', 'consultation', 'followup']
  },
  message: {
    type: String,
    trim: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Appointment', AppointmentSchema);
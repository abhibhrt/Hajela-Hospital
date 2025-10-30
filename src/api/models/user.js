const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    passwordHash: String,
    role: { type: String, enum: ['admin'], default: 'admin' }
});

UserSchema.methods.verifyPassword = function (password) {
    return bcrypt.compare(password, this.passwordHash);
};

module.exports = mongoose.model('User', UserSchema);
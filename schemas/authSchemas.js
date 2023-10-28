const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName: { type: 'string', required: true },
    password: { type: 'string', required: true }
});

module.exports = userSchema;
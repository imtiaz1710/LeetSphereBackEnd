const mongoose = require('mongoose');

const contestSchema = mongoose.Schema({
    title: {
        type: 'string',
        required: true
    },
    description: String,
    prolemList: [String],
    startDate: {type: Date, default: Date.now },
    endDate: { type: Date, required: true }
});


module.exports = contestSchema;
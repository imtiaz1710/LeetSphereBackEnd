const mongoose = require('mongoose');

const contestSchema = mongoose.Schema({
    title: {
        type: 'string',
        require: true
    },
    description: String,
    prolemList: [String],
    startDate: {type: Date, default: Date.now },
    endDate: { type: Date, require: true }
});


module.exports = contestSchema;
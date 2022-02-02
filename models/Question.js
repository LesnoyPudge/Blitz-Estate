const mongoose = require('mongoose');



mongoose.pluralize(null);

const schema = new mongoose.Schema({
    clientName: {type: String, required: true},
    clientEmail: {type: String, required: true},
    questionText: {type: String, required: true},
    requestTime: {type: Date, required: true, default: Date.now},
});

module.exports = mongoose.model('Question', schema);
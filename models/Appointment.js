const mongoose = require('mongoose');



mongoose.pluralize(null);

const schema = new mongoose.Schema({
    clientName: {type: String, required: true},
    clientPhone: {type: String, required: true},
    time: {type: String, required: true},
    apartmentId: {type: String, required: true},
    requestTime: {type: Date, required: true, default: Date.now},
});

module.exports = mongoose.model('Appointment', schema);
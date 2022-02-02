const mongoose = require('mongoose');



mongoose.pluralize(null);

const schema = new mongoose.Schema({
    label: {type: String, required: true},
    image: {type: String, required: true},
    lot: {type: Number, required: true, unique: true},
    price: {type: Number, required: true},
    area: {type: Number, required: true},
    floor: {type: Number, required: true},
});

module.exports = mongoose.model('Apartment', schema);
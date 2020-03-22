const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    bluetooth: {
        type: Boolean,
        required: true
    },
    microphone: {
        type: Boolean,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0,
        max: 120000
    },
    style: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Headphones', schema);

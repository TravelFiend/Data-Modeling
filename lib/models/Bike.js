const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    frameMaterial: {
        type: String,
        required: true
    },
    spokes: {
        type: Number,
        required: true,
        min: 28,
        max: 144
    },
    wheelSize: {
        type: Number,
        required: true,
        min: 26,
        max: 29
    },
    saddle: {
        type: String,
    }
});

module.exports = mongoose.model('Bike', schema);

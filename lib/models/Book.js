const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    totalPages: {
        type: Number,
        min: 0
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Book', schema);

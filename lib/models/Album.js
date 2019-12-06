const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    artist: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    totalSongs: {
        type: Number,
        min: 1,
        max: 50
    }
});

module.exports = mongoose.model('Album', schema);

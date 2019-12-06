const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    printType: {
        type: String,
        required: true
    },
    oilBased: {
        type: Boolean,
        required: true
    },
    color: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Ink', schema);

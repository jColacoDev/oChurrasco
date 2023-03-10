const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    url: {
        type: String,
        text: true,
        default: "https://via.placeholder.com/200?text=placeholder"
    },
    label: {
        type: String,
        text: true,
        default: "placeholder"
    },
    description: {
        type: String,
        text: true,
        default: "this placeholder is a default"
    },
    public_id: Date.now()

}, {timestamps: true});

module.exports = mongoose.model('Image', imageSchema)
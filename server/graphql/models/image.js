const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    url: {
        type: String,
        required: 'Url is required',
        text: true
    },
    label: {
        type: String,
        required: 'Label is required',
        text: true
    },
    description: {
        type: String,
        text: true,
        default: ""
    },
    public_id: Date.now()

}, {timestamps: true});

module.exports = mongoose.model('Image', imageSchema)
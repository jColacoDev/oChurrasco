const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const catalogSchema = new mongoose.Schema({
    postedBy: {
        type: ObjectId,
        ref: "User",
    },
    ref: {
        type: String,
        required: 'Ref is required',
        text: true
    },
    label: {
        type: String,
        required: 'Label is required',
        text: true
    },
    url: {
        type: String,
        text: true,
        required: 'Url is required'
    },
    description: {
        type: String,
        text: true,
        default: ""
    },

}, {timestamps: true});

module.exports = mongoose.model('Catalog', catalogSchema)
const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const productSchema = new mongoose.Schema({
    postedBy: {
        type: ObjectId,
        ref: "User",
    },
    ref: {
        type: String,
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
    images: {
        type: [ObjectId],
        ref: 'Image'
   }
}, {timestamps: true});

module.exports = mongoose.model('Product', productSchema)
const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const familySchema = new mongoose.Schema({
    postedBy: {
        type: ObjectId,
        ref: "User"
    },
    family: {
        type: String,
        required: 'Family is required',
        text: true
    },
    label: {
        type: String,
        required: 'Label is required',
        text: true
    },
    image: {
        type: ObjectId,
        ref: 'Image'
   }

}, {timestamps: true});

module.exports = mongoose.model('Family', familySchema)
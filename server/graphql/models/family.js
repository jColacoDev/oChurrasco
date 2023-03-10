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
    images: {
        type: Array,
        default: [
            {
                url: 'https://via.placeholder.com/200?text=Profile',
                label: "placeholder",
                description: "this placeholder is a default",
                public_id: Date.now()
            }
        ]
    },

}, {timestamps: true});

module.exports = mongoose.model('Family', familySchema)
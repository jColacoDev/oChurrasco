const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    name: {
        type: String,
    },
    password: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        index: true,
        unique: true
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
    about: {
        type: String,
    },
    active: {
        type: Boolean,
    },
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);
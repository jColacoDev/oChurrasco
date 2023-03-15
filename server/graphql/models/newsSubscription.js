const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const newsSubscriptionSchema = new mongoose.Schema({
    postedBy: {
        type: ObjectId,
        ref: "User"
    },
    email: {
        type: String,
        required: 'Email is required',
        text: true
    },
    label: {
        type: String,
        required: 'Label is required',
        text: true
    },

}, {timestamps: true});

module.exports = mongoose.model('NewsSubscription', newsSubscriptionSchema)
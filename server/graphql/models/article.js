const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const articleSchema = new mongoose.Schema({
    postedBy: {
        type: ObjectId,
        ref: "User"
    },
    label: {
        type: String,
        required: 'Label is required',
        text: true
    },   
    type: {
        type: String,
        required: 'Type is required',
        text: true
    },   
    family: {
        type: String,
        required: 'Family is required',
        text: true
    },
    code: {
        type: String,
        text: true,
        default: ""
    },
    url: {
        type: String,
        text: true,
        default: ""
    },
    about: {
        type: String,
        text: true,
        default: ""
    },
    abbr: {
        type: String,
        text: true,
        default: ""
    },
    brand: {
        type: String,
        text: true,
        default: ""
    },
    supplier: {
        type: String,
        text: true,
        default: ""
    },
    supplierRef: {
        type: String,
        text: true,
        default: ""
    },
    notes: {
        type: String,
        text: true,
        default: ""
    },
    price_purchase: {
        type: String,
        text: true,
        default: ""
    },
    price_sale: {
        type: String,
        text: true,
        default: ""
    },
    images: {
        type: Array,
        default: [
            {
                url: 'https://via.placeholder.com/200?text=Placeholder',
                label: "placeholder",
                description: "this placeholder is a default",
                public_id: Date.now()
            }
        ]
    },
    services: {
        type: Array,
        default: []
    },
    related_codes: {
        type: Array,
        default: []
    },
    related_families: {
        type: Array,
        default: []
    },
    related_articles: {
        type: Array,
        default: []
    },
    

}, {timestamps: true});

module.exports = mongoose.model('Article', articleSchema)
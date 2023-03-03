const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const categorySchema = new mongoose.Schema({
    postedBy: {
        type: ObjectId,
        ref: "User"
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
    description: {
        type: String,
        text: true,
        default: ""
    },
    image: {
        type: ObjectId,
        ref: 'Image'
    },
    products: {
        type: [ObjectId],
        ref: 'Product'
    },
    catalogs: {
        type: [ObjectId],
        ref: 'Catalog'
    },
    categories: {
       type: [ObjectId],
       ref: 'Category'
    }
}, {timestamps: true});

module.exports = mongoose.model('Category', categorySchema)
// const mongoose = require('mongoose');
// const {ObjectId} = mongoose.Schema;

// const articleSchema = new mongoose.Schema({
//     postedBy: {
//         type: ObjectId,
//         ref: "User"
//     },
//     code: {
//         type: String,
//         required: 'Code is required',
//         text: true
//     },
//     label: {
//         type: String,
//         required: 'Label is required',
//         text: true
//     },
//     type: {
//         type: String,
//         required: 'Type is required',
//         text: true
//     },
//     family: {
//         type: String,
//         required: 'Family is required',
//         text: true
//     },
//     abbr: {
//         type: String,
//         text: true,
//         default: ""
//     },
//     about: {
//         type: String,
//         text: true,
//         default: ""
//     },
//     brand: {
//         type: String,
//         text: true,
//         default: ""
//     },
//     supplier: {
//         type: String,
//         text: true,
//         default: ""
//     },
//     supplierRef: {
//         type: String,
//         text: true,
//         default: ""
//     },
//     notes: {
//         type: String,
//         text: true,
//         default: ""
//     },
//     price: {
//         type: ObjectId,
//         ref: 'Price'
//     },
//     services: {
//         type: Array,
//         default: []
//     },
//     related: {
//         type: ObjectId,
//         ref: 'Related'
//     },
//     images: {
//         type: [ObjectId],
//         ref: 'Image'
//    }

// }, {timestamps: true});

// module.exports = mongoose.model('Article', articleSchema)
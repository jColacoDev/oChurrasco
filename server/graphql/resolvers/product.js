const {authCheck} = require('../../helpers/auth')
const Product = require('../models/product')
const User = require('../models/user')

// subscriptions
const PRODUCT_CREATED = "PRODUCT_CREATED";
const PRODUCT_UPDATED = "PRODUCT_UPDATED";
const PRODUCT_DELETED = "PRODUCT_DELETED";

// queries
const searchProducts = async (parent, args, {req}) => {
    const {query} = args;

    return await Product.find({
        $text: {$search: query}
    }).populate('postedBy', 'username').exec();
}
const singleProduct = async (parent, args, {req}) => {
    return await Product.findById({
        _id: args.productId
    })
    .populate('postedBy', '_id username')
    .exec();
}
const totalProducts = async (parent, args, {req}) =>
    await Product.find({}).estimatedDocumentCount().exec();

const allProducts = async (parent, args, {req}) => {
    const currentPage = args.page || 1;
    const perPage = args.perPage || 3;

    return await Product.find({})
        .skip((currentPage -1) * perPage)
        .populate('postedBy', 'username _id')
        .limit(perPage)
        .sort({createdAt: -1})
        .exec();
}
const productsByUser = async (parent, args, {req}) => {
    const currentUser = await authCheck(req);
    const currentUserFromDb = await User.findOne({
        email: currentUser.email
    }).exec();

    return await Product.find({
        postedBy: currentUserFromDb
    })
    .populate('postedBy', '_id username')
    .sort({createdAt: -1})
}

// mutations
const productCreate = async (parent, args, {req, pubsub}) => {
    const currentUser = await authCheck(req);
    if(args.input.content.trim() === '') throw new Error('Content is required');

    const currentUserFromDb = await User.findOne({
        email: currentUser.email
    });

    let productCreated = await new Product({
        ...args.input,
        postedBy: currentUserFromDb._id
    }).save()
    .then(product => product.populate('postedBy', '_id username'))
    
    pubsub.publish(PRODUCT_CREATED, { productCreated });

    return productCreated;
}
const productUpdate = async (parent, args, {req, pubsub}) => {
    const currentUser = await authCheck(req);
    if(args.input.content.trim() === '') throw new Error('Content is required');
    const currentUserFromDb = await User.findOne({
        email: currentUser.email
    }).exec();
    const productToUpdate = await Product.findById({_id: args.input._id}).exec();
    if(currentUserFromDb._id.toString() !== productToUpdate.postedBy._id.toString())
        throw new Error('Unauthorized action');

    let productUpdated = await Product.findByIdAndUpdate(args.input._id, 
        {...args.input}, 
        {new: true}
    ).exec()
    .then(product => product.populate('postedBy', '_id username'));

    pubsub.publish(PRODUCT_UPDATED, { productUpdated });

    return productUpdated;
}
const productDelete = async (parent, args, {req, pubsub}) => {
    const currentUser = await authCheck(req);
    const currentUserFromDb = await User.findOne({
        email: currentUser.email
    }).exec();
    const productToDelete = await Product.findById({_id: args.productId}).exec();
    if(currentUserFromDb._id.toString() !== 
        productToDelete.postedBy._id.toString()
    ) throw new Error('Unauthorized action');

    let productDeleted = await Product.findByIdAndDelete({_id: args.productId}).exec()
    .then(product => product.populate('postedBy', '_id username'));

    pubsub.publish(PRODUCT_DELETED, { productDeleted });

    return productDeleted;
}

module.exports = {
    Query: {
        totalProducts,
        allProducts,
        productsByUser,
        singleProduct,
        searchProducts
    },
    Mutation: {
        productDelete,
        productCreate,
        productUpdate
    },
    Subscription: {
        productCreated: {
            subscribe: (parent, args, {pubsub}) => pubsub.asyncIterator([PRODUCT_CREATED])
        },
        productUpdated: {
            subscribe: (parent, args, {pubsub}) => pubsub.asyncIterator([PRODUCT_UPDATED])
        },
        productDeleted: {
            subscribe: (parent, args, {pubsub}) => pubsub.asyncIterator([PRODUCT_DELETED])
        }
    }
};

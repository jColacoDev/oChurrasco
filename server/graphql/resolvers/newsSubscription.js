const {authCheck} = require('../../firebase/auth');
const NewsSubscription = require('../models/newsSubscription')
const User = require('../models/user')

// newsSubscriptions
const NEWS_SUBSCRIPTION_CREATED = "NEWS_SUBSCRIPTION_CREATED";
const NEWS_SUBSCRIPTION_UPDATED = "NEWS_SUBSCRIPTION_UPDATED";
const NEWS_SUBSCRIPTION_DELETED = "NEWS_SUBSCRIPTION_DELETED";

// queries
const singleNewsSubscription = async (parent, args, {req}) => {
    return await NewsSubscription.findById({
        _id: args.newsSubscriptionId
    })
    .exec();
}
const totalNewsSubscriptions = async (parent, args, {req}) =>
    await NewsSubscription.find({}).estimatedDocumentCount().exec();

const allNewsSubscriptions = async (parent, args, {req}) => {
    return await NewsSubscription.find({})
        .sort({createdAt: -1})
        .exec();
}

// mutations
const newsSubscriptionCreate = async (parent, args, {req, pubsub}) => {
    
    console.log(args)
    let newsSubscriptionCreated = await new NewsSubscription({
        email: args.input.email,
        label: args.input.label,
    }).save()

    pubsub.publish(NEWS_SUBSCRIPTION_CREATED, { newsSubscriptionCreated });
    console.info(newsSubscriptionCreated)

    return newsSubscriptionCreated;
}
const newsSubscriptionUpdate = async (parent, args, {req, pubsub}) => {
    const currentUser = await authCheck(req);
    if(args.input.label.trim() === '') throw new Error('Label is required');

    const currentUserFromDb = await User.findOne({
        email: currentUser.email
    }).exec();
    const newsSubscriptionToUpdate = await NewsSubscription.findById({_id: args.input._id}).exec();
    if(currentUserFromDb._id.toString() !== newsSubscriptionToUpdate.postedBy._id.toString())
        throw new Error('Unauthorized action');

    let newsSubscriptionUpdated = await NewsSubscription.findByIdAndUpdate(args.input._id, 
        {
            email: args.input.email,
            label: args.input.label,
        }, 
        {new: true}
    ).exec()
    .then(newsSubscriptions => newsSubscriptions.populate('postedBy', '_id username'));

    pubsub.publish(NEWS_SUBSCRIPTION_UPDATED, { newsSubscriptionUpdated });

    return newsSubscriptionUpdated;
}
const newsSubscriptionDelete = async (parent, args, {req, pubsub}) => {
    const currentUser = await authCheck(req);
    const currentUserFromDb = await User.findOne({
        email: currentUser.email
    }).exec();
    const newsSubscriptionToDelete = await NewsSubscription.findById({_id: args.newsSubscriptionId}).exec();
    if(currentUserFromDb._id.toString() !== 
        newsSubscriptionToDelete.postedBy._id.toString()
    ) throw new Error('Unauthorized action');

    let newsSubscriptionDeleted = await NewsSubscription.findByIdAndDelete({_id: args.newsSubscriptionId}).exec()
    .then(newsSubscriptions => newsSubscriptions.populate('postedBy', '_id username'));

    pubsub.publish(NEWS_SUBSCRIPTION_DELETED, { newsSubscriptionDeleted });

    return newsSubscriptionDeleted;
}

module.exports = {
    Query: {
        totalNewsSubscriptions,
        allNewsSubscriptions,
        singleNewsSubscription,
    },
    Mutation: {
        newsSubscriptionDelete,
        newsSubscriptionCreate,
        newsSubscriptionUpdate
    },
    Subscription: {
        newsSubscriptionCreated: {
            subscribe: (parent, args, {pubsub}) => pubsub.asyncIterator([NEWS_SUBSCRIPTION_CREATED])
        },
        newsSubscriptionUpdated: {
            subscribe: (parent, args, {pubsub}) => pubsub.asyncIterator([NEWS_SUBSCRIPTION_UPDATED])
        },
        newsSubscriptionDeleted: {
            subscribe: (parent, args, {pubsub}) => pubsub.asyncIterator([NEWS_SUBSCRIPTION_DELETED])
        }
    }
};

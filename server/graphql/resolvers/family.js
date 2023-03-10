const {authCheck} = require('../../helpers/auth')
const Family = require('../models/family')
const User = require('../models/user')

// subscriptions
const FAMILY_CREATED = "FAMILY_CREATED";
const FAMILY_UPDATED = "FAMILY_UPDATED";
const FAMILY_DELETED = "FAMILY_DELETED";

// queries
const searchFamilies = async (parent, args, {req}) => {
    const {query} = args;

    return await Family.find({
        $text: {$search: query}
    }).populate('postedBy', 'label').exec();
}
const singleFamily = async (parent, args, {req}) => {
    return await Family.findById({
        _id: args.familyId
    })
    .populate('postedBy', '_id username')
    .exec();
}
const totalFamilies = async (parent, args, {req}) =>
    await Family.find({}).estimatedDocumentCount().exec();

const allFamilies = async (parent, args, {req}) => {
    return await Family.find({})
        .populate('postedBy', 'label _id')
        .sort({createdAt: -1})
        .exec();
}
const familiesFromFamily = async (parent, args, {req}) => {
    console.log(args.familyId)
    console.log(await Family.find({
        family: args.familyId
    })
        .populate('postedBy', 'label _id')
        .sort({createdAt: -1})
        .exec())

    return await Family.find({
        family: args.familyId
    })
        .populate('postedBy', 'label _id')
        .sort({createdAt: -1})
        .exec();
}
const parentsFromFamily = async (parent, args, {req}) => {
    let parents = [];

    const family = await Family.find({
        _id: args.familyId
    })
    .populate('postedBy', 'label _id')
    .sort({createdAt: -1})
    .exec();
    
    parents = [...family];

    let familyFamily = family[0].family;

    while(familyFamily && familyFamily !=="root"){
        const parentFromFamily = await Family.find({
            _id: familyFamily
        })
        .populate('postedBy', 'label _id')
        .sort({createdAt: -1})
        .exec();
        parents = [...parentFromFamily, ...parents]

        familyFamily = parentFromFamily[0].family;
    }

    return parents;
}
const familiesByUser = async (parent, args, {req}) => {
    const currentUser = await authCheck(req);
    const currentUserFromDb = await User.findOne({
        email: currentUser.email
    }).exec();

    return await Family.find({
        postedBy: currentUserFromDb
    })
    .populate('postedBy', '_id username')
    .sort({createdAt: -1})
}

// mutations
const familyCreate = async (parent, args, {req, pubsub}) => {
    const currentUser = await authCheck(req);
    
    const currentUserFromDb = await User.findOne({
        email: currentUser.email
    });
    
    let familyCreated = await new Family({
        ...args.input,
        postedBy: currentUserFromDb._id
    }).save()
    .then(family => family.populate('postedBy', '_id username'))

    pubsub.publish(FAMILY_CREATED, { familyCreated });

    console.log(args)
    console.log(args.input.images)
    console.log(familyCreated)

    return familyCreated;
}
const familyUpdate = async (parent, args, {req, pubsub}) => {
    const currentUser = await authCheck(req);
    if(args.input.label.trim() === '') throw new Error('Label is required');

    const currentUserFromDb = await User.findOne({
        email: currentUser.email
    }).exec();
    const familyToUpdate = await Family.findById({_id: args.input._id}).exec();
    if(currentUserFromDb._id.toString() !== familyToUpdate.postedBy._id.toString())
        throw new Error('Unauthorized action');

    let familyUpdated = await Family.findByIdAndUpdate(args.input._id, 
        {...args.input}, 
        {new: true}
    ).exec()
    .then(family => family.populate('postedBy', '_id username'));

    pubsub.publish(FAMILY_UPDATED, { familyUpdated });

    return familyUpdated;
}
const familyDelete = async (parent, args, {req, pubsub}) => {
    const currentUser = await authCheck(req);
    const currentUserFromDb = await User.findOne({
        email: currentUser.email
    }).exec();
    const familyToDelete = await Family.findById({_id: args.familyId}).exec();
    if(currentUserFromDb._id.toString() !== 
        familyToDelete.postedBy._id.toString()
    ) throw new Error('Unauthorized action');

    let familyDeleted = await Family.findByIdAndDelete({_id: args.familyId}).exec()
    .then(family => family.populate('postedBy', '_id username'));

    pubsub.publish(FAMILY_DELETED, { familyDeleted });

    return familyDeleted;
}

module.exports = {
    Query: {
        totalFamilies,
        allFamilies,
        familiesFromFamily,
        parentsFromFamily,
        familiesByUser,
        singleFamily,
        searchFamilies
    },
    Mutation: {
        familyDelete,
        familyCreate,
        familyUpdate
    },
    Subscription: {
        familyCreated: {
            subscribe: (parent, args, {pubsub}) => pubsub.asyncIterator([FAMILY_CREATED])
        },
        familyUpdated: {
            subscribe: (parent, args, {pubsub}) => pubsub.asyncIterator([FAMILY_UPDATED])
        },
        familyDeleted: {
            subscribe: (parent, args, {pubsub}) => pubsub.asyncIterator([FAMILY_DELETED])
        }
    }
};

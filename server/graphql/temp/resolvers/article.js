// const {authCheck} = require('../../helpers/auth')
// const Article = require('../models/article')
// const User = require('../models/user')

// // subscriptions
// const ARTICLE_CREATED = "ARTICLE_CREATED";
// const ARTICLE_UPDATED = "ARTICLE_UPDATED";
// const ARTICLE_DELETED = "ARTICLE_DELETED";

// // queries
// const searchArticles = async (parent, args, {req}) => {
//     const {query} = args;

//     return await Article.find({
//         $text: {$search: query}
//     }).populate('postedBy', 'label').exec();
// }
// const singleArticle = async (parent, args, {req}) => {
//     return await Article.findById({
//         _id: args.articleId
//     })
//     .populate('postedBy', '_id label')
//     .exec();
// }
// const totalArticles = async (parent, args, {req}) =>
//     await Article.find({}).estimatedDocumentCount().exec();

// const allArticles = async (parent, args, {req}) => {
//     const currentPage = args.page || 1;
//     const perPage = args.perPage || 3;

//     return await Article.find({})
//         .skip((currentPage -1) * perPage)
//         .populate('postedBy', 'label _id')
//         .limit(perPage)
//         .sort({createdAt: -1})
//         .exec();
// }
// const articlesByUser = async (parent, args, {req}) => {
//     const currentUser = await authCheck(req);
//     const currentUserFromDb = await User.findOne({
//         email: currentUser.email
//     }).exec();

//     return await Article.find({
//         postedBy: currentUserFromDb
//     })
//     .populate('postedBy', '_id label')
//     .sort({createdAt: -1})
// }

// // mutations
// const articleCreate = async (parent, args, {req, pubsub}) => {
//     const currentUser = await authCheck(req);

//     console.log(args.input)

//     // if(args.input.content.trim() === '') throw new Error('Content is required');

//     // const currentUserFromDb = await User.findOne({
//     //     email: currentUser.email
//     // });

//     // let articleCreated = await new Article({
//     //     ...args.input,
//     //     postedBy: currentUserFromDb._id
//     // }).save()
//     // .then(article => article.populate('postedBy', '_id label'))
    
//     // pubsub.publish(ARTICLE_CREATED, { articleCreated });

//     // return articleCreated;
// }
// const articleUpdate = async (parent, args, {req, pubsub}) => {
//     const currentUser = await authCheck(req);
//     if(args.input.content.trim() === '') throw new Error('Content is required');
//     const currentUserFromDb = await User.findOne({
//         email: currentUser.email
//     }).exec();
//     const articleToUpdate = await Article.findById({_id: args.input._id}).exec();
//     if(currentUserFromDb._id.toString() !== articleToUpdate.postedBy._id.toString())
//         throw new Error('Unauthorized action');

//     let articleUpdated = await Article.findByIdAndUpdate(args.input._id, 
//         {...args.input}, 
//         {new: true}
//     ).exec()
//     .then(article => article.populate('postedBy', '_id label'));

//     pubsub.publish(ARTICLE_UPDATED, { articleUpdated });

//     return articleUpdated;
// }
// const articleDelete = async (parent, args, {req, pubsub}) => {
//     const currentUser = await authCheck(req);
//     const currentUserFromDb = await User.findOne({
//         email: currentUser.email
//     }).exec();
//     const articleToDelete = await Article.findById({_id: args.articleId}).exec();
//     if(currentUserFromDb._id.toString() !== 
//         articleToDelete.postedBy._id.toString()
//     ) throw new Error('Unauthorized action');

//     let articleDeleted = await Article.findByIdAndDelete({_id: args.articleId}).exec()
//     .then(article => article.populate('postedBy', '_id label'));

//     pubsub.publish(ARTICLE_DELETED, { articleDeleted });

//     return articleDeleted;
// }

// module.exports = {
//     Query: {
//         totalArticles,
//         allArticles,
//         articlesByUser,
//         singleArticle,
//         searchArticles
//     },
//     Mutation: {
//         articleDelete,
//         articleCreate,
//         articleUpdate
//     },
//     Subscription: {
//         articleCreated: {
//             subscribe: (parent, args, {pubsub}) => pubsub.asyncIterator([ARTICLE_CREATED])
//         },
//         articleUpdated: {
//             subscribe: (parent, args, {pubsub}) => pubsub.asyncIterator([ARTICLE_UPDATED])
//         },
//         articleDeleted: {
//             subscribe: (parent, args, {pubsub}) => pubsub.asyncIterator([ARTICLE_DELETED])
//         }
//     }
// };

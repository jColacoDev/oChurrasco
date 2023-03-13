const {authCheck} = require('../../firebase/auth')
const User = require('../models/user')
const shortid = require('shortid')

// queries
const profile = async (parent, args, {req, res}) => {
    const currentUser = await authCheck(req);
    return await User.findOne({email: currentUser.email}).exec();
}

const publicProfile = async (parent, args, {req, res}) => {
    return await User.findOne({username: args.username}).exec();
}

const allUsers = async (parent, args, {req, res}) => {
    return await User.find({}).exec();
}

// mutations
const userCreate = async (parent, args, {req}) => {
    const currentUser = await authCheck(req);
    const user = await User.findOne({email: currentUser.email});

    const {input} = args;
    console.log("User Create")
    console.log(input)
    console.log(currentUser)

    return user ? user : new User({
        email: currentUser.email,
        // email: input?.email || "",
        active: false,
        username: input?.username || shortid.generate(),
        name: input?.name || currentUser.email.slice(0,currentUser.email.indexOf('@')),
        password: input?.password || "",
        images: input?.images || []
    }).save();
}

const userUpdate = async (parent, args, {req}) =>{
    const currentUser = await authCheck(req);
    // console.log(args)

    const updatedUser = await User.findOneAndUpdate(
        {email: currentUser.email}, 
        {...args.input}, 
        {new: true}
    ).exec();

    return updatedUser;
}

module.exports = {
    Query: {
        profile,
        publicProfile,
        allUsers
    },
    Mutation: {
        userCreate,
        userUpdate
    }
};

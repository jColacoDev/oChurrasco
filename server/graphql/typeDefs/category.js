const {gql} = require('graphql-tag')

const queries = `
    type Query {
        totalCategories: Int!
        allCategories(page: Int): [Category!]!
        singleCategory(categoryId: String!): Category!
        search(query: String!): [Category]
    }
`
const mutations = `
    type Mutation {
        categoryCreate(input: CategoryCreateInput!): Category!
        categoryUpdate(input: CategoryUpdateInput!): Category!
        categoryDelete(categoryId: String!): Category!
    }
`
const subscriptions = `
    type Subscription {
        categoryCreated: Category
        categoryUpdated: Category
        categoryDeleted: Category
    }
    
`
const types = `
    type Category {
        _id: ID!
        postedBy: User
        ref: String
        label: String
        description: String
        description: String
        image: Image
        products: [Product]
        catalogs: [Catalog]
        categories: [Category]
    }
`
const inputs = `
    input CategoryCreateInput {
        ref: String
        label: String!
        image: Image!
        description: String
    }
    input CategoryUpdateInput {
        _id: String! 
        ref: String
        label: String!
        image: Image!
        description: String
    }
`
module.exports = gql`${queries}${mutations}${subscriptions}${types}${inputs}`;

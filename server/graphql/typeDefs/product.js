const {gql} = require('graphql-tag')

const queries = `
    type Query {
        totalProducts: Int!
        allProducts(page: Int, perPage: Int): [Product!]!
        productsByUser: [Product!]!
        singleProduct(productId: String!): Product!
        searchProducts(query: String!): [Product]
    }
`
const mutations = `
    type Mutation {
        productCreate(input: ProductCreateInput!): Product!
        productUpdate(input: ProductUpdateInput!): Product!
        productDelete(productId: String!): Product!
    }
`
const subscriptions = `
    type Subscription {
        productCreated: Product
        productUpdated: Product
        productDeleted: Product
    }
    
`
const types = `
    type Product {
        _id: ID!
        postedBy: User
        ref: String
        label: String
        description: String
        images: [Image]
    }
`
const inputs = `
    input ProductCreateInput {
        content: String! 
        images: [ImageInput]
    }
    input ProductUpdateInput {
        _id: String! 
        content: String! 
        images: [ImageInput]
    }
`
module.exports = gql`${queries}${mutations}${subscriptions}${types}${inputs}`;

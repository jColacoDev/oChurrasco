// const {gql} = require('graphql-tag')

// const queries = `
//     type Query {
//         totalArticles: Int!
//         allArticles(page: Int, perPage: Int): [Article!]!
//         articlesByUser: [Article!]!
//         singleArticle(articleId: String!): Article!
//         searchArticles(query: String!): [Article]
//     }
// `
// const mutations = `
//     type Mutation {
//         articleCreate(input: ArticleCreateInput!): Article!
//         articleUpdate(input: ArticleUpdateInput!): Article!
//         articleDelete(articleId: String!): Article!
//     }
// `
// const subscriptions = `
//     type Subscription {
//         articleCreated: Article
//         articleUpdated: Article
//         articleDeleted: Article
//     }
    
// `
// const types = `
//     type Article {
//         _id: ID!
//         postedBy: User!
//         code: String!
//         label: String!
//         type: String!
//         family: String!
//         abbr: String
//         about: String
//         brand: String
//         supplier: String
//         supplierRef: String
//         notes: String
//         price: Price
//         services: []
//         related: Related
//         images: [Image]
//     }
// `
// const inputs = `
//     input ArticleCreateInput {
//         code: String!
//         label: String!
//         type: String!
//         family: String!
//         abbr: String
//         about: String
//         brand: String
//         supplier: String
//         supplierRef: String
//         notes: String
//         price: PriceInput
//         services: []
//         related: RelatedInput
//         images: [ImageInput]
//     }
//     input ArticleUpdateInput {
//         _id: String! 
//         code: String!
//         label: String!
//         type: String!
//         family: String!
//         abbr: String
//         about: String
//         brand: String
//         supplier: String
//         supplierRef: String
//         notes: String
//         price: PriceInput
//         services: []
//         related: RelatedInput
//         images: [ImageInput]
//     }
// `
// module.exports = gql`${queries}${mutations}${subscriptions}${types}${inputs}`;

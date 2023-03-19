const {gql} = require('graphql-tag')

const queries = `
    type Query {
        totalArticles: Int!
        allArticles: [Article!]!
        articlesFromFamily(familyId: String!): [Article!]
        singleArticle(articleId: String!): Article!
        searchArticles(query: String!): [Article]
    }
`
const mutations = `
    type Mutation {
        articleCreate(input: ArticleCreateInput!): Article!
        articleUpdate(input: ArticleUpdateInput!): Article!
        articleDelete(articleId: String!): Article!
    }
`
const subscriptions = `
    type Subscription {
        articleCreated: Article
        articleUpdated: Article
        articleDeleted: Article
    }
    
`
const types = `
    type Article {
        _id: ID!
        postedBy: User!
        label: String!
        type: String!
        family: String!
        code: String
        url: String
        about: String
        abbr: String
        brand: String
        supplier: String
        notes: String
        price: String
        images: [Image]
    }
`
const inputs = `
    input ArticleCreateInput {
        label: String!
        type: String!
        family: String!
        code: String
        url: String
        about: String
        abbr: String
        brand: String
        supplier: String
        notes: String
        price: String
        images: [ImageInput]
    }
    input ArticleUpdateInput {
        _id: String! 
        label: String!
        type: String!
        family: String!
        code: String
        url: String
        about: String
        abbr: String
        brand: String
        supplier: String
        notes: String
        price: String
        images: [ImageInput]
    }
`
module.exports = gql`${queries}${mutations}${subscriptions}${types}${inputs}`;

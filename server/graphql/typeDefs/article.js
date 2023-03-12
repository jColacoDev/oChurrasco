const {gql} = require('graphql-tag')

const queries = `
    type Query {
        totalArticles: Int!
        allArticles(page: Int, perPage: Int): [Article!]!
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
        supplierRef: String
        notes: String
        price_purchase: String
        price_sale: String
        images: [Image]
        services: [String]
        related_codes: [String]
        related_families: [String]
        related_articles: [String]
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
        supplierRef: String
        notes: String
        price_purchase: String
        price_sale: String
        images: [ImageInput]
        services: [String]
        related_codes: [String]
        related_families: [String]
        related_articles: [String]
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
        supplierRef: String
        notes: String
        price_purchase: String
        price_sale: String
        images: [ImageInput]
        services: [String]
        related_codes: [String]
        related_families: [String]
        related_articles: [String]
    }
`
module.exports = gql`${queries}${mutations}${subscriptions}${types}${inputs}`;

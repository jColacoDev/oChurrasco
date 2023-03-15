const {gql} = require('graphql-tag')

const queries = `
    type Query {
        totalNewsSubscriptions: Int!
        allNewsSubscriptions: [NewsSubscription!]!
        singleNewsSubscription(newsSubscriptionId: String!): NewsSubscription!
    }
`
const mutations = `
    type Mutation {
        newsSubscriptionCreate(input: NewsSubscriptionCreateInput!): NewsSubscription!
        newsSubscriptionUpdate(input: NewsSubscriptionUpdateInput!): NewsSubscription!
        newsSubscriptionDelete(newsSubscriptionId: String!): NewsSubscription!
    }
`
const subscriptions = `
    type Subscription {
        newsSubscriptionCreated: NewsSubscription
        newsSubscriptionUpdated: NewsSubscription
        newsSubscriptionDeleted: NewsSubscription
    }
    
`
const types = `
    type NewsSubscription {
        _id: ID!
        email: String!
        label: String!
    }
`
const inputs = `
    input NewsSubscriptionCreateInput {
        email: String!
        label: String!
    }
    input NewsSubscriptionUpdateInput {
        _id: String! 
        email: String!
        label: String!
    }
`
module.exports = gql`${queries}${mutations}${subscriptions}${types}${inputs}`;

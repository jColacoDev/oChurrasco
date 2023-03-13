const {gql} = require('graphql-tag')

const queries = `
    type Query {
        totalFamilies: Int!
        allFamilies(page: Int, perPage: Int): [Family!]!
        familiesByUser: [Family!]!
        familiesFromFamily(familyId: String!): [Family!]
        familyIdFromLabelsPath(labelsPath: [String]): [Family!]
        parentsFromFamily(familyId: String!): [Family!]
        singleFamily(familyId: String!): Family!
        searchFamilies(query: String!): [Family]
    }
`
const mutations = `
    type Mutation {
        familyCreate(input: FamilyCreateInput!): Family!
        familyUpdate(input: FamilyUpdateInput!): Family!
        familyDelete(familyId: String!): Family!
    }
`
const subscriptions = `
    type Subscription {
        familyCreated: Family
        familyUpdated: Family
        familyDeleted: Family
    }
    
`
const types = `
    type Family {
        _id: ID!
        postedBy: User!
        label: String!
        family: String!
        images: [Image]
    }
`
const inputs = `
    input FamilyCreateInput {
        label: String!
        family: String!
        images: [ImageInput]
    }
    input FamilyUpdateInput {
        _id: String! 
        label: String!
        family: String!
        images: [ImageInput]
    }
`
module.exports = gql`${queries}${mutations}${subscriptions}${types}${inputs}`;

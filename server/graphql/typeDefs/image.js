const {gql} = require('graphql-tag')

const types = `
    type Image {
        url: String!
        label: String!
        description: String
        public_id: String
    }
    `
    const inputs = `
    input ImageInput{
        url: String!
        label: String!
        description: String
        public_id: String
    }
`
module.exports = gql`${types}${inputs}`;
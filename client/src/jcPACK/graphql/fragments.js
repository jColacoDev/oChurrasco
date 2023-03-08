export const FAMILY_DATA =`
    _id
    label
    family
    image {
        url
        label
        description
        public_id
    }
    postedBy {
        _id
        username
    }
`
export const ARTICLE_DATA =`
    _id
    ref
    label
    description
    images {
        url
        label
        description
        public_id
    }
    postedBy {
        _id
        username
    }
`
export const USER_INFO =`
    _id
    name
    username
    email
    images {
        url
        public_id
    }
    about
    createdAt
    updatedAt
`
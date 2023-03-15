export const NEWS_SUBSCRIPTION_DATA =`
    _id
    label
    email
`
export const FAMILY_DATA =`
    _id
    label
    normalizedLabel
    family
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
export const ARTICLE_DATA =`
    _id
    postedBy {
        _id
        username
    }
    label
    type
    family
    code
    url
    about
    supplier
    supplierRef
    notes
    price_purchase
    price_sale
    images {
        url
        label
        description
        public_id
    }
    services
    related_codes
    related_families
    related_articles
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
import { gql } from '@apollo/client';
import { USER_INFO, ARTICLE_DATA, FAMILY_DATA, NEWS_SUBSCRIPTION_DATA } from "./fragments"


/***************************************************************** */
/*** USER **************************************************** */
export const USER_CREATE = gql`
    mutation userCreate($input: UserCreateInput!) {
        userCreate (input: $input){
            username
            email
        }
    }
`
export const USER_UPDATE = gql`
mutation userUpdate($input: UserUpdateInput!) {
        userUpdate(input: $input) {
            ${USER_INFO}
        }
    }
`

/***************************************************************** */
/*** ARTICLE **************************************************** */
export const ARTICLE_CREATE = gql`
    mutation articleCreate($input: ArticleCreateInput!) {
        articleCreate(input: $input) {
            ${ARTICLE_DATA}
        }
    }
`
export const ARTICLE_UPDATE = gql`
    mutation articleUpdate($input: ArticleUpdateInput!) {
        articleUpdate(input: $input) {
            ${ARTICLE_DATA}
        }
    }
`
export const ARTICLE_DELETE = gql`
    mutation articleDelete($articleId: String!) {
        articleDelete(articleId: $articleId) {
            _id
        }
    }
`

/***************************************************************** */
/*** FAMILY **************************************************** */
export const FAMILY_CREATE = gql`
    mutation familyCreate($input: FamilyCreateInput!) {
        familyCreate(input: $input) {
            ${FAMILY_DATA}
        }
    }
`
export const FAMILY_UPDATE = gql`
    mutation familyUpdate($input: FamilyUpdateInput!) {
        familyUpdate(input: $input) {
            ${FAMILY_DATA}
        }
    }
`
export const FAMILY_DELETE = gql`
    mutation familyDelete($familyId: String!) {
        familyDelete(familyId: $familyId) {
            _id
        }
    }
`

/***************************************************************** */
/*** SUBSCRIPTION **************************************************** */
export const NEWS_SUBSCRIPTION_CREATE = gql`
    mutation newsSubscriptionCreate($input: NewsSubscriptionCreateInput!) {
        newsSubscriptionCreate(input: $input) {
            ${NEWS_SUBSCRIPTION_DATA}
        }
    }
`
export const NEWS_SUBSCRIPTION_UPDATE = gql`
    mutation newsSubscriptionUpdate($input: NewsSubscriptionUpdateInput!) {
        newsSubscriptionUpdate(input: $input) {
            ${NEWS_SUBSCRIPTION_DATA}
        }
    }
`
export const NEWS_SUBSCRIPTION_DELETE = gql`
    mutation newsSubscriptionDelete($newsSubscriptionId: String!) {
        newsSubscriptionDelete(newsSubscriptionId: $newsSubscriptionId) {
            _id
        }
    }
`
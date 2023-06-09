import { gql } from '@apollo/client';
import { USER_INFO, ARTICLE_DATA, FAMILY_DATA, NEWS_SUBSCRIPTION_DATA } from "./fragments"


/***************************************************************** */
/*** USER **************************************************** */
export const GET_ALL_USERS = gql`
  query {
    allUsers {
        ${USER_INFO}
    }
  }
`;

export const PUBLIC_PROFILE = gql`
    query publicProfile($username: String!) {
        publicProfile(username: $username) {
            ${USER_INFO}
        }
    }
`
export const PROFILE = gql`
  query {
    profile {
      ${USER_INFO}
    }
  }
`

/***************************************************************** */
/*** ARTICLE **************************************************** */
export const SEARCH = gql`
    query search($query: String!){
        search(query: $query) {
            ${ARTICLE_DATA}
        }
    }
`
export const TOTAL_ARTICLES = gql`
  query {
    totalArticles
  }
`;
export const GET_ALL_ARTICLES = gql`
  query allArticles($page: Int, $perPage: Int) {
    allArticles(page: $page, perPage: $perPage) {
        ${ARTICLE_DATA}
    }
  }
`;
export const SINGLE_ARTICLE = gql`
  query singleArticle($articleId: String!) {
    singleArticle(articleId: $articleId) {
        ${ARTICLE_DATA}
    }
  }
`;
export const ARTICLES_BY_USER = gql`
  query {
    articlesByUser {
        ${ARTICLE_DATA}
    }
  }
`;

/***************************************************************** */
/*** FAMILY **************************************************** */
export const TOTAL_FAMILIES = gql`
  query {
    totalFamilies
  }
`;

export const GET_ALL_FAMILIES = gql`
  query allFamilies {
    allFamilies {
        ${FAMILY_DATA}
    }
  }
`;
export const GET_FAMILIES_FROM_FAMILY = gql`
  query familiesFromFamily($familyId: String!) {
    familiesFromFamily(familyId: $familyId) {
        ${FAMILY_DATA}
    }
  }
`;
export const GET_FAMILY_ID_FROM_LABELS_PATH = gql`
  query familyIdFromLabelsPath($labelsPath: [String]) {
    familyIdFromLabelsPath(labelsPath: $labelsPath) {
        ${FAMILY_DATA}
    }
  }
`;
export const GET_PARENTS_FROM_FAMILY = gql`
  query parentsFromFamily($familyId: String!) {
    parentsFromFamily(familyId: $familyId) {
        ${FAMILY_DATA}
    }
  }
`;
export const GET_ARTICLES_FROM_FAMILY = gql`
  query articlesFromFamily($familyId: String!) {
    articlesFromFamily(familyId: $familyId) {
        ${ARTICLE_DATA}
    }
  }
`;
export const SINGLE_FAMILY = gql`
  query singleFamily($familyId: String!) {
    singleFamily(familyId: $familyId) {
        ${FAMILY_DATA}
    }
  }
`;

/***************************************************************** */
/*** SUBSCRIPTION **************************************************** */
export const SINGLE_SUBSCRIPTION = gql`
  query singleNewsSubscription($newsSubscriptionId: String!) {
    singleNewsSubscription(newsSubscriptionId: $newsSubscriptionId) {
        ${NEWS_SUBSCRIPTION_DATA}
    }
  }
`;
export const GET_ALL_NEWS_SUBSCRIPTIONS = gql`
  query allNewsSubscriptions {
    allNewsSubscriptions {
        ${NEWS_SUBSCRIPTION_DATA}
    }
  }
`;
export const TOTAL_NEWS_SUBSCRIPTIONS = gql`
  query {
    totalNewsSubscriptions
  }
`;
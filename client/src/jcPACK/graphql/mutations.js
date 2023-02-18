import { gql } from "apollo-boost"
import { USER_INFO, POST_DATA } from "./fragments"

export const USER_UPDATE = gql`
    mutation userUpdate($input: UserUpdateInput!) {
        userUpdate(input: $input) {
            ${USER_INFO}
        }
    }
`
export const POST_UPDATE = gql`
    mutation postUpdate($input: PostUpdateInput!) {
        postUpdate(input: $input) {
            ${POST_DATA}
        }
    }
`
export const POST_DELETE = gql`
    mutation postDelete($postId: String!) {
        postDelete(postId: $postId) {
            _id
        }
    }
`
export const POST_CREATE = gql`
    mutation postCreate($input: PostCreateInput!) {
        postCreate(input: $input) {
            ${POST_DATA}
        }
    }
`
export const USER_CREATE = gql`
    mutation userCreate($input: UserCreateInput!) {
        userCreate (input: $input){
            username
            email
        }
    }
`
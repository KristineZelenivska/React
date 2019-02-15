import { GET_POSTS_SUCCESS, GET_POSTS_ERROR, POST_IMAGE_SUCCESS, POST_IMAGE_ERROR } from '../../constants/index'


const defaultState = {
    posts: null
}

export const getPostsReducer = (state = defaultState, action) => {
    switch (action.type) { //type we wrote in userAction
        case GET_POSTS_SUCCESS:
            return { ...state, posts: action.payload.reverse() } //newest on top
        case POST_IMAGE_SUCCESS:
            return { ...state, posts: [action.payload, ...state.posts] } //... means return everything what was inside it. isRegistered is property for state
        case GET_POSTS_ERROR:
        case POST_IMAGE_ERROR:
        default:
            return state

    }
}

import { GET_POSTS_SUCCESS, GET_POSTS_ERROR } from '../../constants/index'


const defaultState = {
    posts: null
}

export const getPostsReducer = (state = defaultState, action) => {
    switch (action.type) { //type we wrote in userAction
        case GET_POSTS_SUCCESS:
            return { ...state, posts: action.payload.reverse() } //newest on top
        case GET_POSTS_ERROR:
            return { ...state, posts: null }
        default:
            return state

    }
}

import BootcampAPI from '../../helpers/BootcampAPI'
import { API } from '../../constants'
import { GET_POSTS_SUCCESS, GET_POSTS_ERROR } from '../../constants/index' //we define them in constants

//action
const getPostsSuccess = res => {
    return {
        type: GET_POSTS_SUCCESS,
        payload: res.data.payload
    }
}
const getPostsError = () => {
    return {
        type: GET_POSTS_ERROR,
    }
}

//action creator
export const getPosts = () => {
    return dispatch => {
        return BootcampAPI.get(API.GET_POSTS)
            .then(res => dispatch(getPostsSuccess(res)))
            .catch(error =>
                console.error(error),
                dispatch(getPostsError()))
    }
}

import { combineReducers } from 'redux'
import { registerReducer, loginReducer, getUsersReducer, userInfoReducer } from './usersReducers'
import { getPostsReducer } from './postsReducer'

const rootReducer = combineReducers({
    registerReducer,
    loginReducer,
    getUsersReducer,
    getPostsReducer,
    userInfoReducer,
});

export default rootReducer

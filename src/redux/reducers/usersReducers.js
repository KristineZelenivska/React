import { REGISTER_SUCCESS, REGISTER_ERROR, LOGIN_SUCCESS, LOGIN_ERROR, GET_USERS_SUCCESS, GET_USERS_ERROR, USER_INFO_SUCCESS, USER_INFO_ERROR } from '../../constants/index'

const defaultState = {
    isRegistered: false,
    isLoggedin: false,
    users: null,

}


export const registerReducer = (state = defaultState, action) => {
    switch (action.type) { //type we wrote in userAction
        case REGISTER_SUCCESS:
            return { ...state, isRegistered: true } //... means return everything what was inside it. isRegistered is property for state
        case REGISTER_ERROR:
            return { state, isRegistered: false }
        default:
            return state

    }
}

export const loginReducer = (state = defaultState, action) => {
    switch (action.type) { //type we wrote in userAction
        case LOGIN_SUCCESS:
            return { ...state, isLoggedin: true }
        case LOGIN_ERROR:
            return { state, isLoggedin: false }
        default:
            return state

    }
}
export const getUsersReducer = (state = defaultState, action) => {
    switch (action.type) { //type we wrote in userAction
        case GET_USERS_SUCCESS:
            return { ...state, users: action.payload }
        case GET_USERS_ERROR:
            return { ...state, users: null }
        default:
            return state

    }
}

//////////////////////////
export const userInfoReducer = (state = defaultState, action) => {
    switch (action.type) { //type we wrote in userAction
        case USER_INFO_SUCCESS:
            return { ...state, user: action.payload }
        case USER_INFO_ERROR:
            return { ...state, user: null }
        default:
            return state

    }
}
////////////////////////
//everything user does
// import sha256 from 'crypto-js/sha256' //hashes password
import CryptoJS from 'crypto-js'
import BootcampAPI from '../../helpers/BootcampAPI'
import { API } from '../../constants'
import {
    REGISTER_SUCCESS, REGISTER_ERROR, LOGIN_SUCCESS, LOGIN_ERROR, GET_USERS_SUCCESS,
    GET_USERS_ERROR, USER_INFO_SUCCESS, USER_INFO_ERROR, POST_IMAGE_SUCCESS, POST_IMAGE_ERROR
} from '../../constants/index' //we define them in constants



//actions
const registerSuccess = () => {
    return {
        type: REGISTER_SUCCESS, //required property to check what action was called. 
        isRegistered: true, //optional payload
    }
}
const registerError = () => {
    return {
        type: REGISTER_ERROR, //required property
        isRegistered: false, //optional payload
    }
}


//action creators. functions that calls actions
//api call here
export const register = (username, email, password) => {
    return dispatch => {
        return BootcampAPI.post(API.REGISTER, {
            username,
            email,
            hashedPassword: CryptoJS.SHA256(password).toString()
        })
            .then(() => dispatch(registerSuccess()))
            .catch(() => dispatch(registerError()))
    }
}


const loginSuccess = () => {
    return {
        type: LOGIN_SUCCESS, //required property to check what action was called. 
        isLoggedin: true, //optional payload
    }
}
const loginError = () => {
    return {
        type: LOGIN_ERROR, //required property
        isLoggedin: false, //optional payload
    }
}


export const logIn = (email, password) => {
    return dispatch => {
        return BootcampAPI.post(API.LOGIN, {
            email,
            hashedPassword: CryptoJS.SHA256(password).toString()
        })
            .then((res) => {
                const token = res.data.payload.token
                localStorage.setItem("jwtToken", token);

                dispatch(loginSuccess())
            })
            .catch(() => dispatch(loginError()))
    }
}


const getUsersSuccess = res => {
    return {
        type: GET_USERS_SUCCESS,
        payload: res.data.payload,
    }
}
const getUsersError = () => {
    return {
        type: GET_USERS_ERROR,
    }
}

export const getUsers = () => {
    return dispatch => {
        return BootcampAPI.get(API.GET_USERS)
            .then(res => dispatch(getUsersSuccess(res)))
            .catch(error =>
                console.error(error),
                dispatch(getUsersError()))
    }
}
////////////////////////////////////////

const imageUploadSuccess = res => {
    return {
        type: POST_IMAGE_SUCCESS, //required property to check what action was called. 
        payload: res.data.payload, //optional payload
    }
}
const imageUploadError = () => {
    return {
        type: POST_IMAGE_ERROR
    }
}
export const submitPost = (caption, formData) => {
    return dispatch => {
        return BootcampAPI.post(API.POST_IMAGE, formData)
            .then(res => {
                return BootcampAPI.post(API.POST_CAPTION, {
                    caption,           //caption: res.payload.media.caption,
                    contentId: res.data.payload.contentId
                })
                    .then(res => dispatch(imageUploadSuccess(res))) //dispatch(imageUploadSuccess())

            })
            .catch(err => {
                console.log(err);
                dispatch(imageUploadError())
            })
    }
}

////////////////////////////////////////


const userInfoSuccess = res => {
    return {
        type: USER_INFO_SUCCESS,
        payload: res.data.payload,
    }
}
const userInfoError = () => {
    return {
        type: USER_INFO_ERROR,
    }
}

export const userInfo = () => {
    return dispatch => {
        return BootcampAPI.get(API.USER_INFO)
            .then(res => dispatch(userInfoSuccess(res)))
            .catch(error =>
                console.error(error),
                dispatch(userInfoError()))
    }
}

////////////////////////////////////////
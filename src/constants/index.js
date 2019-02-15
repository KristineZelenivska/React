export const API = {
    LOGIN: "auth/session", //DONE
    REGISTER: "auth/users",//DONE
    USER_INFO: "users/self",
    GET_USERS: "users",
    GET_POSTS: "media",
    POST_CAPTION: "media",
    POST_IMAGE: "media/content/image"
};
//endpoints of api

export const REGISTER_SUCCESS = "REGISTER_SUCCESS"; // in "" can be anything! but must be unique
export const REGISTER_ERROR = "REGISTER_ERROR"

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR"

export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_ERROR = "GET_USERS_ERROR"

export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_ERROR = "GET_POSTS_ERROR"

export const USER_INFO_SUCCESS = "USER_INFO_SUCCESS";
export const USER_INFO_ERROR = "USER_INFO_ERROR"

export const POST_IMAGE_SUCCESS = "POST_IMAGE_SUCCESS";
export const POST_IMAGE_ERROR = "POST_IMAGE_ERROR"
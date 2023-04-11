import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';
const SAVE_PHOTO = 'SAVE-PHOTO'

let initialState = {
    posts: [
        {id: 1, message: 'Hi, everyone!', likesCount: 'likes: 0'},
        {id: 2, message: 'Its my first post!', likesCount: 'likes: 4'},
        {id: 3, message: 'Im alredy', likesCount: 'likes: 11'},
        {id: 4, message: 'Hi, everyone!', likesCount: 'likes: 1'},
    ],
    profile: null,
    status:'---'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: action.newPostText,
                likesCount: '0'
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case DELETE_POST:
            return {
                ...state, posts: state.posts.filter(p=>p.id !== action.postId)
            }
        case SAVE_PHOTO:
            return {
                ...state, profile:{ ...state.profile, photos:action.photos}
            }
        default:
            return state;
    }
}

    export const addPost = (newPostText) => ({type: 'ADD-POST',newPostText});
    export const setUserProfile = (profile) => ({type:'SET-USER-PROFILE', profile});
    export const setStatus = (status) => ({type:SET_STATUS, status});
    export const deletePost = (postId)=>({type:DELETE_POST, postId});
    export const savePhotoSuccess = (photos)=>({type:SAVE_PHOTO, photos});

export const getUserProfile = (userId) => (dispatch) => {
            usersAPI.getProfile(userId)
        .then(response=>{
            dispatch(setUserProfile(response.data));
        });
}
export const getStatus = (userId) => (dispatch) => {
            profileAPI.getStatus(userId)
        .then(response=>{
            dispatch(setStatus(response.data));
        });
}
export const updateStatus = (status) => (dispatch) => {
            profileAPI.updateStatus(status)
        .then(response=>{
            if(response.data.resultCode === 0){
                dispatch(setStatus(status));
            }
        });
}
export const savePhoto = (file) => (dispatch) => {
            profileAPI.savePhoto(file)
        .then(response=>{
            if(response.data.resultCode === 0){
                dispatch(savePhotoSuccess(response.data.data.photos));
            }
        });
}

export default profileReducer;

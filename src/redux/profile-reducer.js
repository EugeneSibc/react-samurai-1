import {profileAPI, usersAPI} from "../api/api";
import {setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching} from "./users-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';


let initialState = {
    posts: [
        {id: 1, message: 'Hi, everyone!', likesCount: 'likes: 0'},
        {id: 2, message: 'Its my first post!', likesCount: 'likes: 4'},
        {id: 3, message: 'Im alredy', likesCount: 'likes: 11'},
        {id: 4, message: 'Hi, everyone!', likesCount: 'likes: 1'},
    ],
    newPostText: '',
    profile: null,
    status:'---'
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: state.newPostText,
                likesCount: '0'
            };
            return {
                ...state,
                newPostText: ' ',
                posts: [...state.posts, newPost]
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
            /*state.newPostText = action.newText;
            return state;*/
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    };
}

    export const addPostActionCreator = () => ({type: 'ADD-POST'});
    export const updateNewPostTextActionCreator = (text) => ({type:'UPDATE-NEW-POST-TEXT', newText: text});
    export const setUserProfile = (profile) => ({type:'SET-USER-PROFILE', profile});
    export const setStatus = (status) => ({type:SET_STATUS, status});

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

export default profileReducer;

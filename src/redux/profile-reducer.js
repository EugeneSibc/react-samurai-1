import {usersAPI} from "../api/api";
import {setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching} from "./users-reducer";

let initialState = {
    posts: [
        {id: 1, message: 'Hi, everyone!', likesCount: 'likes: 0'},
        {id: 2, message: 'Its my first post!', likesCount: 'likes: 4'},
        {id: 3, message: 'Im alredy', likesCount: 'likes: 11'},
        {id: 4, message: 'Hi, everyone!', likesCount: 'likes: 1'},
    ],
    newPostText: '',
    profile: null
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
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
        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.newText
            }
            /*state.newPostText = action.newText;
            return state;*/
        case 'SET-USER-PROFILE':
            return {
                ...state, profile: action.profile
            }
        default:
            return state;
    };
}

    export const addPostActionCreator = () => ({type: 'ADD-POST'});
    export const updateNewPostTextActionCreator = (text) => ({type:'UPDATE-NEW-POST-TEXT', newText: text});
    export const setUserProfile = (profile) => ({type:'SET-USER-PROFILE', profile})

/*
export const getUserProfile = (userId) => (dispatch) => {
            usersAPI.getProfile(userId)
        .then(response=>{
            dispatch(setUserProfile(response.data));
        });
}
*/

export default profileReducer;

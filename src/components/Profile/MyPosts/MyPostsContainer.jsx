import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";
import connect from "react-redux/lib/connect/connect";


/*const MyPostsContainer = (props) => {

    /!*    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action);
    }


    return (<MyPosts
        updateNewPostText = {onPostChange}
        addPost = {addPost}
        newPostText = {props.store.getState().profilePage.newPostText}
        posts = {props.store.getState().profilePage.posts}
    />)*!/

    return(
        <StoreContext.Consumer>
            {(store) => {
                let state = props.store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }
                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text)
                    store.dispatch(action);
                }
                return <MyPosts
                    updateNewPostText = {onPostChange}
                    addPost = {addPost}
                    newPostText = {state.profilePage.newPostText}
                    posts = {state.profilePage.posts}/>
            }
            }
        </StoreContext.Consumer>
    )

}*/

const mapStateToProps = (state) => {
    return {
        posts:state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mepDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,mepDispatchToProps)(MyPosts)

export default MyPostsContainer;

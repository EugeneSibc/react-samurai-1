import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../../utils/validators";

const maxLength30 = maxLengthCreator(30)
const AddPost=(props)=>{
    return(
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name={'post'} placeholder = "Post message"
                   validate={[required, maxLength30]}/>
        </div>
        <div>
            <button>Add Post</button>
        </div>
    </form>
    )
}

const AddPostRedux = reduxForm({form:'post'})(AddPost)

const MyPosts = (props) => {

    const postsElement = props.posts.map(
        p => <Post message={p.message} like={p.likesCount} key={p.id}/>
        )

    let onAddPost = (value) => {
        props.addPost(value.post)
    }
    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostRedux onSubmit={onAddPost}/>
                <div>
                    {postsElement}
                </div>
            </div>
        </div>
    )
}
export default MyPosts;
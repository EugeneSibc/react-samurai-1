import React from 'react';
import classes from './../MyPosts.module.css'

const Post = (props) => {
    return (
        <div>
            <div className={classes.item}>
                <img src='https://coop-land.ru/uploads/posts/2019-09/1568834976_bezimeni-3.jpg'/>
                {props.message}
                <div>{props.like}</div>
            </div>
        </div>
    )
}
export default Post;
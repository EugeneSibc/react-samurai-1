import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/img_avatar.png";
import React from "react";

let User = ({user, followingInProgress, unfollow, follow})=>{
    return(
        <div>
            <span>
                <div>
                    <NavLink to = {'/profile/' + user.id}>
                        <img src = {user.photos.small !== null ?
                            user.photos.small:
                            userPhoto}
                             className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress
                            .some(id=>id === user.id)}
                                  onClick={() => {unfollow(user.id)}}
                        >Unfollow</button>
                        : <button disabled={followingInProgress.
                        some(id=>id===user.id)}
                                  onClick={() => {follow(user.id)}}
                        >Follow</button>}
                </div>
            </span>

        </div>
    )
}



export default User;
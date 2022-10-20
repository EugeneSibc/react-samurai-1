import React from 'react';
import s from './users.module.css';
import userPhoto from '../../assets/images/img_avatar.png';
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";



let Users = (props)=>{
        let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);
        let pages = [];
        for(let i=1; i<=pagesCount; i++){
            pages.push(i);
            if(i===60){
                break;
            }
        }
        return <div>
            <div>
                {pages.map(p => {
                    return <span key={p.toString()} className={props.currentPage === p && s.selectedPage }
                    onClick = {() => {props.onPageChanged(p)}}>{p} </span>
                })}
            </div>
            {props.users.map(u => <div key={u.id}>
                        <div className={s.userData}>
                            <NavLink to={'/profile/' + u.id}>
                              <img className={s.userAva} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                            </NavLink>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                            <div>
                                {u.followed
                                    ? <button disabled={props.followingInProgress
                                        .some(id=>id === u.id)}
                                              onClick={() => {props.unfollow(u.id)}}
                                        /*props.toggleFollowingProgress(true, u.id);
                                        usersAPI.unfollow(u.id)
                                            .then(data=>{
                                                if(data.resultCode === 0){
                                                    props.unfollow(u.id);
                                                }
                                                props.toggleFollowingProgress(false, u.id);
                                            })*/
                                    >Unfollow</button>
                                    : <button disabled={props.followingInProgress.
                                    some(id=>id===u.id)}
                                              onClick={() => {props.follow(u.id)}}
                                        /*props.toggleFollowingProgress(true, u.id);
                                        usersAPI.follow(u.id)
                                            .then(data=> {
                                                if (data.resultCode === 0) {
                                                    props.follow(u.id)
                                                }
                                                props.toggleFollowingProgress(false, u.id);
                                            })*/
                                    >Follow</button>}
                            </div>
                        </div>
                    </div>)
            }
        </div>

}

export default Users;
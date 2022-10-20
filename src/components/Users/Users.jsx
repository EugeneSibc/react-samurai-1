import React from 'react';
import s from './users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/images/img_avatar.png';



const p = (props) => {

    let getUsers = ()=>{
        if(props.users.length===0){
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response=>{props.setUsers(response.data.items)})
        }
    }

    return <div>
        <button onClick={getUsers}>GetUsers</button>
        {
            props.users.map( u =>
                <div key={u.id}>
                <div className={s.userData}>
                    <div >
                        <img className={s.userAva} src={u.photos.small != null ? u.photos.small: userPhoto} />
                    </div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    <div>
                        { u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                </div>

            </div>)
        }
    </div>
}

export default Users;
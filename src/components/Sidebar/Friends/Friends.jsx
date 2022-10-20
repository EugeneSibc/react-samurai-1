import React from 'react';
import s from '../Sidebar.module.css';


const Friends = (props) => {

    return (
        <div className={s.icon}>

            <div >
                <img className={s.img} src={props.img}/>
            </div>
            <div className={s.name}>
                {props.name}
            </div>
        </div>
    )
}
export default Friends;
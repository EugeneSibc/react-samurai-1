import React from 'react';
import s from './Sidebar.module.css';
import Friends from './Friends/Friends';
import {NavLink} from "react-router-dom";



const Sitebar = (props) => {

    let path = "/dialogs/";
    let sidebarElement = props.friends.map(
        d => <NavLink key={d.id} to={path + d.id}>
            <Friends name={d.name} img={d.img}/>
        </NavLink>
    )
    return (
        <div>
            <h3 className={s.head}>Friends</h3>
            <div>
                {sidebarElement}
            </div>
        </div>
    )
}
    export default Sitebar;

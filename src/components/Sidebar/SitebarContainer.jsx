import React from 'react';
import s from './Sidebar.module.css';
import Friends from './Friends/Friends';
import {NavLink} from "react-router-dom";
import connect from "react-redux/lib/connect/connect";
import Sitebar from "./Sitebar";




/*const Sitebar = (props) => {

    let path = "/dialogs/";
    let sidebarElement = props.friends.map(
        d => <NavLink to={path + d.id}>
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
}*/
const mapStateToProps = (state) => {
    return {
        friends:state.sidebar.friends
    }
}
const SitebarContainer = connect (mapStateToProps)(Sitebar)
    export default SitebarContainer;

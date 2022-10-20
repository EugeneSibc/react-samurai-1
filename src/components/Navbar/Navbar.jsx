import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Sitebar from "../Sidebar/Sitebar";
import SitebarContainer from "../Sidebar/SitebarContainer";

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink className={(navData)=>navData.idActive ? s.active:""} to='/profile'>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={(navData)=>navData.idActive ? s.active:""} to='/dialogs'>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={(navData)=>navData.idActive ? s.active:""} to='/users'>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={(navData)=>navData.idActive ? s.active:""} to='/photo'>Photo</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={(navData)=>navData.idActive ? s.active:""} to='/settings'>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={(navData)=>navData.idActive ? s.active:""} to='/mussic'>Mussic</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={(navData)=>navData.idActive ? s.active:""} to='/news'>News</NavLink>
            </div>
            {/*className={s.sidebar}*/}
            <div>
                <SitebarContainer/>
            </div>
        </nav>
    )
}
export default Navbar;

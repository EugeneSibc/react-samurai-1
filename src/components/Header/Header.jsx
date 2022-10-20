import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) =>  {
    return (
        <header className={s.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/5/53/Wikimedia-logo.png'/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login + ' ' +
                    props.email : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>

    )
}
export default Header;
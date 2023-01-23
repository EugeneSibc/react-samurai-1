import  React from 'react';
import axios from 'axios';
import Header from "./Header";
import {getAuthUserData, logout} from "../../redux/auth-reduser";

import {authAPI} from "../../api/api";
import {connect} from "react-redux";


class HeaderContainer extends React.Component{

    render(){
        return <Header {...this.props}/>
    }
}

let mapStateToProps=(state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email
})

export default connect (mapStateToProps, {getAuthUserData,logout})(HeaderContainer)
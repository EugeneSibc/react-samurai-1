import  React from 'react';
import axios from 'axios';
import Header from "./Header";
import {getAuthUserData, setAuthUserData} from "../../redux/auth-reduser";
import connect from "react-redux/lib/connect/connect";
import {authAPI} from "../../api/api";


class HeaderContainer extends React.Component{
    componentDidMount() {
        this.props.getAuthUserData()
        /*authAPI.me()
            .then(response =>{
                if(response.data.resultCode === 0){
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })*/
    }
    render(){
        return <Header {...this.props}/>
    }
}

let mapStateToProps=(state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email
})

export default connect (mapStateToProps, {getAuthUserData})(HeaderContainer)
import React from "react";
import {Navigate, Redirect, Router} from "react-router";
import connect from "react-redux/lib/connect/connect";

let mapStateToPropsForRedirect = (state) =>({
    isAuth:state.auth.isAuth
});
export const withAuthRedirect=(Component)=>{
    let RedirectComponent = (props) =>{

            if(!this.props.isAuth) {
                return <Redirect to='/login'/>
            }
            return <Component {...props}/>

    }
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent;
}
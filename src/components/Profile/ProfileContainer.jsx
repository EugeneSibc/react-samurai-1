import React from 'react';

import Profile from './Profile';
import {getStatus, getUserProfile, setUserProfile, updateStatus} from "../../redux/profile-reducer";


import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {Navigate, useLocation, useNavigate, useParams} from "react-router";
import axios from "axios";
import {connect} from "react-redux";








class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.router.params.userId;
        /*if(!userId){
            userId = 2;
        }
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
            .then(response=>{
                this.props.setUserProfile(response.data);
            })*/
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)

        /*usersAPI.getProfile(userId)
            .then(response=>{
                this.props.setUserProfile(response.data);
            });*/
}

    render(){
        /*if(!this.props.isAuth){
            return <Navigate to='/login'/>
        }*/
        return(
            <Profile {...this.props} profile={this.props.profile}
                status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth
})

function withRouter(Component){
    function ComponentWithRouterProp(props){
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return(
            <Component {...props} router={{location,navigate,params}}/>
        );
    }
    return ComponentWithRouterProp;
}
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

export default compose (
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter
    // withAuthRedirect
)(ProfileContainer);
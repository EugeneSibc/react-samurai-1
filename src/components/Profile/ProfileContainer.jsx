import React from 'react';

import Profile from './Profile';
import {getStatus, getUserProfile, savePhoto, setUserProfile, updateStatus} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {Navigate, useLocation, useNavigate, useParams} from "react-router";
import {connect} from "react-redux";








class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if(!userId){
            userId = this.props.authorizedUserId
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }
    componentDidUpdate(){

    }

    render(){
        return(
            <Profile {...this.props}
                     profile={this.props.profile}
                     isOwner={!this.props.router.params.userId}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}
            />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.userId
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
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus,savePhoto}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);
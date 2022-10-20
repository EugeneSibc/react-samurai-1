import React from 'react';

import Profile from './Profile';
import {getUserProfile} from "../../redux/profile-reducer";
import connect from "react-redux/lib/connect/connect";

import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";








class ProfileContainer extends React.Component{
    componentDidMount() {

        /*let userId = this.props.match.params.userId;*/
        this.props.getUserProfile(this.props.userId)
        /*usersAPI.getProfile(userId)
            .then(response=>{
                this.props.setUserProfile(response.data);
            });*/
}

    render(){

        return(
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,

})

/*function withRouter(Component){
    function ComponentWithRouterProp(props){
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return(
            <Component {...props} router={{location,navigate,params}}/>
        );
    }
    return ComponentWithRouterProp;
}*/

/*let ProfileContainer = */
export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withAuthRedirect
    )(ProfileContainer);
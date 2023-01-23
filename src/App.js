import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Photo from "./components/Photo/Photo";
import Mussic from "./components/Mussic/Mussic";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import themePicture from './assets/images/community.jpg';
import {useLocation, useNavigate, useParams} from "react-router";

import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";



class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                        <Route path='/profile' element={<ProfileContainer/>}/>
                        <Route exact path='/dialogs' element={<DialogsContainer
                            /*data={props.state.dialogsPage}
                            dispatch={props.dispatch}*//>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/photo' element={<Photo/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/mussic' element={<Mussic/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/login' element={<Login/>}/>
                    </Routes>
                </div>

            </div>

        )

    }
}
const mapStateToProps = (state)=>({
    initialized: state.app.initialized
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

export default compose(
    withRouter,
    connect(mapStateToProps,{initializeApp}))(App);

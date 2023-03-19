import React, {Suspense} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Photo from "./components/Photo/Photo";
import Mussic from "./components/Mussic/Mussic";
import News from "./components/News/News";

import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {useLocation, useNavigate, useParams} from "react-router";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

// import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
const DialogsContainer = React.lazy(()=>import("./components/Dialogs/DialogsContainer"));
//const UsersContainer = React.lazy(()=>import("./components/Users/UsersContainer"));
const ProfileContainer = React.lazy(()=>import("./components/Profile/ProfileContainer"));

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
                    <Suspense fallback={<Preloader/>}>
                        <Routes>
                            <Route exact path='/dialogs' element={<DialogsContainer/>}/>
                            <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                            <Route path='/profile' element={<ProfileContainer/>}/>

                        </Routes>
                    </Suspense>
                    <Routes>
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

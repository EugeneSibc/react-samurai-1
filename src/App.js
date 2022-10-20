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



const App = (props) => {
    return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes>
                    {/*<Route path='/profile/:userId' render={()=><ProfileContainer/>}/>*/}
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


export default App;

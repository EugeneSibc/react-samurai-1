import React from 'react';
import s from './../Profile.module.css';

import avatar from '../../../assets/images/noAvatar.jpg';
import ProfileStatus from './ProfileStatus.jsx'
import Preloader from "../../common/Preloader/Preloader";



const ProfileInfo = (props) => {
    if(!props.profile){
        return <div>
            <img src=<Preloader/> />
        </div>
}
    return (
        <div>
            <div>
                <img src={props.profile.photos.large != null
                    ? props.profile.photos.large
                    : avatar  }/>
                    <div><ProfileStatus status={'blyaaa'}/></div>
                <div>
                    {props.profile.aboutMe}
                </div>
                <div className={s.postBlock}>
                    <ul>
                        <li>{props.profile.contacts.facebook}</li>
                        <li>{props.profile.contacts.vk}</li>
                        <li>{props.profile.contacts.twitter}</li>
                        <li>{props.profile.contacts.instagram}</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
export default ProfileInfo;
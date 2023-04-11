import React from 'react';
import s from './../Profile.module.css';
import theme from '../../../assets/images/community.jpg'
import avatar from '../../../assets/images/noAvatar.jpg';
import ProfileStatus from './ProfileStatus.jsx'
import Preloader from "../../common/Preloader/Preloader";



const ProfileInfo = (props) => {

    if(!props.profile){
        return <div>
            <img src= <Preloader/> />
        </div>
    }
    let onMainPhotoSelected = (e) => {
            if(e.target.files.length){
                props.savePhoto(e.target.files[0]);
            }
    }
    return (
        <div>
            <div>
                <img src={props.profile.photos.large || avatar}/>
                {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/> }
                    <div><ProfileStatus status={props.status}
                                        updateStatus={props.updateStatus}/></div>
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
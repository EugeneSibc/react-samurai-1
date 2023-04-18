import React from 'react';
import s from './../Profile.module.css';
import theme from '../../../assets/images/community.jpg'
import avatar from '../../../assets/images/noAvatar.jpg';
import ProfileStatus from './ProfileStatus.jsx'
import Preloader from "../../common/Preloader/Preloader";




const ProfileInfo = ({profile, isOwner, status, savePhoto, updateStatus}) => {

    if(!profile){
        return <div>
            <Preloader/>
        </div>
    }
    let onMainPhotoSelected = (e) => {
            if(e.target.files.length){
                savePhoto(e.target.files[0]);
            }
    }
    return (
        <div>
            <div>
                <img src={profile.photos.large || avatar}/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/> }
                    <div>
                        <div>
                            <b>Looking for a job:</b>{profile.lookingForAJob ? "Yes" : "No"}
                        </div>
                        <div>
                            <b>About me:</b>{profile.aboutMe}
                        </div>
                        {profile.lookingForAJob &&
                        <div>
                            <b>My professional skills:</b> {profile.lookingForAJobDescription}
                        </div>}
                        <div>
                            fullName: required(string)
                        </div>
                        <div>
                            contacts: required(object)
                        </div>
                    </div>
                    <div>
                        <ProfileStatus status={status}
                                        updateStatus={updateStatus}/>
                    </div>
                <div className={s.postBlock}>
                    <ul>
                        <li>{profile.contacts.facebook}</li>
                        <li>{profile.contacts.vk}</li>
                        <li>{profile.contacts.twitter}</li>
                        <li>{profile.contacts.instagram}</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
export default ProfileInfo;
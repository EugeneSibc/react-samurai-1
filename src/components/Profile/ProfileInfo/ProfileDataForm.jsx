import React from 'react';
import {reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../common/FormsControl/FormsControl";
import s from './../Profile.module.css';

const ProfileDataForm = ({profile, isOwner, leaveEditMode}) => {
    return (
        <div>
            <div><button onClick={leaveEditMode}>save</button></div>
            <div>
                <b>Full Name:</b> {createField(
                    "Full name",
                    "full name",
                    [],
                    Input
                )}
            </div>
            <div>
                <div>
                <b>Looking for a job:</b>
                </div>
                <div className={s.div1}>
                    {createField(
                    "Looking for a job",
                    "looking for a job",
                    [],
                    Input,
                    {type: "radio"},
                    "yes"
                )}
                </div>
                <div className={s.div1}>
                {createField(
                    "Looking for a job",
                    "looking for a job",
                    [],
                    Input,
                    {type: "radio"},
                    "no"
                )}
                </div>
            </div>
            <div>
                <b>About me:</b>
                <div className={s.div2}>
                {createField(
                "About me",
                "About me",
                [],
                Textarea
                )}
                </div>
            </div>
            {profile.lookingForAJob &&
            <div>
                <b>My professional skills:</b> {profile.lookingForAJobDescription}
            </div>}

            <div>
                {/*<b>Contact:</b>{Object.keys(profile.contacts).map(key => {
                return <Contact contactTitle={key}
                                contactValue={profile.contacts[key]}
                                key={key}/>
                })}*/}
            </div>
        </div>
    )
}

const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataReduxForm;
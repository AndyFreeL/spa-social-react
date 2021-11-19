import s from '../Profile/Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Redirect} from "react-router-dom";
import React from "react";

const Profile = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus} saveProfile={props.saveProfile} savePhoto={props.savePhoto}/>
            <MyPostsContainer />
        </div>

    )
}
export default Profile;

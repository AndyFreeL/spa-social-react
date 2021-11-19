import s from '../ProfileInfo/ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ava from "../../../assets/images/avatar.png";
import {useState} from "react";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, updateStatus, status, isOwner, savePhoto, saveProfile}) => {

  let [editMode, setEditMode]=useState(false);

  if (!profile) {
    return <Preloader/>
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  const onSubmit = (formData) => {
    saveProfile(formData).then(()=>{
      setEditMode(false);
    });
  }

  return (
    <div className={s.content}>
      <div className={s.body}>
        <div className={s.gAreaL}>
          <div className={s.profile}>
            <div className={s.photo}>
              <img src={profile.photos.large || ava}/>
              {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            </div>
            <button>Follow</button>
          </div>

        </div>
        <div className={s.gAreaR}>

          {editMode
            ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
            :  <ProfileData isOwner={isOwner} goToEditMode={()=>{setEditMode(true)}} profile={profile}/>
          }

          <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
      </div>

    </div>
  )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return <div>

    {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}

    <div>{profile.fullName}</div>
    <div><b>Looking for a Job: </b>{profile.lookingForAJob ? 'yes' : 'no'}</div>
    {profile.lookingForAJob && <div><b>Skills: {profile.lookingForAJobDescription}</b></div>}
    <div><b>About me: </b>{profile.aboutMe}</div>
    <div><b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
      return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
    })}</div>
  </div>
}

const Contact = ({contactTitle, contactValue}) => {
  return <div><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;

import s from '../ProfileInfo/ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ava from "../../../assets/images/avatar.png";
import choosePhoto from './../../../assets/icons/choosePhoto.png'
import {useState} from "react";
import ProfileDataForm from "./ProfileDataForm";
import cn from 'classnames'

const ProfileInfo = ({profile, updateStatus, status, isOwner, savePhoto, saveProfile}) => {

  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader/>
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  }

  return (
    <div className={s.content}>
      <div className={s.body}>
        <div className={cn(s.infoArea, s.leftArea)}>
          <div className={s.photo}>
            <img className={s.photoImg} src={profile.photos.large || ava}/>
            {isOwner &&  <div className={s.overlay}>
               <div>
                <input id={'inputFile'} className={s.inputFile} name={'file'} type={'file'}
                       onChange={onMainPhotoSelected}/>
                <label htmlFor={'inputFile'}><img className={s.choosePhoto} src={choosePhoto}/></label>
              </div>
            </div>}
          </div>
          {/*{!isOwner &&  <div className={s.btns}>*/}
          {/*  <button className={s.followBtn}>Follow</button>*/}
          {/*  <button className={s.followBtn}>Message</button>*/}
          {/*</div>}*/}
        </div>
        <div className={cn(s.infoArea, s.rightArea)}>
          {editMode
            ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
            : <ProfileData status={status} updateStatus={updateStatus} isOwner={isOwner} goToEditMode={() => {
              setEditMode(true)
            }} profile={profile}/>
          }
        </div>
      </div>

      {/*<div>*/}
      {/*  <div className={s.gAreaL}>*/}
      {/*    <div className={s.profile}>*/}
      {/*      <div className={s.photo}>*/}
      {/*        <img src={profile.photos.large || ava}/>*/}
      {/*        {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}*/}
      {/*      </div>*/}
      {/*      <button>Follow</button>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className={s.gAreaR}>*/}

      {/*    {editMode*/}
      {/*      ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>*/}
      {/*      : <ProfileData isOwner={isOwner} goToEditMode={() => {*/}
      {/*        setEditMode(true)*/}
      {/*      }} profile={profile}/>*/}
      {/*    }*/}

      {/*    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>*/}
      {/*  </div>*/}
      {/*</div>*/}

    </div>
  )
}

const ProfileData = ({profile, isOwner,status,updateStatus, goToEditMode}) => {
  return <div>

    {isOwner && <div>
      <button onClick={goToEditMode}>Edit</button>
    </div>}

    <div className={s.name}>{profile.fullName}</div>
    <div className={s.status}><ProfileStatusWithHooks status={status} updateStatus={updateStatus}/></div>
    <div className={s.personInfo}>
      <b>Looking for a Job: </b>{profile.lookingForAJob ? 'yes' : 'no'}
      {profile.lookingForAJob && <div><b>Skills: </b>{profile.lookingForAJobDescription}</div>}
      <div className={s.about}><b>About me: </b>{profile.aboutMe}</div>

      {/*<div><b>Contacts</b>: {Object.keys(profile.contacts).map(key => {*/}
      {/*  return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>*/}
      {/*})}</div>*/}
    </div>




    {/*<div>{profile.fullName}</div>*/}
    {/*<div><b>About me: </b>{profile.aboutMe}</div>*/}
    {/*<div><b>Looking for a Job: </b>{profile.lookingForAJob ? 'yes' : 'no'}</div>*/}
    {/*{profile.lookingForAJob && <div><b>Skills: </b>{profile.lookingForAJobDescription}</div>}*/}
    {/*/!*<div><b>Contacts</b>: {Object.keys(profile.contacts).map(key => {*!/*/}
    {/*/!*  return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>*!/*/}
    {/*/!*})}</div>*!/*/}
  </div>
}

const Contact = ({contactTitle, contactValue}) => {
  return <div><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;

import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import s from '../ProfileInfo/ProfileInfo.module.css'
import es from '../../common/FormsControls/FormsControls.module.css'
import {reduxForm} from "redux-form";
import React from "react";


const ProfileDataForm = ({handleSubmit,profile, error}) => {
  return <form onSubmit={handleSubmit}>

    <button>Save</button>

    {error && <div className={es.formSummaryError}>{error}</div>}

    <div>
      <b>Full name</b>: {createField('Full name', 'fullName', Input, [])}
    </div>
    <div>
      <b>Looking for a Job: </b>{createField(null, 'lookingForAJob', Input ,[], {type:'checkbox'})}
    </div>
    <div>
      <b>Skills</b>: {createField('Skills', 'lookingForAJobDescription', Textarea ,[])}
    </div>
    <div>
      <b>About me</b>: {createField('About me', 'aboutMe', Textarea ,[])}
    </div>


    <div><b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
      return <div key={key} className={s.contact}>
        <b>{key}: {createField(key, 'contacts.'+key, Input ,[])}</b>
      </div>
    })}</div>
  </form>
}

const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataReduxForm;

import s from '../ProfileInfo/ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, updateStatus, status}) => {

  if (!profile){
    return <Preloader/>
  }
    return (
        <div className={s.content}>
          <div className={s.body}>
            <div className={s.gAreaL}>
              <div className={s.profile}>
                <div className={s.photo}><img src={profile.photos.large}/></div>
                <button>Follow</button>
              </div>
              <div className={s.contacts}>
              </div>
            </div>
            <div className={s.gAreaR}>
              <div>{profile.fullName}</div>
              <div>{profile.aboutMe}</div>
              <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
              {/*<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>*/}
            </div>
          </div>

        </div>

    )
}
export default ProfileInfo;

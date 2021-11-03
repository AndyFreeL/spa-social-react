import s from '../ProfileInfo/ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {

  if (!props.profile){
    return <Preloader/>
  }
    return (
        <div className={s.content}>
          <div className={s.body}>
            <div className={s.gAreaL}>
              <div className={s.profile}>
                <div className={s.photo}><img src={props.profile.photos.large}/></div>
                <button>Follow</button>
              </div>
              <div className={s.contacts}>
              </div>
            </div>
            <div className={s.gAreaR}>
              <div>{props.profile.fullName}</div>
              <div>{props.profile.aboutMe}</div>
              <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
          </div>

        </div>

    )
}
export default ProfileInfo;

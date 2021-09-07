import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import ava from '../../../assets/images/avatar.png'

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialog}>
            <div className={s.contact}>
            <div><img src={ava} alt=""/></div>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default DialogItem;
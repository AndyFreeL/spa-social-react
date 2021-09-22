import s from './../Dialogs.module.css'
import ava from '../../../assets/images/avatar.png'
import React from "react";


const Message = (props) => {

    return (
        <div>
            <div className={s.messages_prim}>
                <div className={s.user_ava}><img src={ava} alt=""/></div>
                <div>{props.message}</div>
            </div>
        </div>

    )
}
export default Message;
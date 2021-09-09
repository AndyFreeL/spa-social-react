import s from './../Dialogs.module.css'
import ava from '../../../assets/images/avatar.png'
import React from "react";


const Message = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }


    return (
        <div>
            <div className={s.messages_prim}>
                <div className={s.user_ava}><img src={ava} alt=""/></div>
                <div>{props.message}</div>
            </div>
            {/*<div className={s.messages_prim}>*/}
            {/*    <div>{props.message}</div>*/}
            {/*    <div className={s.user_ava}><img src={ava} alt=""/></div>*/}
            {/*</div>*/}
            <textarea ref={newMessageElement}></textarea>
            <button onClick={addMessage}>Add</button>
        </div>

    )
}
export default Message;
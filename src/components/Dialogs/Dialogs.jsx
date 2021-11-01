import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {

let state = props.dialogsPage;

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessage(text);
    }

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>)

    if(!props.isAuth) return <Redirect to={'/login'}/>;

    return (
        <div className={s.content}>
            <div className={s.dialogsBody}>
                <div className={s.dialogs_items}>
                    {dialogsElements}
                </div>
                <div className={s.messages_items}>
                    {messagesElements}
                    <div className={s.message_enter_field}>
                        <textarea
                            placeholder={'Enter your message'}
                            value={state.newMessage}
                            onChange={onMessageChange}
                            ref={newMessageElement}/>
                        <button onClick={addMessage}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;

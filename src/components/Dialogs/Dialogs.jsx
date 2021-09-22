import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addNewMessageCreator, updateNewMessageCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addNewMessageCreator());
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = updateNewMessageCreator(text);
        props.dispatch(action);
    }


    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

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
                            value={props.state.newMessage}
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
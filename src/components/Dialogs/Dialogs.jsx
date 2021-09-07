import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Name 1'},
        {id: 2, name: 'Name 2'},
        {id: 3, name: 'Name 3'},
        {id: 4, name: 'Name 4'}
    ];

    let messages = [
        {id: 1, message: "Some message 1"},
        {id: 2, message: "Some message 2"},
        {id: 3, message: "Some message 3"},
        {id: 4, message: "Some message 4"},
        {id: 5, message: "Some message 5"},
        {id: 6, message: "Some message 6"}
    ];

    let dialogsElements = dialogs.map(d=><DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m=><Message message={m.message}/>)

    return (
        <div className={s.content}>
            <div className={s.dialogsBody}>
                <div className={s.dialogs_items}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}
export default Dialogs;
import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength10=maxLengthCreator(10);

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let addMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  }


  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
  let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>)

  if (!props.isAuth) return <Redirect to={'/login'}/>;

  return (
    <div className={s.content}>
      <div className={s.dialogsBody}>
        <div className={s.dialogs_items}>
          {dialogsElements}
        </div>
        <div className={s.messages_items}>
          {messagesElements}
          <AddMessageReduxForm onSubmit={addMessage}/>
        </div>

      </div>
    </div>
  )
}

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.message_enter_field}>
        <Field component={Textarea} name={'newMessageBody'}  placeholder={'Enter your message'} validate={[required, maxLength10]}/>
        <button >Add</button>
      </div>
    </form>
  )
}

const AddMessageReduxForm = reduxForm({form:'addMessageForm'})(AddMessageForm);

export default Dialogs;

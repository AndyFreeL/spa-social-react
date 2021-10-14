import React from "react";
import {addNewMessageCreator, updateNewMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage;

  let addMessage = () => {
    props.store.dispatch(addNewMessageCreator());
  }

  let onMessageChange = (text) => {
    props.store.dispatch(updateNewMessageCreator(text));
  }

  return <Dialogs updateNewMessage={onMessageChange}
                  sendMessage={addMessage}
                  dialogsPage={state}/>
}
export default DialogsContainer;

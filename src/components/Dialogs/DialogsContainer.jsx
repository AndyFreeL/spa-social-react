import React from "react";
import {addNewMessageCreator, updateNewMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state)=>{
  return{
    dialogsPage:state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch)=>{
  return{
    updateNewMessage:(text)=>{
      dispatch(updateNewMessageCreator(text))
    },
    sendMessage:()=>{
      dispatch(addNewMessageCreator())
    }
  }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;

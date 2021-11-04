const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';

const initialState = {
  messages: [
    {id: 1, message: "Some message 1"},
    {id: 2, message: "Some message 2"},
    {id: 3, message: "Some message 3"},
    {id: 4, message: "Some message 4"},
    {id: 5, message: "Some message 5"},
    {id: 6, message: "Some message 6"}
  ],
  dialogs: [
    {id: 1, name: 'Name 1'},
    {id: 2, name: 'Name 2'},
    {id: 3, name: 'Name 3'},
    {id: 4, name: 'Name 4'}
  ],
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case SEND_NEW_MESSAGE:
      let newMessageBody = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, {id: 7, message: newMessageBody}]
      };

    default:
      return state;
  }
}

export const addNewMessageCreator = (newMessageBody) => ({type: SEND_NEW_MESSAGE, newMessageBody});

export default dialogsReducer;

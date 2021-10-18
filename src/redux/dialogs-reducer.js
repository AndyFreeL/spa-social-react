const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
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
    newMessage: '',
}

const dialogsReducer = (state=initialState, action) => {

    switch (action.type){
        case UPDATE_NEW_MESSAGE: {
            let stateCopy = {...state}
            stateCopy.newMessage = action.newMessage;
            return stateCopy;
        }
        case SEND_NEW_MESSAGE: {
            let stateCopy = {...state}
            let newMessageBody = stateCopy.newMessage;
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push({id: 7, message: newMessageBody});
            stateCopy.newMessage = '';
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addNewMessageCreator = () => {
    return {
        type: SEND_NEW_MESSAGE
    }
};
export const updateNewMessageCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE,
        newMessage: text
    }
};

export default dialogsReducer;

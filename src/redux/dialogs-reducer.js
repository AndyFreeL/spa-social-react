const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';

const dialogsReducer = (state, action) => {

    switch (action.type){
        case UPDATE_NEW_MESSAGE:
            state.newMessage = action.newMessage;
            return state;
        case SEND_NEW_MESSAGE:
            let newMessageBody = state.newMessage;
            state.messages.push({id: 7, message: newMessageBody});
            state.newMessage = '';
            return state;
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
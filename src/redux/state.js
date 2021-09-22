const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';



let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Some text from post 1', likesCount: 23},
                {
                    id: 2, message: 'Some text from post 2Some text from post 2Some text from post ' +
                        '2Some text from post 2Some text from post 2Some text from post 2S', likesCount: 41
                },
                {id: 3, message: 'Some text from post 1', likesCount: 21},
                {
                    id: 4, message: 'Some text from post 2Some text from post 2Some text from post 2Some text' +
                        ' from post 2Some text from post 2Some text from post 2S', likesCount: 61
                }
            ],
            newPostText: ''
        },
        dialogsPage: {
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
            newMessage:'',
        }
    },
    _callSubscriber() {
        this.subscribe();
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    _addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    _updatePostText(newPostText) {
        this._state.profilePage.newPostText = newPostText;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newPostText;
            this._callSubscriber(this._state);

        }else if(action.type === UPDATE_NEW_MESSAGE){
            this._state.dialogsPage.newMessage = action.newMessage;
            this._callSubscriber(this._state);
        }else if(action.type === SEND_NEW_MESSAGE){
            let newMessageBody = this._state.dialogsPage.newMessage;
            this._state.dialogsPage.messages.push({id: 7, message:newMessageBody});
            this._state.dialogsPage.newMessage = '';
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: text
    }
};

export const addNewMessageCreator = () => {
    return {
        type: SEND_NEW_MESSAGE
    }
};
export const updateNewMessageCreator = (text) => {
    return {
        type:UPDATE_NEW_MESSAGE,
        newMessage: text
    }
};


export default store;
window.store = store;
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

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
            newMessage: '',
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


    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;
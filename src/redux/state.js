


let store={
    _state:{
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
            ]
        }
    },
    _callSubscriber() {
        this.subscribe();
    },

    getState(){
        return this._state
    },
    subscribe(observer){
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
    _updatePostText (newPostText) {
        this._state.profilePage.newPostText = newPostText;
        this._callSubscriber(this._state);
    },

    dispatch(action){
        if(action.type==='ADD-POST'){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }else if(action.type==='UPDATE-POST-TEXT'){
            this._state.profilePage.newPostText = action.newPostText;
            this._callSubscriber(this._state);
        }
    }



}




export default store;
window.store = store;
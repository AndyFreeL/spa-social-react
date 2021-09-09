import {rerenderTree} from "../render";

let state = {
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
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    rerenderTree(state);
}

export let updatePostText = (newPostText) => {
    state.profilePage.newPostText = newPostText;
    rerenderTree(state);
}

export default state;
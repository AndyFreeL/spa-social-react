const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
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
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;
        default:
            return state;
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

export default profileReducer;
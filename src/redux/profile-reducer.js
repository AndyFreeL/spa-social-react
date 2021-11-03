import {profileAPI, usersAPI} from "../api/api";
import {toggleFollowingProgress, unfollowSuccess} from "./users-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

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
    newPostText: '',
    profile:null,
    status:'',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
           return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newPostText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newPostText: text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({ type: SET_STATUS, status});

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
          .then(data=> {
             dispatch(setUserProfile(data));
          });
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
          .then(response => {
              dispatch(setStatus(response.data));
          });
    }
}

export const updateStatus = (status) => (dispatch) => {
        profileAPI.updateStatus(status)
          .then(response => {
              if (response.data.resultCode === 0){
                  dispatch(setStatus(status));
              }
          });
}

export default profileReducer;

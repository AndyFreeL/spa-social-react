import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange=()=>{
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div>
            <h3>My Post</h3>
            <div>
                <textarea ref={newPostElement} onChange={onPostChange}
                          value={props.newPostText}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            {postsElement}
        </div>

    )
}
export default MyPosts;
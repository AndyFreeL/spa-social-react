import s from '../MyPosts/MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type:'ADD-POST'});
    };

    let onPostChange=()=>{
        let text = newPostElement.current.value;
        props.dispatch({type:'UPDATE-POST-TEXT',newPostText:text});
    }

    return (
        <div>
            <h3>My Post</h3>
            <div>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            {postsElement}
        </div>

    )
}
export default MyPosts;
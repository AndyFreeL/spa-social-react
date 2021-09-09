import s from '../MyPosts/MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value ="";

    };

    let onPostChange=()=>{
        let text = newPostElement.current.value;
        props.updatePostText(text)
    }

    return (
        <div>
            <h3>My Post</h3>
            <div>
                <textarea ref={newPostElement} onChange={onPostChange}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            {postsElement}
        </div>

    )
}
export default MyPosts;
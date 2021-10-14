import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange=()=>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <h3>My Post</h3>
            <div>
                <textarea ref={newPostElement} onChange={onPostChange}
                          value={props.newPostText}></textarea>
                <button onClick={onAddPost}>Add post</button>
            </div>
            {postsElement}
        </div>

    )
}
export default MyPosts;

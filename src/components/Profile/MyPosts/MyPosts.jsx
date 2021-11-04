import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

  let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div>
      <h3>My Post</h3>
      <MyPostReduxForm onSubmit={onAddPost}/>
      {postsElement}
    </div>

  )
}

const MyPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field placeholder={'Enter your post'} name={'newPostText'} component={'input'}/>
      <button>Add post</button>
    </form>
  )
}

const MyPostReduxForm=reduxForm({form:'myPost'})(MyPostForm);

export default MyPosts;

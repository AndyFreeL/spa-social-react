import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";
import { maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10=maxLengthCreator(10);

const MyPosts = React.memo(props => {

  let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)

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
});

const MyPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field placeholder={'Enter your post'} name={'newPostText'} component={Textarea} validate={[required, maxLength10]}/>
      <button>Add post</button>
    </form>
  )
}

const MyPostReduxForm=reduxForm({form:'myPost'})(MyPostForm);

export default MyPosts;

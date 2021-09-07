import s from '../MyPosts/MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElement = props.posts.map(p=><Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div>
            <h3>My Post</h3>
            <div>
                <textarea name="" id="" cols="30" rows="1"></textarea>
                <button>Add post</button>
            </div>
            {postsElement}
        </div>

    )
}
export default MyPosts;
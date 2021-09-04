import s from '../MyPosts/MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <h3>My Post</h3>
            <div>
                <textarea name="" id="" cols="30" rows="1"></textarea>
                <button>Add post</button>
            </div>
            <Post message="Some text from post 1"/>
            <Post message="Some text from post 2Some text from post 2Some text from post 2Some text from post 2Some text from post 2Some text from post 2Some text from post 2Some text from post 2Some text from post 2Some text from post 2Some text from post 2Some text from post 2"/>
        </div>

    )
}
export default MyPosts;
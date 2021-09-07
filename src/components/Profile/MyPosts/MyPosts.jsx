import s from '../MyPosts/MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {id:1, message:'Some text from post 1', likesCount: 23},
        {id:1, message:'Some text from post 2Some text from post 2Some text from post 2Some text from post 2Some text from post 2Some text from post 2S', likesCount: 41}
    ]

    return (
        <div>
            <h3>My Post</h3>
            <div>
                <textarea name="" id="" cols="30" rows="1"></textarea>
                <button>Add post</button>
            </div>
            <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
            <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
        </div>

    )
}
export default MyPosts;
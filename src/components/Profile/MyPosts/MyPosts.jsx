import s from '../MyPosts/MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id:1, message:'Some text from post 1', likesCount: 23},
        {id:2, message:'Some text from post 2Some text from post 2Some text from post ' +
                '2Some text from post 2Some text from post 2Some text from post 2S', likesCount: 41},
        {id:3, message:'Some text from post 1', likesCount: 21},
        {id:4, message:'Some text from post 2Some text from post 2Some text from post 2Some text' +
                ' from post 2Some text from post 2Some text from post 2S', likesCount: 61}
    ];

    let postsElement = posts.map(p=><Post message={p.message} likesCount={p.likesCount}/>)

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
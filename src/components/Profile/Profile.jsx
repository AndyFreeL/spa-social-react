import s from '../Profile/Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {

    let posts = [
        {id:1, message:'Some text from post 1', likesCount: 23},
        {id:2, message:'Some text from post 2Some text from post 2Some text from post ' +
                '2Some text from post 2Some text from post 2Some text from post 2S', likesCount: 41},
        {id:3, message:'Some text from post 1', likesCount: 21},
        {id:4, message:'Some text from post 2Some text from post 2Some text from post 2Some text' +
                ' from post 2Some text from post 2Some text from post 2S', likesCount: 61}
    ];

    return (

        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>

    )
}
export default Profile;
import s from '../Post/Post.module.css'
import katana from '../../../../assets/images/katanaBottom.png'
import decorLogo from '../../../../assets/images/decorLogo.png'
const Post = (props) => {
    return (
        <div className={s.item}>
            <div className={s.decor}>
                <div><img className={s.decor_logo} src={decorLogo} alt=""/></div>
                <div><img className={s.decor_logo} src={decorLogo} alt=""/></div>
            </div>

            <div className={s.header}>
                <img className={s.avatar} src="https://lh3.googleusercontent.com/proxy/SY24GltMMjOrnh8kV4wA6TNBjOfhGrI3GnjI5ScEJ540PvyVbAtiqkOVp6qgjgDPaf59RibqGsaG2WJyUVsaQilp8Wj-t95fHcQTXIjOQQ" alt=""/>
            </div>

            <div className={s.text_zone}>
                <div className={s.post_text}>{props.message}</div>
            </div>
            <div>
                <img className={s.katana}  src={katana} alt=""/>
            </div>
            <div className={s.like_zone}>
                <div><span>Like</span></div>
            </div>


        </div>
    )
}
export default Post;
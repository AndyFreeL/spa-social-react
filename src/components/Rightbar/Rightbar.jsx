import s from '../Rightbar/Rightbar.module.css'
import ava from '../../assets/images/avatar.png'

const Rightbar = () => {
    return (
        <nav className={s.body}>
            <div className={s.user}><img src={ava} alt=""/></div>
            <div className={s.user}><img src={ava} alt=""/></div>
            <div className={s.user}><img src={ava} alt=""/></div>
            <div className={s.user}><img src={ava} alt=""/></div>
            <div className={s.user}><img src={ava} alt=""/></div>
            <div className={s.user}><img src={ava} alt=""/></div>
        </nav>
    )
}

export default Rightbar;
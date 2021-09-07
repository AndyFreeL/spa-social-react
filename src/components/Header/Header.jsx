import s from '../Header/Header.module.css'
import logo from '../../assets/icons/logo.png'

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.content}>
                <a href="#"><img className={s.logo} src={logo} alt=""/></a>
                <a href="#"><div className={s.login}>Login</div></a>
            </div>
        </div>
    )
}

export default Header;
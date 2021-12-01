import s from '../Header/Header.module.css'
import logo from '../../assets/icons/logo.png'
import logout from '../../assets/icons/logout.png'
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <div className={s.header}>
      <div className={s.content}>
        <a href="#"><img className={s.logo} src={logo} alt=""/></a>
        <div className={s.login}>
          {!props.isAuth
            ? <div><NavLink to={'/login'}>Login</NavLink></div>
            : <div className={s.loginBlock}>
              {props.login}
              <div className={s.logout} onClick={props.logout}><img src={logout}/></div>
            </div>}
        </div>
      </div>
    </div>
  )
}

export default Header;

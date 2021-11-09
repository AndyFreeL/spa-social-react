import s from '../Header/Header.module.css'
import logo from '../../assets/icons/logo.png'
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <div className={s.header}>
      <div className={s.content}>
        <a href="#"><img className={s.logo} src={logo} alt=""/></a>
        <div className={s.login}>
          {!props.isAuth
            ? <NavLink to={'/login'}>Login</NavLink>
            : <div>
              {props.login}
              <button onClick={props.logout}>Logout</button>
            </div>}
        </div>
      </div>
    </div>
  )
}

export default Header;

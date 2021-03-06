import s from '../Navbar/Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.body}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/profile" activeClassName={s.active} >Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
          <div className={s.item}>
            <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
          </div>
        </nav>
    )
}

export default Navbar;

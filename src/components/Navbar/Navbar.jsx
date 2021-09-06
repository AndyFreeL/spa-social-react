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

            {/*<a href="/users">Users</a>*/}
            {/*<a href="/news">News</a>*/}
        </nav>
    )
}

export default Navbar;
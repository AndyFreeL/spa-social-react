import s from '../Navbar/Navbar.module.css'

const Navbar = () => {
    return (
        <div className={s.body}>
            <a href="#">Messages</a>
            <a href="#">Users</a>
            <a href="#">Profile</a>
            <a href="#">News</a>
        </div>
    )
}

export default Navbar;
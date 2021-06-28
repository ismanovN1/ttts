import React from "react";
import {BrowserRouter as Router, NavLink} from "react-router-dom";
import s from './Navbar.module.css'

function NavBar() {
    return (

        <div className={s.bar}>
            <div><NavLink to='/Profile' activeClassName={s.activ}>Profile</NavLink></div>
            <div><NavLink to='/Dialogs' activeClassName={s.activ}>Messages</NavLink></div>
            <div><NavLink to='/Users' activeClassName={s.activ}>Users</NavLink></div>
            <div><NavLink to='/Music' activeClassName={s.activ}>Music</NavLink></div>
            <div><NavLink to='/Settings' activeClassName={s.activ}>Setings</NavLink></div>

        </div>

    )

}

export default NavBar;

import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <div className={s.header} >
            <div className={s.login}>


            </div>
            <div className={s.head}>
                Social network
            </div>
        </div>)
}

export default Header
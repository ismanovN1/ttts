import React from "react";
import Messages from "../Messages/Messages";
import s from './DialogItem.module.css';
import {Redirect} from "react-router-dom";

const DialogItem = (props) => {
    let users = props.DialogPage.Users.map( m => <div>{m.name}</div>)



    return (
        <div className={s.DialogItem}>
            <div className={s.User}>{users}</div>
            <div className={s.Messages}><Messages state = {props}/></div>
        </div>)
}
export default DialogItem;
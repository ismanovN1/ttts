import React from "react";
import s from "./Users.module.css";
import Load from "./../../../Loading";
import ava from "../../../images/ava.png";
import {NavLink} from "react-router-dom";

const UsersIn = (props) => {
    let TotalPage = Math.ceil(props.TotalCount / 10)
    const pageN = () => {
        switch (props.Page) {
            case 1:
                return (<div className={s.page}>
                    <span className={s.set}>1</span> <span onClick={() => {
                    props.setPage(2)
                }}> > </span> ... <span onClick={() => {
                    props.setPage(TotalPage)
                }}> {TotalPage} </span></div>)
                break;
            case 2:
                return (<div className={s.page}>
                    <span onClick={() => {
                        props.setPage(1)
                    }}> 1 </span> <span className={s.set}> 2 </span><span onClick={() => {
                    props.setPage(3)
                }}> > </span><span onClick={() => {
                    props.setPage(TotalPage)
                }}> {TotalPage} </span></div>)
                break;
            case TotalPage:
                return (<div className={s.page}>
                    <span onClick={() => {
                        props.setPage(1)
                    }}>1</span> ... <span onClick={() => {
                    props.setPage(TotalPage - 1)
                }}> {' < '}</span><span className={s.set}>{TotalPage}</span></div>)
                break;
            case TotalPage - 1:
                return (<div className={s.page}>
                    <span onClick={() => {
                        props.setPage(1)
                    }}>1 </span>...<span onClick={() => {
                    props.setPage(TotalPage - 2)
                }}> {' < '} </span><span className={s.set}>{TotalPage - 1}</span><span onClick={() => {
                    props.setPage(TotalPage)
                }}>{TotalPage}</span></div>)
                break;

            default:
                return (<div className={s.page}>
                    <span onClick={() => {
                        props.setPage(1)
                    }}>1</span> .... <span onClick={() => {
                    props.setPage(props.Page - 1)
                }}> {' < '} </span> <span className={s.set}> {props.Page} </span><span onClick={() => {
                    props.setPage(props.Page + 1)
                }}> > </span>...<span onClick={() => {
                    props.setPage(TotalPage)
                }}> {TotalPage} </span></div>)

        }
    }
    return (


        <div>
            {props.isFatching ? <div className="progress"><div className="indeterminate"></div></div>
                :<div>

                {props.Users.map(u => {

                    return <div className={s.users}>
                    <span className={s.span1}>

                        <NavLink to={`Profile/${u.id}`}>
                        <div><img src={u.photos.small === null ? ava : u.photos.small}/></div></NavLink>
                    </span>
                        <span className={s.span2}>
                        <div>
                            <div className="btn" disabled={props.isFollowingProcess[u.id] } onClick={ () =>{props.followThunk(u) } }>
                                <i className="material-icons">{u.followed ? 'person_outline' : 'person_add'}</i>
                            </div>
                        </div>

                        <div>{u.name}</div>
                    </span>
                    </div>
                })}
                <div className={s.pages}>{pageN()}</div>
            </div>}

        </div>
    )
}

export default UsersIn;

import React from "react";
import {connect} from "react-redux";
import Users from './Users/OnUsersContainer.js';
import {followThunk,thunks,setProcessFollowing} from "../../redux/User-reducer";
import {getisFatching, getisFollowingProcess, getPage, getTotalCount, getUsers} from "../../Selectors/Selectors";


let SendState = (state) =>{
    return {
        Users: getUsers(state),
        TotalCount: getTotalCount(state),
        Page: getPage(state),
        isFatching: getisFatching(state),
        isFollowingProcess: getisFollowingProcess(state),

    }
}

const UsersContainer = connect( SendState,{setProcessFollowing, thunks , followThunk })(Users)
export default UsersContainer;
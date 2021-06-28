import React from "react";
import UsersIn from "./Users";
import * as axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        this.props.thunks()

    }

    setPage = (pageNumber) => {
        this.props.thunks(pageNumber)
    }

    render() {
        console.log(this.props)
        return(
            <UsersIn
                Users = {this.props.Users}
                TotalCount = {this.props.TotalCount}
                Page = {this.props.Page}
                isFatching = {this.props.isFatching}
                isFollowingProcess = {this.props.isFollowingProcess}



                setPage ={this.setPage}
                follow = {this.props.follow}
                setProcessFollowing = {this.props.setProcessFollowing}
                followThunk={this.props.followThunk} />
        )
    }
}


export default Users;

import React from "react";
import ProfileInfo from "./Profile/ProfileInfo/ProfileInfo";
import {connect} from "react-redux";
import { withRouter} from "react-router-dom";
import {
    setPhoto,
    getStatus,
    sendComment,
    setProfil,
    SetStatus,
    setProfile,
    setStatusAC, setProfileInfo
} from "../../redux/Profile-reducer";
import hocRedirect from "../../Redirect/Reedirect";
import {compose} from "redux";

class Profils extends React.Component {

    componentDidMount() {
        this.props.setProfil(this.props.match.params.userId || this.props.MyPage.id)
        this.props.getStatus(this.props.match.params.userId || this.props.MyPage.id )

    }
    componentDidUpdate(prevProps, prevState) {
        if (!this.props.match.params.userId){
            this.props.setProfil( this.props.MyPage.id)
            this.props.getStatus( this.props.MyPage.id )
        }

    }

    componentWillUnmount() {
        this.props.setProfile(null)
        this.props.setStatusAC(null)
    }

    render() {
        return <ProfileInfo {...this.props} promission={this.props.match.params.userId === undefined} />
    }
}



let SendState = (state) =>{
    return {
        MyPage : state.AuthPage,
        ProfilePage: state.ProfilePage,
    }
};
export default compose(connect( SendState, { setProfileInfo,  sendComment, setPhoto, setProfil, SetStatus, getStatus,setProfile , setStatusAC } ),withRouter, hocRedirect,)(Profils)


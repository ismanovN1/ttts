import React from "react";
import MyPosts from "../MyPosts/MyPosts";
import s from './ProfileInfo.module.css';
import Load from "./../../../../Loading";



class ProfileInfo extends React.Component {
    state = {

        editMode : false,
        status : this.props.ProfilePage.status
    }
    activates = () =>{
        this.setState({editMode: true }
        )}

    sendStatuss = (e) => {
        debugger
        let stts = e.currentTarget.value
        this.setState({status : stts})
    }

    deactivates = () =>{
        this.setState({editMode: false },)
        this.props.SetStatus(this.state.status)
    }
    render() {
        debugger
        return (
            <div className={s.Profil}>
                <div>
                    {this.props.ProfilePage.Profile
                        ? <img src={ this.props.ProfilePage.Profile.photos.large || ava } alt={this.props.ProfilePage.Profile.fullName}/>
                        : <Load/>}

                    {!this.state.editMode
                        ? <div onDoubleClick={this.activates}> {this.props.ProfilePage.status} </div>
                        : <div><input  value={this.state.status}  onBlur={this.deactivates} onChange={ this.sendStatuss } /></div>}

                </div>
                <div></div>
            </div>
        )
    }

}

export default ProfileInfo;
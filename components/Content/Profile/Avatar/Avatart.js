import Load from "./../../../../Loading";
import ava from "../../../../images/ava.png";
import React from "react";
import "./avatar.css"

const Avatar = (props) => {
    const setAvaPhoto = (event) => {
        event.target.files.length === 1
            ? props.setPhoto(event.target.files[0])
            : alert('choose 1 photo')
    }
    return (
        <div>
            {props.ProfilePage.Profile
                ? <img style={{borederRadius:"50%", width:"100%"}} className="activator" src={props.ProfilePage.Profile.photos.large || ava}
                       alt={props.ProfilePage.Profile.fullName}/>
                : <div className="preloader-wrapper big active">
                    <div className="spinner-layer spinner-blue-only">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div>
                        <div className="gap-patch">
                            <div className="circle"></div>
                        </div>
                        <div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
            }
            {
                (props.promission) &&
                <div className="file-field input-field">
                    <div className="btn">
                        <i className="material-icons">autorenew</i>
                        <input onChange={setAvaPhoto} type="file"/>
                    </div>
                    <div className="file-path-wrapper">
                        <input placeholder='Change photo' className="file-path validate" type="text"/>
                    </div>
                </div>
            }
        </div>
    )
}
export default Avatar;

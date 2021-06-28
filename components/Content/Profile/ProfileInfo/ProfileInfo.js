import React ,{useState , useEffect} from "react";
import MyPosts from "../MyPosts/MyPosts";
import s from './ProfileInfo.module.css';
import Avatar from "../Avatar/Avatart";
import Information from "../Avatar/information";
import M from 'materialize-css';

const ProfileInfo = (props) => {

    let [x, editMod] = useState(false)
    let [y, changgeStatus] = useState(props.ProfilePage.status)

    useEffect(() =>{

        changgeStatus(props.ProfilePage.status)

            var elems = document.querySelectorAll('.collapsible');
            M.Collapsible.init(elems, {accordion: false});


    },[])

    const sendStatuss = (e) => {
        let stts = e.currentTarget.value
        changgeStatus(stts)
    }
    const activates = () =>{
        if(props.ProfilePage.Profile.userId === props.MyPage.id)
        editMod(true)
    }

    const deactivates = () =>{
        editMod(false)
        props.SetStatus(y)
    }
    return (
            <div className={s.Profil}>
                <div>

                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                            <Avatar {...props} />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">{props.ProfilePage.Profile && props.ProfilePage.Profile.fullName}<i
                                className="material-icons right">more_vert</i></span>
                            <ul className="collapsible">
                                <li>
                                    <div className="collapsible-header"><i className="material-icons">assignment</i><b>Status</b>
                                    </div>
                                    <div className="collapsible-body">{ x
                                        ? <div>

                                            <div className="row">
                                                <form className="col s12">
                                                    <div className="row">
                                                        <div className="input-field col s6">
                                                            <i className="material-icons prefix">mode_edit</i>
                                                            <textarea id="icon_prefix2"
                                                                      className="materialize-textarea" value={y}  onBlur={deactivates}
                                                                      onChange={ sendStatuss }
                                                            />
                                                            <label htmlFor="icon_prefix2">Status</label>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        : <div><span style={{border:"dashed" , padding:"15"}}><b>{props.ProfilePage.status}</b></span> <i className="material-icons " onClick={ activates }>autorenew</i> </div>
                                    }</div>
                                </li>
                            </ul>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Info<i
                                className="material-icons right">close</i></span>
                            <Information ProfilInformation = {props.ProfilePage.Profile} setInfoProfile={props.setProfileInfo} promission = {props.promission}/>
                        </div>
                        <div className="card-action">

                            <ul className="collapsible">
                                <li>
                                    <div className="collapsible-header"><i className="material-icons">mode_comment</i>Comments
                                    </div>
                                    <div className="collapsible-body"><MyPosts state={props}/></div>
                                </li>
                            </ul>
                            </div>
                    </div>
                </div>
            </div>
        )

}

export default ProfileInfo;
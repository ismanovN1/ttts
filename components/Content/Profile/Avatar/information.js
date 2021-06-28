import React, {useState} from "react";
import {Field, reduxForm} from "redux-form";
import { RenderInput, RenderCheck, RenderTextarea} from "../../../../utils/validation/renderForm";
import {required} from "../../../../utils/validation/validation";

const Forms = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="col s12">
            <Field name="fullName" icon="account_circle" type="text" component={RenderInput} label="Full name"
                   validate={required}/>
            <Field name="AboutMe" component={RenderTextarea} label="About me" validate={required}/>
            <Field name="lookingForAJob" type="password" component={RenderCheck} label="Looking for a job "/>
            <Field icon="work" name="lookingForAJobDescription" type="text" component={RenderInput}
                   label="Looking For A Job Description"/>

            <dl>
                <dt> Contacts:</dt>
                <dd><Field icon="language" name="github" type="text" component={RenderInput} label="github"/></dd>
                <dd><Field icon="language" name="vk" type="text" component={RenderInput} label="vk"/></dd>
                <dd><Field icon="language" name="facebook" type="text" component={RenderInput} label="facebook"/></dd>
                <dd><Field icon="language" name="instagram" type="text" component={RenderInput} label="instagram"/></dd>
                <dd><Field icon="http" name="website" type="text" component={RenderInput} label="website"/></dd>
                <dd><Field icon="language" name="twitter" type="text" component={RenderInput} label="twitter"/></dd>
                <dd><Field icon="language" name="youtube" type="text" component={RenderInput} label="youtube"/></dd>
                <dd><Field icon="language" name="mainLink" type="text" component={RenderInput} label="mainLink"/></dd>
            </dl>
            {props.error && <div style={{color:"red",border:"double"}}>{
                props.error.map(error =><p><b>{error}</b></p>)
            } </div> }
            <br/>
            <div>
                <button className="btn" type="submit" disabled={props.submitting}>Save</button>
            </div>
        </form>
    )
}

const FormsRedux = reduxForm({form: 'profileinfo'})(Forms)

const Information = (props) => {
    let [state, setState] = useState(false)

    const Set = () => {
        setState(true)
    }

    const Submiting = (values) => {
        const {fullName, AboutMe, lookingForAJob, lookingForAJobDescription} = values

        props.setInfoProfile({
            fullName, AboutMe, lookingForAJob, lookingForAJobDescription, contacts: {
                github: values.github, vk: values.vk, facebook: values.facebook, instagram: values.instagram,
                website: values.website, twitter: values.twitter, youtube: values.youtube, mainLink: values.mainLink
            }
        }, props.ProfilInformation.userId)}

    let contacts = props.ProfilInformation? props.ProfilInformation.contacts : undefined
    return (
        <div>
            {props.ProfilInformation &&
            <div>{state
                ? <FormsRedux onSubmit={Submiting}/>
                : <div>
                    <p><b>Full name: </b> {(props.ProfilInformation.fullName || '---')}</p>

                    <p><b>Abou me: </b> {props.ProfilInformation.aboutMe || '---'}</p>

                    <p><b>LookingForAJob:</b> {(props.ProfilInformation.lookingForAJob ? <span>Yes</span> : '---')}</p>

                    <p><b>Looking for a job description: </b> {(props.ProfilInformation.lookingForAJobDescription || '---')}</p>

                    <dl>
                        <dt><b>Contacts:</b></dt>

                        <dd><b>github:</b><a href={contacts.github}>{contacts.github || '---'}</a></dd>
                        <dd><b>vk: </b><a href={contacts.vk}>{contacts.vk || '---'}</a></dd>
                        <dd><b>facebook:</b><a href={contacts.facebook}>{contacts.facebook || '---'}</a></dd>
                        <dd><b>instagram:</b><a href={contacts.instagram}>{contacts.instagram || '---'}</a></dd>
                        <dd><b>website:</b><a href={contacts.website}>{contacts.website || '---'}</a></dd>
                        <dd><b>twitter:</b><a href={contacts.twitter}>{contacts.twitter || '---'}</a></dd>
                        <dd><b>youtube:</b><a href={contacts.youtube}>{contacts.youtube || '---'}</a></dd>
                        <dd><b>mainLink:</b><a href={contacts.mainLink}>{contacts.mainLink || '---'}</a></dd>
                    </dl>

                </div>
            }

                {props.promission && !state && <div className="btn" onClick={Set}>Change</div>}
            </div>
            }
        </div>
    )
}

export default Information

import React from "react";
import {Field, reduxForm} from "redux-form";
import {required, maxLength, minValue, email} from "./utils/validation/validation";
import {RenderCheck, RenderInput} from "./utils/validation/renderForm";
import {connect} from "react-redux";
import {SetLogin} from "./redux/Auth-reducer";
import {Redirect} from "react-router-dom";


const maxLength15 = maxLength(15)




const FieldLevelValidationForm = (props) => {
    const {handleSubmit, error,  submitting} = props
    return (
        <form onSubmit={handleSubmit}>

            <div className="row">
                <div className="col s12 offset-l2 l8">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <Field icon="email" name="Email" type="email" component={RenderInput} label="Email" validate={ email }/>
                            <Field icon="vpn_key" name="password" type="password" component={RenderInput} label="Password" validate={[required, maxLength15]} />
                            <Field name="rememberMe" label="Remember Me" component={RenderCheck} />
                            {props.captcha && <div>
                                <img src={props.captcha}/>
                                <Field name="captcha" type="text" component={RenderInput} label="typing text" validate={ required } />
                            </div>}
                            {error && <div style={{color: "red" , border: "dashed"}}>{error}</div>}
                            <br/>
                        </div>
                        <div className="card-action">
                            <button style={{marginRight:"30px"}} className="btn " type="submit" disabled={submitting}>sign in</button>
                            <a className="btn" href="https://social-network.samuraijs.com/signUp" >Sign up</a>
                        </div>
                    </div>
                </div>
            </div>


        </form>
    )
}


const LoginReduxForm = reduxForm({form: 'login'})(FieldLevelValidationForm)

const Authentification = (props) => {

    const xxx = (values) => {
        props.SetLogin(values)
    }
    return props.isAuth ? <Redirect to="/Profile"/> : <LoginReduxForm onSubmit={ xxx }  captcha={props.captchaUrl} />
}
const setStatetoProps = (state) =>({
    isAuth : state.AuthPage.isAuth,
    captchaUrl: state.AuthPage.captchaUrl

})
export default connect(setStatetoProps, {SetLogin})(Authentification);
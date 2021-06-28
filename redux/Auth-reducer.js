import {authLoginApi, securityApi} from "../API/UserApi";
import {stopSubmit} from "redux-form";

const SETAUTH = 'SETAUTH';
const PROCCES_APP = 'PROCCES_APP';
const SET_CAPTCHA = 'SET_CAPTCHA';

let initialiser = {
    id: null,
    email: null,
    login: null,
    captchaUrl: null,
    isAuth: false,
    isProcces: false,

}

const AuthReducer = (state = initialiser, action) => {
    switch (action.type) {
        case SET_CAPTCHA:
            return {...state, captchaUrl: action.captchaUrl }
            break
        case PROCCES_APP:
            return {...state, isProcces: true}
            break;
        case SETAUTH:
            return {...state, ...action.data,};
            break;
        default:
            return {...state};
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({type: SETAUTH, data: {id, email, login, isAuth}})
export const setProccesLoad = () => ({type: PROCCES_APP})
export const setCaptcha = (captcha) => ({type: SET_CAPTCHA, captchaUrl: captcha})
export default AuthReducer;

export const setApi = () => (dispatch) => {
    authLoginApi.getLogin().then(
        (data) => {

            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login, true))
            }
            dispatch(setProccesLoad())
        })
}
export const SetLogin = (USERData) => (dispatch) => {
    authLoginApi.setLogin(USERData).then(
        (response) => {
            if (response.data.resultCode === 0) {
                dispatch(setApi())
            }else {
                if (response.data.resultCode === 10){
                    dispatch(getCaptcha())
                    dispatch(stopSubmit('login', {_error: 'some error'}))
                } else {
                    dispatch(stopSubmit('login', {_error: response.data.messages[0]}))
                }
            }
        })
}
export const getCaptcha = () => async (dispatch) => {
    const response = await securityApi.getCaptchaUrl()

    dispatch(setCaptcha(response.url))

}

export const DeleteLogin = () => (dispatch) => {

    authLoginApi.deleteLogin().then(
        (response) => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData())
            }
        })
}




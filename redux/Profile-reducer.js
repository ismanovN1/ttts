import {profilApi} from "../API/UserApi";
import {stopSubmit} from "redux-form";

const SETSTATUS = 'SETSTATUS'
const ADDCOMMENT = 'ADDCOMMENT';
const SETPROFILE = 'SETPROFILE';

let initialiser = {

        Posts: [
            {id: 1, comment: 'hello my best friend', likesCountes: 20},
            {id: 2, comment: 'like ', likesCountes: 20},
            {id: 3, comment: 'Respect', likesCountes: 20},
            {id: 4, comment: 'good image', likesCountes: 24},
        ],
        status: '',
        Profile: null,
}
const ProfileReducer = (state = initialiser, action) => {

    switch (action.type) {
        case SETSTATUS :
            return {...state, status: action.newStatus ? action.newStatus : '-----'}
        case SETPROFILE:
            return {...state , Profile: action.profile}
            break;

        case ADDCOMMENT:
            let Text = {id: 4, comment:action.text, likesCountes: 24};
            let stateCopy = {...state};
            stateCopy.Posts = [...state.Posts]
            stateCopy.Posts.push(Text);
            return stateCopy;
            break;
        default: return {...state}

    }

}
export const sendComment = (text) =>({type: ADDCOMMENT , text});
export const setStatusAC = (newStatus) =>({type: SETSTATUS, newStatus});
export const setProfile = (profile) =>({type: SETPROFILE, profile});
export default ProfileReducer ;

export const setProfil= (userId) => async (dispatch) => {
    let response = await profilApi.getProfile(userId)
    dispatch( setProfile(response))
}
export const SetStatus = (status) => async (dispatch) => {

    dispatch( setStatusAC(status) )
    let response = await profilApi.setStatus(status)

}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profilApi.getStatus(userId)
    dispatch( setStatusAC(response.data))

}
export const setPhoto = photo => async dispatch =>{
    let response = await profilApi.setAvaPhoto(photo)
}

export const setProfileInfo = (info,id) => async dispatch =>{
    let response = await profilApi.setInform(info)
    if(response.data.resultCode === 0){
        dispatch(setProfil(id))
    }else{

        dispatch(stopSubmit('profileinfo',{_error : response.data.messages} ))
    }

}
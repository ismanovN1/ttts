import {UserApi} from "../API/UserApi";

const ISPROCESSFOLLOWING = 'ISPROCESSFOLLOWING';
const TOTALCOUNT = 'TOTALCOUNT';
const FOLLOW = 'FOLLOW';
const SETUSERS = 'SETUSERS';
const PAGE = 'PAGE';
const PRELOADER = 'PRELOADER';

let initialiser = {
    Users: [],
    TotalCount: 0,
    Page: 1,
    isFatching: true,
    isFollowingProcess: [],
}

const UserReducer = (state = initialiser, action) => {
    debugger
    switch (action.type) {
        case ISPROCESSFOLLOWING:
            let process = [...state.isFollowingProcess]
            process[action.state.id] = action.state.value
            return {...state, isFollowingProcess: process};
            break;

        case FOLLOW :
            return {
                ...state,
                Users: [...state.Users.map(U => {
                    let u = {...U};
                    if (u.id === action.id) {
                        u.followed = !u.followed
                    }
                    return u;
                })]
            };
            break;

        case SETUSERS:
            return {...state, Users: action.newUsers};

        case TOTALCOUNT:
            return {...state, TotalCount: action.TC};


        case PAGE:
            return {...state, Page: action.page};
            break;

        case PRELOADER:
            return {...state, isFatching: action.bool}

        default:
            return {...state};
    }
}
export default UserReducer;
export const setUsers = (newUsers) => ({type: SETUSERS, newUsers});
export const follow = (id) => ({type: FOLLOW, id});
export const TotalCount = (TC) => ({type: TOTALCOUNT, TC});
export const Page = page => ({type: PAGE, page})
export const Preload = bool => ({type: PRELOADER, bool})
export const setProcessFollowing = state => ({type: ISPROCESSFOLLOWING, state})

export const thunks = (pageNumber = 1) => async (dispatch) => {
    dispatch(Preload(true))
    let data = await UserApi.getUser(pageNumber)
    dispatch(Preload(false))
    dispatch(setUsers(data.items))
    dispatch(TotalCount(data.totalCount))
    dispatch(Page(pageNumber))
}
export const followThunk = (u) => async (dispatch) => {
    dispatch(setProcessFollowing({id: u.id, value: true}))
    let Follow = u.followed ? await UserApi.followDelete(u.id) : await UserApi.followPost(u.id);
    dispatch(follow(u.id))
    dispatch(setProcessFollowing({id: u.id, value: false}))

}
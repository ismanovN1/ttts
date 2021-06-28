import {createSelector} from "reselect";

export const getUsersX = (state) => state.UserPage.Users
export const getTotalCount = (state) => state.UserPage.TotalCount
export const getPage = (state) => state.UserPage.Page
export const getisFatching = (state) => state.UserPage.isFatching
export const getisFollowingProcess = (state) => state.UserPage.isFollowingProcess


export const getUsers   = createSelector( getUsersX , users => users.filter(u=>u.name.length >6) )

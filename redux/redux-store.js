
import {combineReducers, createStore, applyMiddleware } from "redux";
import ProfileReducer from "./Profile-reducer";
import DialogReducer from "./Dialog-reducer";
import UserReducer  from "./User-reducer";
import AuthReducer from "./Auth-reducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form"
const Reducers = combineReducers(
    {
        AuthPage: AuthReducer,
        ProfilePage : ProfileReducer,
        DialogPage: DialogReducer,
        UserPage: UserReducer,
        form : formReducer,
    }
)
const  proverka = ()=>{
        debugger
        return thunk
}
let store = createStore(Reducers , applyMiddleware(proverka()));

export default store;
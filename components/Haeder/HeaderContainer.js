import React from "react";
import Header from './Header';
import {connect} from "react-redux";
import {setApi,DeleteLogin} from "../../redux/Auth-reducer";

const HeaderContainerOn = (props) => {
        return <Header {...props}/>
    }

let sendState = (state) => {
    return{
        UserData : state.AuthPage,
    }
}
let HeaderContainer = connect(sendState, { DeleteLogin})(HeaderContainerOn)
export default HeaderContainer;
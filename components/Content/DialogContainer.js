import React from "react";
import {connect} from "react-redux";
import DialogItem from "./Dialog/DialogItem/DialogItem";
import { sendMessage } from "../../redux/Dialog-reducer";
import hocRedirect from "../../Redirect/Reedirect";

let withHocDialog = hocRedirect(DialogItem)
let SendState = (state) =>{
    return {
        DialogPage: state.DialogPage,
    }
}

const DialogContainer = connect( SendState, { sendMessage } )(withHocDialog)
export default DialogContainer;
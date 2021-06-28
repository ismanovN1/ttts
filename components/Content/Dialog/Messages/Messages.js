import React from "react";
import s from './Messages.module.css';
import {Field, reduxForm} from "redux-form";

const Messages = (props) => {

    let per = React.createRef();
    const OnClick = () =>{
        let text = per.current.value;
        props.state.sendMessage( text);

    };


    let messages = props.state.DialogPage.Messages.map(m => <div>{m.message}</div>)

    return (
        <div>
            <div>{messages}</div>
            <div><Asd/></div>
        </div>
    )
}

const Sss = (props) => {
    return <div> <Field component={'textarea'}></Field> <button >Send</button> </div>
}
const Asd = reduxForm({form : 'message'})(Sss)

export default Messages;
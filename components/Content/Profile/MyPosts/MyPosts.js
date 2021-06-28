import React from "react";
import s from './MyPosts.module.css';
import ap from './../beach.jpg'
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../../utils/validation/validation";
import {RenderInput, RenderTextarea} from "../../../../utils/validation/renderForm";
const max_lenth = maxLength(70)

const CommentForm = (props) => {
    return (
        <form onSubmit = { props.handleSubmit} >
            <Field icon="edit" max_length = "60" label="Comment" component={RenderTextarea} validate={ [max_lenth, required] } name={'addComments'} />
            <div>
                <button className="btn col s12 offset-l2 l8" type="submit" disabled={props.submitting}><i
                    className="material-icons">send</i></button>
            </div>
        </form>
    )
}
const CommentReduxForm = reduxForm({form : 'comment'})(CommentForm)

const MyPosts = (props) => {
    let send = (value) => {
        props.state.sendComment(value.addComments)

    }
    let Post = props.state.ProfilePage.Posts.map( m => <div>
            <div><img src={ap} style={{borderRadius:"15px",width:"30px"}} />{m.comment}</div>
            <div>Like: {m.likesCountes}</div>
        </div>
    );

    return (
        <div>
            <div>
                <CommentReduxForm  onSubmit={ send }/>
            </div>

            <div className="row">
                <div className="col s12 m5">
                    <div className="card-panel teal">
                        {Post}
                    </div>
                </div>
            </div>


        </div>
    )
}


export default MyPosts;
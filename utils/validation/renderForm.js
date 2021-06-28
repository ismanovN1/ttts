import React from "react";
import style from './Form.module.css'


export const RenderInput = ({input, icon, value , label, id , type, meta: {touched, error, warning}}) => {
    let xxx = touched && error
    return(
        <div className="row">
            <div className={`${style.FormsElement} input-field col s12 ${ xxx ? style.Error : undefined}`}>
                {/*<i className="material-icons prefix">{icon}</i>*/}
                <input   {...input} type={type} placeholder={label} className="validate"/>
                {/*<label for="icon_telephone"></label>*/}
                {touched && ((error && <span style={{color:"red"}}>{error}</span>) || (warning && <span>{warning}</span>))}

             </div>
        </div>


    )
}

export const RenderCheck = ({input, label,  }) => {
    return(

    <div className="switch">
        <label>
            {label}: No
            <input {...input} type="checkbox"/>
            <span className="lever"></span>
            Yes
        </label>
    </div>
    )
}
export const RenderCheckbox = ({input, label }) => {
    return(
        <p>
            <label>
                <input {...input} type="checkbox" />
                <span>{label}</span>
            </label>
        </p>
    )
}

export const RenderTextarea = ({input, icon, max_length, label, meta: {touched, error, warning}}) => {
    let xxx = touched && error
    return(
        // <div>
        //     <label>{label}</label>
        //     <div className={`${style.FormsElement} ${ xxx ? style.Error : undefined}`}>
        //         <textarea {...input} placeholder={label} />
        //         {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        //     </div>
        // </div>


        <form className="col s12 row">

                <div  className={`${style.FormsElement} input-field col s12 ${ xxx ? style.Error : undefined}`}>
                    <i className="material-icons prefix">{icon}</i>
                    <textarea data-length={max_length} id="textarea1" className="materialize-textarea" {...input} placeholder={label}/>
                    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
                </div>

        </form>




    )
}


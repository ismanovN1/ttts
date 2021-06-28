import React, {useState} from "react";
import  { Field,reduxForm} from "redux-form";
import {RenderInput} from "../../utils/validation/renderForm";
import {number, required} from "../../utils/validation/validation";
import  {Determinant} from "../../Determinant/Determinant";



const DeterminantComponent = (props) =>{
    let rrr  = React.createRef()
    let [state , setState] = useState(2)

    const  zzz = ()=>{
        setState(rrr.current.value)
    }

    let array = []
    for(let i = 0 ; i < state; i++ ){
        array.push([])
        for(let j = 0 ; j < state; j++ ){
            array[i].push( 'a' + (j+1).toString() + (i+1).toString())
        }
    }
    let ComponentArray = array.map( i => <div className="col offset-l1 s1"> {i.map(k => <Field className="col s1" style={{ background:"blue", border:"solid"}}
                                                                                      component={RenderInput} validate={[required, number]}
                                                                                      label={k} name={k} type="text"/>)}</div>)

    return (
        <><form ><input ref={rrr} className="header" type="number"/><button onClick={zzz}>ok</button></form>
            <form onSubmit={props.handleSubmit} style={{marginTop: "75px" }}  >
                <div style={{textAlign: "center", borderRight: "solid", borderLeft: "solid"}} className="navbar">{ComponentArray}</div>
                <br/>

                <button style={{marginTop: "100px"}} className=" content col s12  btn" type="submit">ok</button>
            </form>
            </>)
}

const DeterrminantForm = reduxForm({form:"Math"})(DeterminantComponent)

const Deterrminant = (props) => {
    let [result , setResult] = useState(null)
    const xxx = (value) => {
        console.log(value)
        let [array, len , val , s ] = [Object.keys(value).sort((a,b)=>{if(a<b){return -1}return 1}) , Object.keys(value).length , [] , 0 ]

        for (let i = 0 ; i < Math.sqrt(len) ; i++) {
            val.push([])
            for (let j = 0; j < Math.sqrt(len); j++) {
                val[i].push( value[array[ s ]] )
                s++
            }
        }
        setResult(Determinant(val))
    }

    return <>

        <DeterrminantForm onSubmit={xxx} />
        <div style={{fontSize:"50px"}}>{result && <><b style={{color:"red"}}>Result:</b>{result}</>}</div>
        </>
}


export default Deterrminant
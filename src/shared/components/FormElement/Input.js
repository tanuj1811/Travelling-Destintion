import React, { useReducer, useEffect } from "react";

import { validate } from  '../../util/validator'
import './Input.css'

const InputReducer = (state,action) => {
    if(action.type === 'CHANGE'){
        return {
            ...state,
            value : action.val,
            isValid : validate(action.val , action.validators)
        }
    }else if(action.type === 'TOUCH'){
        return {
            ...state,
            isTouch : true,
        }
    }
    return state;

    
}
const Input = props => {

    const [inputState ,dispatch] = useReducer(InputReducer, {
        value :props.value || '',
        isValid : props.valid || false,
        isTouch : false
    });
    const {id , onInput} = props;
    const { value, isValid} = inputState;
    useEffect(() =>{
        onInput(id, value, isValid)
    }, [id, value, isValid, onInput])

    const InputHandler = event => {
        dispatch({type: 'CHANGE' ,
            val : event.target.value,
            validators:props.validators
        })
    }
    const touchHandler = () => {
        dispatch({
            type: 'TOUCH',
        })
    }
    const element = props.element === 'input' ? 
    (<input id={props.id} type={props.type} placeholder={props.placeholder} onChange={InputHandler} onBlur={touchHandler}  value= {inputState.value}/> 
        ): ( 
    <textarea id={props.id} placeholder={props.placeholder} rows={props.row || 3} onChange={InputHandler} onBlur={touchHandler} value={inputState.value}/> )
    return(
        <div className={`form-control ${!inputState.isValid && inputState.isTouch && 'form-control--invalid'}`}>
            <label htmlFor={props.id} >{props.label}</label>
            {element}
            {!inputState.isValid && inputState.isTouch && <p>{props.errText}</p>}
        </div>
    )
}

export default Input;
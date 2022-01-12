import React,{ useState, useContext } from 'react'
import { useForm } from '../../shared/hooks/form-hook'

import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElement/Input'
import Button from '../../shared/components/UIElements/Button'
import { AuthContext } from '../../shared/context/auth-context';
import './auth.css';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validator';

const Authentication = () => {
    const auth = useContext(AuthContext);
    const [isLogin,setIsLogin] = useState(true);
    const [formState,InputHandler,setFormData] = useForm({
        email:{
            value:'',
            isValid: false
        },
        password:{
            value:'',
            isValid: false
        }
    },false)

    const loginSubmitHandler = event => {
        event.preventDefault();
        auth.login();
        console.log('Checking...')
    }
    const switchModeHandler = () => {
        if(isLogin){
            setFormData(
                {
                    ...formState.inputs,
                    name: ''
                },false)
        }else{
            setFormData(
                {
                    ...formState.inputs,
                    name: undefined,
                },formState.inputs.email.isValid && formState.inputs.password.isValid) 
        }
        setIsLogin(prevMode => !prevMode);

    }

    return (
        <Card className = 'authentication'>
            <h2>Login Required</h2>
            <hr />
            <form onSubmit={loginSubmitHandler}> 
                {!isLogin && 
                    <Input 
                    element='input' 
                    id='name'
                    type='text'
                    label='Name'
                    validators={[VALIDATOR_REQUIRE(),VALIDATOR_MINLENGTH(3)]}
                    errText = 'Invalid Name !! Plz Enter valid one.' 
                    onInput = {InputHandler} 
                    placeholder='Plz note ur username is based on ur provided name.'
                    />
                }
                <Input 
                    element='input' 
                    id='email'
                    type='email'
                    label='E-Mail'
                    validators={[VALIDATOR_EMAIL()]}
                    errText = 'Invalid Email !! Plz Enter the valid email address' 
                    onInput = {InputHandler} />

                <Input 
                    element='input' 
                    id='password'
                    type='password'
                    label='PASSWORD'
                    validators={[VALIDATOR_MINLENGTH(8)]}
                    errText = 'Invalid password !! Password must have 8 character' 
                    onInput = {InputHandler} />

                <Button type='submit' disabled={!formState.isValid}>
                {isLogin ?  'Log-in' :' Sign-up '}
                </Button>
            </form>
            <br />
            <br/>
            <Button inverse onClick={switchModeHandler}>{isLogin ?  'Dont have Account' :' Login '}
            </Button>
        </Card>
    )
};

export default Authentication;

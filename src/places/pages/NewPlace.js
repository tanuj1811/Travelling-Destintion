import React from 'react';
import { useForm } from '../../shared/hooks/form-hook';

import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validator';
import Input from '../../shared/components/FormElement/Input';
import Button from '../../shared/components/UIElements/Button';

import './NewPlace.css'


const NewPlace = () => {
    const [formState,inputHandler] = useForm(
        {
            title: {
                value:'',
                isValid:false
            },
            description: {
                value:'',
                isValid:false
            },
            address: {
                value:'',
                isValid:false
            }
        }, false
    );
    
    
    const formHandler = event => {
        event.preventDefault();
        console.log(formState.inputs)
    }
    return (
        <form className='place-form' onSubmit={formHandler}>
            <Input 
                id = 'title'
                element='input' 
                type='text' 
                label='Title' 
                placeholder='Enter Title of Place' 
                errText='Ivnalid Entered Text' 
                validators= {[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
            />
            <Input 
                id = 'description'
                element='textarea' 
                label='Description'
                placeholder='Description must atleast contains 20 characters' 
                errText='Ivnalid Entered Text' 
                validators= {[VALIDATOR_MINLENGTH(20)]}
                onInput={inputHandler}
            />
            <Input 
                id = 'address'
                element='input' 
                type='text' 
                label='ADDRESS OF Place' 
                placeholder='Enter Correct Address of Place' 
                errText='Ivnalid Entered Address' 
                validators= {[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
            />
            <Button type='submit' disabled={!formState.isValid}  inverse>ADD PLACE</Button>
        </form>
    );
}

export default NewPlace;
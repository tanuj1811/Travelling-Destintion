import React,{ useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { useForm } from "../../shared/hooks/form-hook";

import Card from "../../shared/components/UIElements/Card";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validator';
import Input from '../../shared/components/FormElement/Input';
import Button from "../../shared/components/UIElements/Button";

import './NewPlace.css';

const  DUMMY_PLACES = [
    {
       id : 'pid-1',
       title:'Empire State Building',
       description:'One of the most famous sky scrappers in the world',
       imageUrl :'https://w0.peakpx.com/wallpaper/248/316/HD-wallpaper-satoru-gojo-blanco-boy-gojo-satoru-gratis-jujutsu-kaisen-kaisen-kaisen-jujutsu-personalizado.jpg',
       address:'20 Word Street ,NY 10001',
       location:{
           lat : 40.4784405,
           lng: -73.9878584
       } ,
       creator : 'uid1'
    },
    {
        id : 'pid-2',
        title:'Empire State Building',
        description:'One of the most famous sky scrappers in the world',
        imageUrl :'https://w0.peakpx.com/wallpaper/248/316/HD-wallpaper-satoru-gojo-blanco-boy-gojo-satoru-gratis-jujutsu-kaisen-kaisen-kaisen-jujutsu-personalizado.jpg',
        address:'20 Word Street ,NY 10001',
        location:{
            lat : 40.4784405,
            lng: -73.9878584
        } ,
        creator : 'uid2'
     }
]

const UpdatePlace = () => {
    
    const { placeId } = useParams();
    const [isLoading,setLoading] = useState(true);
    
    const [formState,inputHandler, setFormData] = useForm(
        {
            title: {
                value:'',
                isValid:false
            },
            description: {
                value: '',
                isValid:false
            },
        }, false);

    const resPlace = DUMMY_PLACES.find(p=> p.id === placeId);

    useEffect(()=> {
        if(resPlace){
            setFormData( {
                title: {
                    value: resPlace.title,
                    isValid:true
                },
                description: {
                    value: resPlace.description,
                    isValid:true
                },
            }, true); 
        }
        setLoading(false)
    },[setFormData,resPlace]);
    


    if(!resPlace){
        return (
            <Card style={{textAlign:'center',color:'red'}} >
                <h1>No Place with given ID ...‱</h1>
                <button type='button'>Update Places</button>
            </Card>
        )
    }

    const submitUpdateHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
    }

    if(isLoading){
        return (
            <Card style={{textAlign:'center',color:'orange'}} >
                <h1>Loading ...‱</h1>
                <button type='button'>Update Places</button>
            </Card>
        )
    }
        
    return (
        <form className='place-form' onSubmit={submitUpdateHandler}>
             <Input 
                id = 'title'
                element='input' 
                type='text' 
                label='Title' 
                placeholder='Enter Title of Place' 
                errText='Ivnalid Entered Text' 
                validators= {[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
                value={formState.inputs.title.value}
                valid={formState.inputs.title.isValid}
            />
            <Input 
                id = 'description'
                element='textarea' 
                label='Description'
                placeholder='Description must atleast contains 20 characters' 
                errText='Ivnalid Entered Text' 
                validators= {[VALIDATOR_MINLENGTH(20)]}
                onInput={inputHandler}
                value={formState.inputs.description.value}
                valid={formState.inputs.description.isValid}
            />
            <Button type='submit' disabled={!formState.isValid}  inverse>UPDATE PLACE</Button>
        </form>
    )
}

export default UpdatePlace;
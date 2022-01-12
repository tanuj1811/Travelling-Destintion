import React from 'react';

import './PlaceList.css';

import PlaceListItem from './PlaceListItem';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/UIElements/Button';


const PlaceList = props => {

    if(props.items.length === 0){
        return (
            <Card style={{textAlign:'center',color:'red'}} >
                <h1>No Places Found...‱</h1>
                <Button to='/places/new'>Add Places</Button>
            </Card>
        )
    }
    return (
        <ul className='place-list'>
            {props.items.map(place => {
                return(
                    <PlaceListItem 
                        key={place.id}
                        id={place.id}
                        image={place.imageUrl}
                        title={place.title}
                        description={place.description}
                        address={place.address}
                        creatorId={place.creator}
                        coordinate={props.location}
                    />
                )
            })}


        </ul>
    );
}

export default PlaceList;


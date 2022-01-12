import React from 'react';
import { useParams } from  'react-router-dom'

import PlaceList from '../components/PlacaList';

const PLACES = [
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
const UserPlaces = () => {
    const currentUserId = useParams().uid;
    const loadedPlaces = PLACES.filter(place => place.creator === currentUserId)
    return (
        <PlaceList items={loadedPlaces} />
    );
}

export default UserPlaces;
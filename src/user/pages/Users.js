import React from 'react';

import UserList from '../components/UserList'

const USERS = [
    {
        id : 'uid1',
        name : 'Tanuj Sharma',
        image : 'https://w0.peakpx.com/wallpaper/248/316/HD-wallpaper-satoru-gojo-blanco-boy-gojo-satoru-gratis-jujutsu-kaisen-kaisen-kaisen-jujutsu-personalizado.jpg' ,
        placeCount : 3,
    }
]
const Users = () => {
    return (
        <div>
            <UserList items = {USERS}/>
        </div>
    )
}

export default Users;
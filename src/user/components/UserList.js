import React from 'react';

import UserListItem from './UserListItem'

import './UserList.css';

const UserList = props =>{
    if(props.items.length === 0){
        return (
            <div style={{textAlign:'center',color:'red'}}>
                <h1>!! No Users Found</h1>
            </div>
        )
    }
    return (
        <ul className='users-list'>
            {props.items.map(user => {
                return (
                    <UserListItem 
                        key = {user.id}
                        id = {user.id}
                        image = {user.image}
                        name = {user.name}
                        placeCount = {user.placeCount}
                    />
                );
            })}
        </ul>
    )
}

export default UserList;
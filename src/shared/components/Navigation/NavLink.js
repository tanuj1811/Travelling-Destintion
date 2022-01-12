import React,{ useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';

const NavLinks = props => {
    const auth = useContext(AuthContext);
    return (
        <ul className='nav-links'>
            <li>
                <NavLink to='/' exact='true'>All Users</NavLink>
            </li>
            {auth.isLoggedIn && 
                <li>
                    <NavLink to='/uid1/places' exact='true'>Your Places</NavLink>
                </li>
            }
            {auth.isLoggedIn && 
                <li>
                    <NavLink to='/place/new' exact='true'>Add Places</NavLink>
                </li>
            }
            
            {!auth.isLoggedIn &&<li>
                <NavLink to='/auth' exact='true'>Login/Sign-Up</NavLink>
            </li>}
            {auth.isLoggedIn &&<li>
                <button onClick={auth.logout}>Log-out</button>
            </li>}

        </ul>
    )
}

export default NavLinks;
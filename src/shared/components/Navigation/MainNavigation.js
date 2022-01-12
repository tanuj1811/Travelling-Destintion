import React, { useState } from 'react';

import MainHeader from './MainHeader';
import NavLinks from './NavLink';
import SideDrawer  from './SideDrawer';
import Backdrop from '../UIElements/BackDrop';
import './MainNavigation.css';


const MainNavigation = props => {
    const [sidedrawer,setSideDrawerState] = useState(false);
    
    const showSideDrawer = () => {
        setSideDrawerState(true);
    }
    const disableSideDrawer = () => {
        setSideDrawerState(false);
    }
    return (
        <React.Fragment>
        {sidedrawer && <Backdrop onClick={disableSideDrawer}/>}
        <SideDrawer show = {sidedrawer}>
            <nav className = 'main-navigation__drawer-nav'>
                <NavLinks />
            </nav>
        </SideDrawer>
        
        <MainHeader > 
            <button className='main-navigation__menu-btn' onClick = {showSideDrawer}>
                <span />
                <span />
                <span />
            </button>
            <h1 className = "main-navigation__title">Your Place</h1>

            <nav className = 'main-navigation__header-nav'>
                <NavLinks />
            </nav>

        </MainHeader>
        </React.Fragment>
    )
}

export default MainNavigation;
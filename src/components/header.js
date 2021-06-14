import React from 'react';
import Logo from '../assets/logo.png';
import NavBar from './navBar';

function Header () {

    return(
        <div className='header-container'>
            <div className="header__logo"> 
                <img src={ Logo } className="logo" alt='logo' width="80px"/>
            </div>
            <NavBar />
        </div>
    )
}

export default Header;
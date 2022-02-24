import React from 'react';
import logo from '../../assets/logo_atizapan.png';
import './Header.css';

export const Header = () => {

    return (
        <div className="headerContainer">
            <img className="animate__animated animate__bounceInDown" src={logo} alt="logo" />
        </div>
    )
}
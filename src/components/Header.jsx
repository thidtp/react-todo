import React from 'react';
import logo from '../assets/images/logomark.png'
import  '../styles/Header.css'
import { Icon } from "@iconify/react";

const Header = () => {
    return (
        <header className="web-app-nav-bar">
            <div className='app-container'>
                <Icon icon="ic:outline-menu" width="32" height="32"  style={{color: "#000"}} />
                <img src={logo} alt="logo" srcset="" />
                <p>DoIt</p>
            </div>
            <nav className='navbar'>
                <div className='navbar-search'>
                    <Icon icon="iconoir:search" width="24" height="24"  style={{color: "#000"}} />
                </div>
                <div className='navbar-grid'>
                    <Icon icon="mynaui:grid" width="24" height="24"  style={{color: "#000"}} />
                </div>
                <div className='navbar-mode'>
                    <Icon icon="line-md:moon" width="24" height="24"  style={{color: "#000"}} />
                </div>
            </nav>
        </header>
    )
}

export default Header;
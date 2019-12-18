import React from 'react';
import './Header.css'
import {NavLink} from "react-router-dom";
const Header = () => {
    return (
        <header className='header'>
            <div className="header-inner container">
                <h2>My Blog</h2>
                <nav className='main-nav'>
                    <ul>
                        <li><NavLink to='/'>Home</NavLink>|</li>
                        <li><NavLink to='/Add'>Add</NavLink>|</li>
                        <li><NavLink to='/About'>About</NavLink>|</li>
                        <li><NavLink to='/Contacts'>Contacts</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
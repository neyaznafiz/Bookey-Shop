import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <nav className='nav'>
            <h3>BOOKEY SHOP</h3>
        <div className=''>
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/shopnow">Shop Now</a>
        </div>
        </nav>
    );
};

export default Header;
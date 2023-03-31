import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
             <nav className='header'>
            <h1>Sams Cafe</h1>

            <div>
            <a href="ssubscribe">Subscribe</a>
            <a href="about">About</a>
            <a href="blog">Blog</a>
            <a href="login">Login</a> 
            </div>
           
        </nav>
        </div>
    );
};

export default Header;
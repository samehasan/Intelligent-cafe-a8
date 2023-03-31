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
            <img src="https://famouswritingroutines.com/wp-content/uploads/2022/06/daily-word-counts-of-famous-authors-1140x761.jpg" alt="" />
        </nav>
        </div>
    );
};

export default Header;
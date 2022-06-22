import React from 'react';
import './Header.css'
import img from '../../assets/CompositeLayer.png'

const Header = () => {
    return (
        <header>
            <div className='header'>
                <div className='header-logo'>
                    <img src={img} alt="logo"/>
                    <h2>Agency</h2>
                </div>
                <div className='header-menu'>
                    <p>About</p>
                    <p>Services</p>
                    <p>Pricing</p>
                    <p>Blog</p>
                </div>
                <button className='contact-button'>Contact</button>
            </div>
            <div className='header-title'>
                <div>
                    <h1>Portfolio</h1>
                    <p>Agency provides a full service range including technical skills, design, business understanding.</p>
                </div>
            </div>
      </header>
    );
}

export default Header;

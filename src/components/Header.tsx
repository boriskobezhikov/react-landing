import React from 'react';
import './Header.css'

function Header() {
  return (
        <div className='container d-flex justify-content-evenly align-items-center mt-4 flex-wrap'>
            <a href='#' className='navbar-brand flex-grow order-first'>
                <img src='./logo.svg' alt='logo'/>
                metio
            </a>
            <div className='d-flex flex-wrap'>
            <a className='nav-link' href='#'>
                Features
            </a>
            <a className='nav-link' href='#'>
                Prices
            </a>
            <a className='nav-link' href='#'>
                About
            </a>
            <a className='nav-link' href='#'>
                Contacts
            </a>
            <a className='nav-link d-flex flex-wrap' href='#'>
                <img src='./get_started_button.svg'></img>
            </a>
            </div>
        </div>
  );
}

export default Header;

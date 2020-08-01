import React from 'react';
import logo from './assests/logo.png'

function Header() {
    return(
        <header className="header-overlay">
                <nav>
                    <div className="navbar-header" id="primary_menu">
                         <div className="brand">
                            <a  className='logo' href="event"><img src={logo} alt={logo} className="logo"/></a>
                         </div> 
                            <ul className="main-nav">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#features">Features</a></li>
                                <li><a href="#gallery">Gallery</a></li>
                                <li><a href="#pricing">Pricing</a></li>
                                <li><a href="#FAQ">FAQ</a></li>
                                <li><a href="#blog">Blog</a></li>
                                <li><a href="#contact">Contacts</a></li>
                            </ul>
                    <a className="btn btn-full button-float" href="www.google.com">SIGN UP</a> 
                    </div>
                </nav>
               <div className="main-headbody">
                    <img src="https://colorlib.com/preview/theme/appy/images/header-mobile.png" alt="phone" />
                    <div className="ps">
                    <h1>Start your amazing stuff through appy.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor <br />
             incididunt ut labore et laborused sed do eiusmod tempor incididunt ut labore et <br />
             laborused.</p>
                    <a classsname="btn btn-full" href="https://colorlib.com/preview/theme/appy/#">Download App</a>
                    </div>
            </div>
            </header>
        
    )
}


export default Header
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import logo from '../assets/mainlogo.png';
import './Header.css';
import AboutUs from './Aboutus';
import { FaBars , FaTimes } from "react-icons/fa";
import { useRef } from "react";

function Header() {

  const navRef = useRef();
  const location = useLocation(); 

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const closeNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const contactfunc = () => {
    if (location.pathname !== "/") {
      window.location.href = "/"; // Navigate to the home page
    } 
  };

  return (
    <div>
      <header>
        <h3>
        <a href="/" ><img className='logo' src={logo} alt="Logo" onClick={scrollToTop} /></a>
        </h3>

        <div className='contact_div' >
            <button className="contact_button" onClick={contactfunc}>Contact Us</button>
          </div>

        <nav ref={navRef}>
          
          <div className="navitems">
            <Link to="/" onClick={closeNavbar}> {/* Add onClick to close Navbar */}
              <button onClick={scrollToTop}>
                Home
              </button>
            </Link>
          </div>


          <div className="navitems">
            <Link to="/aboutus" onClick={closeNavbar}> {/* Add onClick to close Navbar */}
              <button onClick={scrollToTop}>Services</button>
            </Link>
          </div>


          <div className="navitems">
            <Link to="/socials" smooth={true} duration={500} onClick={closeNavbar}> {/* Add onClick to close Navbar */}
              <button onClick={scrollToTop}>Socials</button>
            </Link>
          </div>


          <button
            className="nav-btn nav-close-btn"
            onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>


        <button
          className="nav-btn"
          onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default Header;

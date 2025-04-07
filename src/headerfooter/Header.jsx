import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import logo from '../assets/mainlogo.png';
import './Header.css';
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

 

  return (
    <div>
      <header>
        <h3>
        <a href="/" ><img className='logo' src={logo} alt="Logo" onClick={scrollToTop} /></a>
        </h3>

        <nav ref={navRef}>
          
          <div className="navitems">
            <Link to="/services" smooth={true} duration={500} onClick={closeNavbar}> {/* Add onClick to close Navbar */}
              <button onClick={scrollToTop}>
                Services
              </button>
            </Link>
          </div>


          <div className="navitems">
            <Link to="/pricing" smooth={true} duration={500} onClick={closeNavbar}> {/* Add onClick to close Navbar */}
              <button onClick={scrollToTop}>Pricing</button>
            </Link>
          </div>


          <div className="navitems">
            <Link to="/aboutus" smooth={true} duration={500} onClick={closeNavbar}> {/* Add onClick to close Navbar */}
              <button onClick={scrollToTop}>About us</button>
            </Link>
          </div>


          <div className="navitems">
            <Link to="/socials" smooth={true} duration={500} onClick={closeNavbar}> {/* Add onClick to close Navbar */}
              <button onClick={scrollToTop}>Socials</button>
            </Link>
          </div>

          <div className='contact_container'>
          <div className="navitems">
            <Link to="/contactus" smooth={true} duration={500} onClick={closeNavbar}> {/* Add onClick to close Navbar */}
              <button  className="contact_button" onClick={scrollToTop}>
                Book a Free Consultation  👀
              </button>
            </Link>
          </div>
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

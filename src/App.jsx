import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Mainpage from './Mainpage/Mainpage';
import Header from './headerfooter/Header';
import Footer from './headerfooter/Footer';
import Servicepage from './Servicepage/Services';
import Socialpage from './Socialpage/Socialpage';
import AboutUs from './Aboutuspage/Aboutus';
import Contact from './Contactpage/Contact';




function App() {


  return (
    <>
      <div className='container'>
      <Header/>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/services" element={<Servicepage />} />
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path="/socials" element={<Socialpage />}/>
        <Route path="/contactus" element={<Contact />}/>
      </Routes>
      <Footer />
      </div>
    </>
  );
}

export default App;

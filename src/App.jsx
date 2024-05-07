import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Mainpage from './Mainpage/Mainpage';
import Header from './headerfooter/Header';
import Footer from './headerfooter/Footer';
import Servicepage from './Service/Services';
import Socialpage from './Socialpage/Socialpage';




function App() {


  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/services" element={<Servicepage />} />
        <Route path="/socials" element={<Socialpage />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

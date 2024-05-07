import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Mainpage from './Mainpage/Mainpage';
import Header from './headerfooter/Header';
import Footer from './headerfooter/Footer';
import Aboutuspage from './Aboutuspage/AboutusPage';
import CyberSercurity from './Services/CyberSecurity'
import ManagedServices from './Services/ManagedServices'
import CloudSolutions from './Services/CloudSolutions'




function App() {


  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/aboutus" element={<Aboutuspage />} /> {/* Define route for AboutUs */}
        <Route path="/cyber-security" element={<CyberSercurity />} /> {/* Define route for AboutUs */}
        <Route path="/managed-services" element={<ManagedServices />} /> {/* Define route for AboutUs */}
        <Route path="/cloud-solutions" element={<CloudSolutions />} /> {/* Define route for AboutUs */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;

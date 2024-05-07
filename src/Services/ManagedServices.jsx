import React from 'react';
import './ServicesPage.css'; // Importing the CSS file
import banner from '../assets/ManagedServices.jpeg';


const ManagedServices = () => {
  return (
    <div className="services">
      <h2>Elevate Your Business with Our Expert Managed Services</h2>
      <div className="serviceImage">
        <img src={banner} alt="Managed Services" />
      </div>
      <p>Navigate the complexities of technology with ease as we bring you a range of managed services meticulously designed to fuel your business's growth. Our expert team is dedicated to turning your IT challenges into triumphs, allowing you to concentrate on expanding your enterprise.</p>

      <h2>Discover Our Suite of Managed Services</h2>

      <div className="service">
        <h4>BAU Ticket Handling</h4>
        <p>Our BAU Ticket Handling service promises operational fluency for your business. With rapid and accurate resolution of everyday IT concerns, we ensure that technology interruptions don't disrupt your workflow. Entrust your routine IT tasks to us and watch your efficiency soar.</p>
      </div>

      <div className="service">
        <h4>OS Patching & Backup Services</h4>
        <p>Security and data integrity form the cornerstone of your IT infrastructure. With our OS Patching & Backup Services, rest assured that your systems are not only current with the latest defenses against cyber threats but also backed by robust backup protocols. This dual service ensures continuity and confidence, mitigating risks while safeguarding your precious data.</p>
      </div>

      <div className="service">
        <h4>Website Maintenance & Optimization</h4>
        <p>A vibrant, high-performing website is the face of your digital presence. Our Website Maintenance & Optimization service ensures your online portal operates at its peak, engages users effectively, and secures their data. We take care of the technicalities so you can enjoy a website that captivates and converts.</p>
      </div>

      <div className="service">
        <h4>Custom Software & Integration</h4>
        <p>Your business is unique, and sometimes off-the-shelf solutions just wont cut it. Our Custom Software & Integration service is the answer, providing bespoke solutions that fit your business like a glove. We streamline your operations with tailor-made software, driving efficiency and innovation.</p>
      </div>

      <div className="service">
        <h4>IT Consulting & Strategy</h4>
        <p>Step into the future of IT with a clear vision. Our IT Consulting & Strategy service equips you with the insights and frameworks needed to turn technology into a strategic asset. From thorough planning to agile implementation, we guide your IT journey to ensure that your technological investments deliver substantial business value.</p>
      </div>

      <p>Transform your operations, secure your business, and lead your industry with IT that propels you forward. Reach out to us and start your journey towards technological excellence today.</p>

      
    </div>
  );
}

export default ManagedServices;

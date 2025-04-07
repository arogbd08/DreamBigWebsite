import React from 'react';
import photoImage from '../assets/photo.png';
import socialImage from '../assets/Social.png';
import editorImage from '../assets/video-editor.png';

import './Services.css';

// Function to create a Service Item
function ServiceItem({ imageSrc, altText, title, items, pagelink }) {
  return (
    
    
    <div className='Service-Item'>
        <img className='Service-Icon' src={imageSrc} alt={altText} />
        <h2>{title}</h2>
        
          {items.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
    <a href={pagelink} >
      <button  className='Service-button'>
        Learn More
      </button>
    </a>  
    
    </div>
  );
}

// Your component definition
function Servicepage() {
  return (
    <div className='Page'>
      <div className='sText-Area'>
        <h2>Services</h2>
        <p style={{ fontSize: "40px" }}>A wide range of services are available. Select one of the options for details or more.</p>

        {/* Cyber Security */}
        <ServiceItem
          imageSrc={photoImage}
          altText="photography&videography"
          title="Photography & Videography"
          items={['Risk Identification & Assessment', 'Supply Chain Risk Management' ,'Vulnerability Assessment','Security Posture Assessment','Cybersecurity Consultation Services']}
          pagelink="/photo-graphy"
        />

        {/* Managed Services */}
        <ServiceItem
          imageSrc={socialImage}
          altText="Managing Social Accounts"
          title="Managing Social Accounts"
          items={['Bau Ticket Handling', 'OS Patching & Backup Services','Website Maintenance & Optimization','Custom Software & Integration','IT Consulting & Strategy']}
          pagelink="/managed-services"
        />

        {/* Cloud Solutions */}
        <ServiceItem
          imageSrc={editorImage}
          altText="Editing & Events"
          title="Editing & Events"
          items={['Dynamics 365','Power Platfrom','Power BI','Microsoft 365','Microsoft Copilot','SharePoint']}
          pagelink="/cloud-solutions"
        />

      </div>
    </div>
  );
}

export default Servicepage;

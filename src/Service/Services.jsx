import React from 'react';
import swiftservices from '../assets/image 2.png';
import cyberSecurityImage from '../assets/cybersecurityicon.png';
import managedServicesImage from '../assets/mslogo.png';
import cloudSolutionsImage from '../assets/cloudlogo.png';

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
        <h1>Services</h1>
        <h2>A wide range of services are available. Select one of the options for details or more.</h2>

        {/* Cyber Security */}
        <ServiceItem
          imageSrc={cyberSecurityImage}
          altText="Cyber Security"
          title="Cyber Security"
          items={['Risk Identification & Assessment', 'Supply Chain Risk Management' ,'Vulnerability Assessment','Security Posture Assessment','Cybersecurity Consultation Services']}
          pagelink="/cyber-security"
        />

        {/* Managed Services */}
        <ServiceItem
          imageSrc={managedServicesImage}
          altText="Managed Services"
          title="Managed Services"
          items={['Bau Ticket Handling', 'OS Patching & Backup Services','Website Maintenance & Optimization','Custom Software & Integration','IT Consulting & Strategy']}
          pagelink="/managed-services"
        />

        {/* Cloud Solutions */}
        <ServiceItem
          imageSrc={cloudSolutionsImage}
          altText="Cloud Solutions"
          title="Cloud Solutions"
          items={['Dynamics 365','Power Platfrom','Power BI','Microsoft 365','Microsoft Copilot','SharePoint']}
          pagelink="/cloud-solutions"
        />

      </div>
    </div>
  );
}

export default Servicepage;

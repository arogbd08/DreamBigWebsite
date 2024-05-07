import React from 'react';
import './ServicesPage.css'; // Make sure to create this CSS file
import banner from '../assets/CyberSecurityBanner.jpeg'; // Update with the correct path to your image

const CyberSecurity = () => {
    return (
        <div className="services">
          <h2>Protect Your Digital Frontier with Our Cybersecurity Services</h2>
          <div className="serviceImage">
            <img src={banner} alt="Cybersecurity Services" />
          </div>
          <p>In an age where digital threats loom larger than ever, safeguarding your business's online assets is not just about defense—it's about smart, proactive strategy. Our comprehensive cybersecurity services are engineered to fortify your systems, shield your data, and secure your peace of mind.</p>
        
          <div className="service">
            <h4>Risk Management - Risk Identification & Assessment</h4>
            <p>Every decision counts in the realm of cyber wellness. Our Risk Identification & Assessment service pinpoints potential threats to your IT environment, quantifies your risk exposure, and prioritizes your response, ensuring you stay several moves ahead of the threats.</p>
          </div>

          <div className="service">
            <h4>Risk Management - Supply Chain Risk Management</h4>
            <p>Your network is only as strong as its weakest link. We extend our protective reach throughout your supply chain, identifying and mitigating risks posed by third-party vendors and partners. This service is integral to maintaining a secure and resilient operational chain.</p>
          </div>
          <div className="service">
            <h4>Defensive Security - Vulnerability Assessment</h4>
            <p>Invisibility is not a superpower when it comes to network and web application threats. Our Vulnerability Assessment service employs cutting-edge scanning techniques to uncover hidden weaknesses, arming you with the knowledge to seal breaches before they can be exploited.</p>
          </div>
          <div className="service">
            <h4>Defensive Security - Security Posture Assessment</h4>
            <p>How does your security stack up? Our Security Posture Assessment provides a comprehensive review of your cyber defenses, comparing them against industry standards and best practices. We deliver a clear roadmap for strengthening your security measures and response readiness.</p>
          </div>
          <div className="service">
            <h4>Cybersecurity Consultation Services</h4>
            <p>Navigating the cybersecurity landscape requires seasoned guides. Our Cybersecurity Consultation Services connect you with industry experts who bring clarity to complexity. Whether it's policy development, compliance navigation, or incident response planning, our consultants are your allies in building a resilient security framework.</p>
          </div>
          <p>Embrace a safer future with our expert-led cybersecurity services. Contact us to build a robust defense against the digital dangers of tomorrow.</p>
        </div>
      );
}

export default CyberSecurity;

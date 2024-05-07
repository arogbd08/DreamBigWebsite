import React from 'react';
import './ServicesPage.css'; // Make sure to create and import this CSS file
import cloudBanner from '../assets/CloudSolutions.jpeg'; // Update with the correct path to your image

const CloudSolutions = () => {
  return (
    <div className="services">
      <h2>Harness the Power of the Cloud with Our Tailored Solutions</h2>
      <div className="serviceImage">
        <img src={cloudBanner} alt="Cloud Solutions" />
      </div>
      <p>Welcome to the hub where cutting-edge technology meets unparalleled convenience. Our suite of cloud solutions transforms how businesses operate, innovate, and compete in the digital age. Powered by Microsoft's trusted platforms, our services provide you with the agility, intelligence, and comprehensive capabilities needed to excel in your industry.</p>

      <div className="service">
        <h4>Dynamics 365</h4>
        <p>Unlock the potential of your business with Dynamics 365. Our service doesn't just implement a solution; we customize Dynamics 365 to fit your business processes perfectly. Streamline your operations, enhance customer relations, and make data-driven decisions that propel you forward.</p>
      </div>

      <div className="service">
        <h4>Power Platform</h4>
        <p>Empower everyone in your organization to build solutions that accelerate business. With Power Platform, we deliver a suite of services that harness the robust capabilities of Power BI, PowerApps, and Power Automate. Transform the way you work with solutions that work for you.</p>
      </div>

      <div className="service">
        <h4>Power BI</h4>
        <p>Data is your most valuable asset—unlock its full potential with Power BI. We help you turn raw data into stunning visuals that foster insight and drive enterprise growth. Make informed decisions quickly with dashboards that bring key metrics to life.</p>
      </div>

      <div className="service">
        <h4>Microsoft 365</h4>
        <p>Enhance collaboration and productivity with Microsoft 365. Our comprehensive service ensures you leverage all facets of Microsoft 365—from Outlook to Teams to Office applications—integrated smoothly to foster a workspace without boundaries.</p>
      </div>

      <div className="service">
        <h4>Microsoft Copilot</h4>
        <p>Step into the future of work with Microsoft Copilot. We integrate this cutting-edge tool to revolutionize your documentation, analysis, and communication. Experience the power of AI as it assists you in creating content, data models, and much more, all in real-time.</p>
      </div>

      <div className="service">
        <h4>SharePoint</h4>
        <p>Collaborate like never before with SharePoint. Our service customizes and deploys SharePoint to create dynamic team sites for every project team, department, and division. Share and manage content, knowledge, and applications to empower teamwork, quickly find information, and seamlessly collaborate across the organization.</p>
      </div>

      <p>Embark on your cloud journey with us. Connect with our experts today and elevate your business into the cloud era with solutions that deliver results.</p>
    </div>
  );
}

export default CloudSolutions;

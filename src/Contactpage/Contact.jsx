import React, { useState } from 'react';
import './Contact.css'; // Import your CSS file
import facebookIcon from '../assets/facebook-icon.svg';
import twitterIcon from '../assets/twitter-icon.svg';
import linkedinIcon from '../assets/linkedin-icon.svg';
import instagramIcon from '../assets/instagram-icon.svg';


import ReCAPTCHA from 'react-google-recaptcha';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  

  const [isVerified, setIsVerified] = useState(false);

  const handleRecaptchaChange = (value) => {
    // value will be null if reCAPTCHA verification fails, otherwise, it will be a string
    setIsVerified(!!value);
  };



  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const response = await fetch('https://uuin5aash4.execute-api.us-east-1.amazonaws.com//send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      
      
      
      if (response.ok) {
        console.log('Form submitted successfully!');
        setIsSubmitted(true);
      } else {
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('Error during form submission:', error);
    }


 

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      message: '',
    });

  };

  return (
    <div className='Contact-Page'>
      <h2 className='title'>Contact Us</h2>
      <div className='Contact-body'>
        
        <form onSubmit={handleSubmit} className='Form'>
          <div className='name' style={{ 'paddingRight': '10%' }}>
            <label htmlFor="firstName">First Name*</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className='name'>
            <label htmlFor="lastName">Last Name*</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="phoneNumber">Phone Number*</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="message">Message*</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              required
            />
          </div>

          <div className="center-container">
          <div>
            <ReCAPTCHA
              sitekey="6Lein6opAAAAAMHpM9P5JrCUHP9RNGUzbFkKkqrJ"
              onChange={handleRecaptchaChange}
            />
          </div>

          <br/>


          {!isVerified ? (
              <></>
            ) : (
              <button className='tton' type="submit">Send an E-mail to us</button>
            )}


          
          <div className='button-thankyou'>
            {!isSubmitted ? (
              <></>
            ) : (
              <div className='thank-you-message'>
                <p>Thank you for submitting!</p>
              </div>
            )}
          </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;

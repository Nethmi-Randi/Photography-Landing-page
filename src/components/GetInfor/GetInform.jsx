import React, { useState } from 'react';
import '../../styles/GetInform.css'; 
import ContactForm from './ContactForm'; 

const GetInform = () => {
  const [showContactForm, setShowContactForm] = useState(false); 
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(''); 

  const validateEmail = (email) => {
    const validemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validemail .test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setShowContactForm(true); 
      setEmailError(''); 
    } else {
      setEmailError('Please enter a valid email address'); 
    }
  };

  const handleBack = () => {
    setShowContactForm(false); 
  };

  return (
    <div className="form-section">
      <h1 className="form-title">Get more info on discount prices</h1>
      <div className="form-container">
        <input
          type="email"
          placeholder="Enter Your Email Address"
          className={`email-input ${emailError ? 'input-error' : ''}`} 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          
        />
        <button className="submit-btn" onClick={handleSubmit}>Submit</button>
        {emailError && <p className="email-error">{emailError}</p>} 
      </div>
      <p className="form-disclaimer">
        * By clicking "<strong>Submit</strong>" button, you agree to our Terms and that you have read our  
        <strong> Data Use Policy.</strong>
      </p>
      
      {showContactForm && (
        <div className="modal-overlay">
          <ContactForm handleBack={handleBack} email={email} /> 
        </div>
      )}
    </div>
  );
};

export default GetInform;

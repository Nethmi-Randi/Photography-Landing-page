import React, { useState } from 'react';
import '../../styles/ContactForm.css';

const ContactForm = ({ handleBack, email }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateTexts = (text) => text.trim() !== ''; 

  const validatePhone = (phone) => /^0\d{9}$/.test(phone);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    let isValid = true;
    
    if (!validateTexts(name)) {
      setNameError('Enter a valid name');
      isValid = false;
    } else {
      setNameError(''); 
    }

    if (!validatePhone(phone)) {
      setPhoneError('Enter a valid Phone Number');
      isValid = false;
    } else {
      setPhoneError('');
    }

    if (!validateTexts(message)) {
      setMessageError('Enter a valid Message');
      isValid = false;
    } else {
      setMessageError(''); 
    }

    if (isValid) {
      try {
        const response = await fetch('http://localhost/myproject/Backend/SendMail.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email,name, phone, message }),
        });

        const result = await response.json();

        if (result.success) {
          setSuccessMessage('Your message has been sent successfully!');
          setName('');
          setPhone('');
          setMessage('');
        } else {
          setErrorMessage(result.error || 'An error occurred. Please try again.');
        }
      } catch (error) {
        setErrorMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="modal-content">
      <h2>CONTACT US</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <p className="error-message-name">{nameError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {phoneError && <p className="error-message-phone">{phoneError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {messageError && <p className="error-message-message">{messageError}</p>}
        </div>
        <button className="send-btn" type="submit">Send</button>
      </form>
      <button className="close-btn" onClick={handleBack}>Close</button>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default ContactForm;

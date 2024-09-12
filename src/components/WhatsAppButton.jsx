import React from 'react';
import '../styles/WhatsAppButton.css'; 
import whatsapp from '../assets/whatsapp.jpg';

const WhatsAppButton = () => {
  
  const handleClick = () => {
    const url = `https://wa.me/9476234657`;
    window.open(url, '_blank'); 
  };

  return (
    <div className="whatsapp-button" onClick={handleClick}>
      <img
        src={whatsapp}
        alt="WhatsApp"
        
      />
      <span className="whatsapp-text">Chat with Us</span>
    </div>
  );
};

export default WhatsAppButton;

import React from 'react';
import '../../styles/TestimonialCard.css'; 

const TestimonialCard = ({ image, name, platform, text }) => {
  return (
    <div className="testimonial-card">
      <img src={image} alt={name} className="testimonial-img" />
      <h3 className="name">{name}</h3>
      <p className="platform">{platform}</p>
      <hr />
      <p className="testimonial-text">{text}</p>
    </div>
  );
};

export default TestimonialCard;

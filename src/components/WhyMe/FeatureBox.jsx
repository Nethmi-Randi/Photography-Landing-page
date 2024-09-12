// FeatureBox.js
import React from 'react';
import '../../styles/FeatureBox.css'; 

const FeatureBox = ({ icon, title, description, variant }) => {
  return (
    <div className={`feature-box ${variant}`}>
      <img src={icon} alt={`${title} icon`} className="icon" />
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
};

export default FeatureBox;


import React from 'react';
import '../../styles/StatItem.css'; 

const StatItem = ({ stat, label }) => {
  return (
    <div className="stat-item">
      <h3>{stat}</h3>
      <p>{label}</p>
    </div>
  );
};

export default StatItem;

import React, { useState } from 'react';
import '../../styles/ProfilePortfolio.css'; 

const ProfilePortfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Wedding', 'Product', 'Food', 'Fashion'];

  return (
    <div className="portfolio-header">
      <h1 className="portfolio-title">PORTFOLIO</h1>
      <div className="portfolio-categories">
        {categories.map((category) => (
          <span
            key={category}
            className={`portfolio-item ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProfilePortfolio;




     




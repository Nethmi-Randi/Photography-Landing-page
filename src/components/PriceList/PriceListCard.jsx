import React from 'react';
import '../../styles/PriceListCard.css'; 

const PriceListCard = ({ title, price, duration, photos, retouching, finishing,onMouseEnter }) => {
    return (
      <div className="pricing-card" onMouseEnter={onMouseEnter}>
        <h2 className="title">{title}</h2>
        <p className="price">{price}</p>
        
        <div className="details">
          <div className="detail-item">
            <span>Duration</span>
            <span>{duration}</span>
          </div>
          <div className="detail-item">
            <span>Lots Of Photos</span>
            <span>{photos}</span>
          </div>
          <div className="detail-item">
            <span>Detailed Retouching</span>
            <span>{retouching}</span>
          </div>
          <div className="detail-item">
            <span>Finishing</span>
            <span>{finishing}</span>
          </div>
        </div>
        
        <button className="schedule-btn">Photo Session Schedule</button>
      </div>
    );
  };
  
  export default PriceListCard;
  

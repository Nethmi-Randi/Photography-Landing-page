import React, { useState } from 'react'; 

import PriceListCard from './PriceListCard';
import '../../styles/PriceList.css';

const PriceList = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleHover = (index) => {
        setActiveIndex(index);
  };
    return (
        <div className="priceList-section">
            
          <h1 className="section-title">PRICELIST</h1>
          <div className="price-cards">
            <PriceListCard 
              title="STANDARD" 
              price="400$" 
              duration="3 hours" 
              photos="60 - 80" 
              retouching="25 items" 
              finishing="10 days" 
              onMouseEnter={() => handleHover(0)}

            />
            <PriceListCard 
              title="PREMIUM" 
              price="550$" 
              duration="4 hours" 
              photos="85 - 90" 
              retouching="40 items" 
              finishing="7 days"
              onMouseEnter={() => handleHover(1)}
 
            />
            <PriceListCard 
              title="PRO" 
              price="600$" 
              duration="6 hours" 
              photos="unlimited" 
              retouching="unlimited" 
              finishing="3 days" 
              onMouseEnter={() => handleHover(2)}
            />
          </div>
          <div className="dot-navigation">
            <span className={`dot ${activeIndex === 0 ? 'active' : ''}`} />
            <span className={`dot ${activeIndex === 1 ? 'active' : ''}`} />
            <span className={`dot ${activeIndex === 2 ? 'active' : ''}`} />
      </div>

        </div>
      );
      
  };
  
  export default PriceList;
  
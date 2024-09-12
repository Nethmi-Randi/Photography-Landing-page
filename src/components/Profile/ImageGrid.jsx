import React from 'react';
import '../../styles/ImageGrid.css';
import 'normalize.css';

import profileImage1 from '../../assets/profile_image1.png';
import profileImage2 from '../../assets/profile_image2.png';
import profileImage3 from '../../assets/profile_image3.png';
import profileImage4 from '../../assets/profile_image4.png';
import profileImage5 from '../../assets/profile_image5.png';
import profileImage6 from '../../assets/profile_image6.png';
import profileImage7 from '../../assets/profile_image7.png';
import profileImage8 from '../../assets/profile_image8.png';
import profileImage9 from '../../assets/profile_image9.png';
import profileImage10 from '../../assets/profile_image10.png';
import profileImage11 from '../../assets/profile_image11.png';

import Arrow from '../../assets/horizontalArrow.png';


const ImageGrid = () => {
  const images = [
    profileImage1, profileImage2, profileImage3,
    profileImage4, profileImage5, profileImage6,
    profileImage7, profileImage8, profileImage9,
    profileImage10, profileImage11
  ];

  return (
    
    <div className="image-grid">
      
      {images.map((image, index) => (
        <div 
          key={index} 
          className={`image-container image-${index + 1}-container`} // Unique container class for each image
        >
          <img src={image} alt={`img-${index + 1}`} className={`image-${index + 1}`} /> {/* Unique image class */}
          
        </div>
        
      ))}
      <div>
      <button className="see-more-button">
        See More
        <img src={Arrow} alt="arrow" className="arrow-icon" />
      </button>
      </div>
    </div>
  );
};

export default ImageGrid;

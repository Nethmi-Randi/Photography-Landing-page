import React, { useState } from 'react';
import '../../styles/PhotoFrames.css';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';

const PhotoFrames = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0); 

const nextImage = () => {// right arrow click
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

const prevImage = () => { //left arrow click
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

const getClassName = (index) => {
    if (index === currentIndex) {
      return 'hovered-image'; 
    } else {
      return 'normal-image'; 
    }
  };

  return (
    <div className="photo-frames-container">
      <div className="photo-frames">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Frame ${index + 1}`}
            className={getClassName(index)}
          />
        ))}
      </div>

      
      <div className="arrows-container">
        <div className="arrow" onClick={prevImage}>
          <img src={leftArrow} alt="Previous" />
        </div>

        <div className="arrow" onClick={nextImage}>
          <img src={rightArrow} alt="Next" />
        </div>
      </div>
    </div>
  );
};

export default PhotoFrames;

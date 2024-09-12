import React from 'react';
import '../styles/Portfolio.css'; 
import portfolioImage from '../assets/paintBoy.png';
import twitterImage from '../assets/twitter.png';
import googleImage from '../assets/google.jfif'; 
import facebookImage from '../assets/facebook.jfif';
import linkdinImage from '../assets/linkdin.png';

const PhotographySection = () => {
    return (
        <div className="photography-section">
          <div className="content">

            <div className="left-side"> 
              <h1 className="title1">PHOTO</h1>
              <h1 className="title2">GRAPHY</h1>  
            </div>

            <div className="right-side">
                <p className="description">
                Pellentesque Mauris A Lobortis In Bibendum Sed Lobortis Semper. 
                Eget Eu Vel Eu Vitae.
                </p>
                <img src={portfolioImage} alt="Photography" className="portfolio-image"/>
                <button className="order-now">Order Now</button>
            </div>
          </div>

          <div className="social-links">
            <a href="#"><img src={twitterImage} alt="Twitter" className="twitter_icon" /></a>
            <a href="#"><img src={googleImage} alt="Google" className="google_icon" /></a>
            <a href="#"><img src={facebookImage} alt="Facebook" className="facebook_icon" /></a>
            <a href="#"><img src={linkdinImage} alt="LinkedIn" className="linkdin_icon" /></a>
          </div>

        </div>
      );
};

export default PhotographySection;

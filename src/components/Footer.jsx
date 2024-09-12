import React from 'react';
import '../styles/Footer.css'; 

import TwitterIcon from '../assets/Icon Twitter.png';
import GoogleIcon from '../assets/Icon Google.png';
import FaceBookIcon from '../assets/Icon Facebook.png';
import LinkedInIcon from '../assets/Icon Linked In.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-logo">GRAPHER SHOT.</h2>
        <div className="social-icons">
          <a href="">
            <img src={TwitterIcon} alt="Twitter" />
          </a>
          <a href="#" >
            <img src={GoogleIcon} alt="Google" />
          </a>
          <a href="#">
            <img src={FaceBookIcon} alt="Facebook" />
          </a>
          <a href="#">
            <img src={LinkedInIcon} alt="LinkedIn" />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <p>(C) Copyright 2022 | Photographer</p>
      </div>
    </footer>
  );
};

export default Footer;

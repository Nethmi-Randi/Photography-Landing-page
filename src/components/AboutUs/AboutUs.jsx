import React from 'react';
import '../../styles/AboutUs.css'; 
import StatItem from './StatItem'

const AboutUs = () => {
  return (
    <div className="about-us-section">
      <div className="about-us-content">
        <div className="about-us-title">
          <h2>ABOUT<br />US</h2>
            <div className="arrow-down">
                <svg height="180" width="50">
                    <line x1="25" y1="0" x2="25" y2="140" stroke="#233942" stroke-width="2"/>
                    <line x1="10" y1="120" x2="25" y2="140" stroke="#233942" stroke-width="2"/>
                    <line x1="40" y1="120" x2="25" y2="140" stroke="#233942" stroke-width="2"/>
                </svg>
            </div>
        </div>
        <div className="about-us-description">
          <p>
            Tincidunt Sagittis Mollis Nec Suspendisse Sed Felis Massa Urna Nec. 
            Urna Quisque Blandit Turpis Ultrices Arcu Ut    
            Sed. Ultricies Diam Est Aliquet Porta Fermentum Molestie Morbi Libero. 
            Ultrices Sit In Elit Eget Nullam Sem. Urna Velit Imperdiet Habitant In.
          </p>
        </div>
      </div>
      
      <div className="stat-container">
        <StatItem stat="+10 Years" label="Experience" />
        <StatItem stat="+450" label="Customers" />
        <StatItem stat="+15K" label="Portfolio Photos" />
      </div>
      
    </div>
  );
};

export default AboutUs;

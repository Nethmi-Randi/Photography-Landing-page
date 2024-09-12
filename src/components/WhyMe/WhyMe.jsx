import React from 'react';
import '../../styles/WhyMe.css';
import FeatureBox from './FeatureBox';

import agencyIcon from '../../assets/Icon Agency.png';    
import ideaIcon from '../../assets/Icon Lamp.png';
import satisfactionIcon from '../../assets/Icon Star.png';
import qualityIcon from '../../assets/Icon Quality.png';
import creativityIcon from '../../assets/Icon Lighting.png';

const WhyMe = () => {
  return (
    <div className="whyme-container">
      <div className="whyme-left">
        <h1 className="whyme-title">WHY ME</h1>
        <p className="whyme-description">
          Tincidunt Sagittis Mollis Nec Suspendisse<br/>
          Sed Felis Massa Urna Nec. Urna Quisque<br/>
          Blandit Turpis Ultrices Arcu Ut Sed.
        </p>
      </div>
      
        <FeatureBox 
          icon={agencyIcon} 
          title="Agency" 
          description="Sagittis Enim Nullam Pulvinar Tellus Sit Egestas Semper. 
          Vestibulum Sed Libero Sed At Sed Nisl Sodales Phasellus Et." 
          variant="Agency"
        />
        <FeatureBox 
          icon={ideaIcon} 
          title="Choose Idea" 
          description="Sagittis Enim Nullam Pulvinar Tellus Sit Egestas Semper. 
          Vestibulum Sed Libero Sed At Sed Nisl Sodales Phasellus Et." 
          variant="Choose"
        />
        <FeatureBox 
          icon={satisfactionIcon} 
          title="Satisfaction" 
          description="Sagittis Enim Nullam Pulvinar Tellus Sit Egestas Semper. 
          Vestibulum Sed Libero Sed At Sed Nisl Sodales Phasellus Et." 
          variant="Satisfaction"
        />
        <FeatureBox 
          icon={qualityIcon} 
          title="Quality" 
          description="Sagittis Enim Nullam Pulvinar Tellus Sit Egestas Semper. 
          Vestibulum Sed Libero Sed At Sed Nisl Sodales Phasellus Et." 
          variant="Quality"
        />
        <FeatureBox 
          icon={creativityIcon} 
          title="Creativity" 
          description="Sagittis Enim Nullam Pulvinar Tellus Sit Egestas Semper. 
          Vestibulum Sed Libero Sed At Sed Nisl Sodales Phasellus Et." 
          variant="Creativity"
        />
      </div>
    
  );
}

export default WhyMe;

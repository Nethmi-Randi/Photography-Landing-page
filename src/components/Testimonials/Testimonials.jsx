import React from 'react';
import TestimonialCard from './TestimonialCard';
import '../../styles/Testimonials.css';

import JohnImage from '../../assets/John.png';
import VerdaImage from '../../assets/Verda.png';
import LoviaImage from '../../assets/Lovia.png';

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2>TESTIMONIALS</h2>
      <div className="testimonials-container">
        <TestimonialCard
          image={JohnImage}
          name="Jhon Mafuh"
          platform="Facebook"
          text="Lorem Ipsum Dolor Sit Amet Eonsectetur. Pellentesque Eget Id Quis Arcu Sem 
          Ac Nulla Interdum. Turpis Sagittis Blandit Pharetra Mauris Quis Nulla Ornare Amet. 
          Enim Placerat Eu Mauris Aliquet Viverra Mi Diam."
        />
        <TestimonialCard
          image={VerdaImage}
          name="Verda Angel"
          platform="Instagram"
          text="Lorem Ipsum Dolor Sit Amet Eonsectetur. Pellentesque Eget Id Quis Arcu Sem 
          Ac Nulla Interdum. Turpis Sagittis Blandit Pharetra Mauris Quis Nulla Ornare Amet. 
          Enim Placerat Eu Mauris Aliquet Viverra Mi Diam."
        />
        <TestimonialCard
          image={LoviaImage}
          name="Lovia Franciska"
          platform="Google"
          text="Lorem Ipsum Dolor Sit Amet Eonsectetur. Pellentesque Eget Id Quis Arcu Sem 
          Ac Nulla Interdum. Turpis Sagittis Blandit Pharetra Mauris Quis Nulla Ornare Amet. 
          Enim Placerat Eu Mauris Aliquet Viverra Mi Diam."
        />
      </div>
    </div>
  );
};

export default Testimonials;

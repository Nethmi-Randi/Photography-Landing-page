import React from 'react';

import Header from '../src/components/Header.jsx'; 
import Portfolio from '../src/components/Portfolio.jsx'; 
import AboutUs from '../src/components/AboutUs/AboutUs.jsx'; 
import PhotoFrames from '../src/components/AboutUs/PhotoFrames.jsx'; 
import ProfilePortfolio from '../src/components/Profile/ProfilePortfolio.jsx';
import ImageGrid from '../src/components/Profile/ImageGrid.jsx';
import WhyMe from '../src/components/WhyMe/WhyMe.jsx';
import Testimonials from '../src/components/Testimonials/Testimonials.jsx';
import PriceList from '../src/components/PriceList/PriceList.jsx';
import Infor from '../src/components/GetInfor/Infor.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx'; 

import Photo1 from '../src/assets/photo1.png';
import Photo2 from '../src/assets/photo2.png';
import Photo3 from '../src/assets/photo3.png';
import Photo4 from '../src/assets/photo4.png';
import Photo5 from '../src/assets/photo5.png';

function App() {
  const images = [Photo1, Photo2, Photo3, Photo4, Photo5];

  return (
    <div>
      <Header />
      <Portfolio /> 
      <AboutUs /> 
      <PhotoFrames images={images} />
      <ProfilePortfolio /> 
      <ImageGrid /> 
      <WhyMe /> 
      <Testimonials/>
      <PriceList/>
      <Infor/>
      <WhatsAppButton/>
    
    </div>
  );
}

export default App;

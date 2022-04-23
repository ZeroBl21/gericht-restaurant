import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <section className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G Letter"/>
    </div> 
    
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img className="spoon__img" src={images.spoon} alt="about spoon"/>
        <p className="p__opensans">
          Lorem ipsun dolor sit amet, consectetur adipiscing elit. Quis pharetra adispiscing
          ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
        </p>
        <button className="custom__button" type="button">Know More</button>
      </div> 
      
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="Knife"/>
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img className="spoon__img" src={images.spoon} alt="about spoon"/>
        <p className="p__opensans">
          Lorem ipsun dolor sit amet, consectetur adipiscing elit. Quis pharetra adispiscing
          ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
        </p>
        <button className="custom__button" type="button">Know More</button>
      </div> 
      
    </div>
  </section>
);

export default AboutUs;

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './about.css';

function Slider() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);
  return (
    <div className="container-fluid slider-container" data-aos="fade-up">
      <div className="row slider-row">
        <div className="col-md-6 slider-image-column">
          <img src="about.png" className="slider-image" alt="About" />
        </div>

        <div className="col-md-6 slider-content-column">
          <div className="slider-content">
            <h3 className="slider-heading">About Us</h3>
            <h1 className="slider-title color" >A2Z IT HUB PVT. LTD</h1>
            <p className="slider-description">
              At A2Z IT Hub, we believe in unleashing the <span className="color">full potential</span> of technology to drive your <span className="color">business forward.</span> With our expertise and innovative solutions, we empower you to stay ahead of the competition and <span className="color">achieve remarkable success.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;

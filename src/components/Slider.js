import React from 'react';
import './css/Slider.css'; // Import your CSS file

const Slider = () => {
  return (
    <div className="slider-container">
      <div className="progress-bar"></div>
      <div className="slides">
        <div className="slide">
          <img className="slide-image" src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg" alt="Slide" />
          <div className="slide-content">
            <h2 className="slide-title">Luxury Dinky hotels
            </h2>
            <p className="slide-description">Rental Art Homes</p>
            <a href="#" className="slide-link">Read More</a>
          </div>
        </div>
        {/* More slides */}
      </div>
    </div>
  );
}

export default Slider;

import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <video className="hero-video" autoPlay loop muted>
        <source src="public/videos/vedio2.mp4" type="video/mp4" />
      </video>
      <div className="hero-content">
        <h1 className="decorated-text">Zaza Photographer</h1>
        <p className="subscript">Welcome to Zaza Photographer Page.</p>
      </div>
    </div>
  );
};

export default Hero;
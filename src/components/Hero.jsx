import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <video
        className="hero-video"
        src="/videos/vedio2.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto" // دي مهمة عشان يبدأ يحمل الفيديو قبل العرض
      >
        Your browser does not support the video tag.
      </video>

      <div className="hero-content">
        <h1 className="decorated-text">Zaza Photographer</h1>
        <p className="subscript">Welcome to Zaza Photographer Page.</p>
      </div>
    </div>
  );
};

export default Hero;

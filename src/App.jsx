import React, { useState } from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import FullscreenImage from './components/FullscreenImage';
import VisitCounter from './components/VisitCounter';
import './App.css';

const App = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const handleImageClick = (src) => {
    setFullscreenImage(src);
  };

  const handleClose = () => {
    setFullscreenImage(null);
  };

  return (
    <div className="App">
      <Hero />
      <Gallery onImageClick={handleImageClick} />
      <Footer />
      <VisitCounter />

      {/* By Ahmed Bakry */}
      <div style={{
        textAlign: 'center',
        color: 'gold',
        fontSize: '16px',
        marginTop: '10px',
        fontFamily: 'Cursive',
        textShadow: '0 0 5px gold, 0 0 10px white',
        animation: 'pulse 2s infinite'
      }}>
        By Ahmed Bakry
      </div>

      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.05); opacity: 0.8; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}
      </style>

      {fullscreenImage && (
        <FullscreenImage src={fullscreenImage} onClose={handleClose} />
      )}
    </div>
  );
};

export default App;
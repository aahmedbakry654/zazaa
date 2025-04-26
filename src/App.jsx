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
      {/* اسمك في العنوان */}
      <h2 style={{ textAlign: 'center', margin: '20px 0', color: '#333' }}>
      
      </h2>

      {/* المكونات الرئيسية */}
      <Hero />
      <Gallery onImageClick={handleImageClick} />
     
      <VisitCounter />
      <Footer />

      {/* عرض الصورة لما تتفتح */}
      {fullscreenImage && (
        <FullscreenImage src={fullscreenImage} onClose={handleClose} />
      )}
    </div>
  );
};

export default App;
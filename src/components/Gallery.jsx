import React from 'react';
import { images } from '../data/images'; 
import { motion } from 'framer-motion';
import './Gallery.css';

const Gallery = ({ onImageClick }) => {
  return (
    <div className="gallery">
      {images.map((img, index) => (
        <motion.div
          key={index}
          className="image-container"
          initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          onClick={() => onImageClick(img.src)}
        >
          <img src={img.src} alt={'gallery ${index}'} className="gallery-image" />
          <div className="likes">
            <span>🤍 {img.love}</span>
            <span>👍 {img.like}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Gallery;
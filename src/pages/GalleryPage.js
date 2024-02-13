import React from 'react';
import '../App.css';
import matt from '../photos/matt.png';

const GalleryPage = () => {
  return (
    <div className="gallery-page">
        <h1>Gallery</h1>
        <div className="images-container">
          
          <div className="image">
            <img src={matt} alt="Club Image" />
          </div>

          <div className="image">
            <img src={matt} alt="Club Image" />
          </div>

          <div className="image">
            <img src={matt} alt="Club Image" />
          </div>

          <div className="image">
            <img src={matt} alt="Club Image" />
          </div>

          <div className="image">
            <img src={matt} alt="Club Image" />
          </div>

          <div className="image">
            <img src={matt} alt="Club Image" />
          </div>

          <div className="image">
            <img src={matt} alt="Club Image" />
          </div>

          <div className="image">
            <img src={matt} alt="Club Image" />
          </div>

          <div className="image">
            <img src={matt} alt="Club Image" />
          </div>

        </div>
    </div>
  );
};

export default GalleryPage;

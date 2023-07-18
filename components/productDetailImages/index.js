'use client'

import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const ProductDetailImages = ({data}) => {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const onSlide = (currentIndex) => {
    setCurrentIndex(currentIndex);
  };

    const newImages = data.map((url) => ({
      original: url,
      thumbnail: url,
      originalWidth: 800,
      originalHeight: 600,
    }));


  return (
    <div>
      <ImageGallery
        items={newImages}
        startIndex={currentIndex}
        onSlide={onSlide}
        showIndex={true}
        showFullscreenButton={false}
        slideInterval={2000}
        slideOnThumbnailOver={true}
        autoPlay={true}
      />
    </div>
  );
};

export default ProductDetailImages;

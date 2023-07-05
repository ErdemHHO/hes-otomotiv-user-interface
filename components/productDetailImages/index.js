'use client'

import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const ProductDetailImages = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onSlide = (currentIndex) => {
    setCurrentIndex(currentIndex);
  };

  useEffect(() => {
    // Örnek olarak, klasörden gelen resim dosyalarının listesini burada oluşturuyoruz
    const imageUrls = [
      '/images/logos/hes-otomotiv-logo.png',
      '/images/logos/bmwpng.png',
      '/images/logos/bmwpng.png',
      // Diğer resimler...
    ];

    const newImages = imageUrls.map((url) => ({
      original: url,
      thumbnail: url,
      originalWidth: 800,
      originalHeight: 600,
    }));

    setImages(newImages);
  }, []);

  return (
    <div>
      <ImageGallery
        items={images}
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

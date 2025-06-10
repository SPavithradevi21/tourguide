import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const images = [
    'https://via.placeholder.com/800x300?text=Taj+Mahal',
    'https://via.placeholder.com/800x300?text=Qutub+Minar',
    'https://via.placeholder.com/800x300?text=Mysore+Palace',
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Explore Destinations</h2>
      <img src={images[index]} alt="Tour" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
    </div>
  );
};

export default ImageSlider;
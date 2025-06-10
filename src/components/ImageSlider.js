import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

const ImageSlider = () => {
  const images = [
    {
      src: "/images/taj-mahal.jpg",
      alt: "Taj Mahal",
      title: "Taj Mahal",
      description: "An iconic symbol of love located in Agra.",
    },
    {
      src: "/images/qutub-minar.jpg",
      alt: "Qutub Minar",
      title: "Qutub Minar",
      description: "A UNESCO World Heritage Site in Delhi.",
    },
    {
      src: "/images/mysore-palace.jpg",
      alt: "Mysore Palace",
      title: "Mysore Palace",
      description: "A historic palace located in Mysore.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Slide changes every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <img
          src={images[index].src}
          alt={images[index].alt}
          className="slider-image"
        />
        <div className="slider-overlay">
          <h2>{images[index].title}</h2>
          <p>{images[index].description}</p>
        </div>
      </div>
      <div className="slider-controls">
        <button onClick={handlePrev} className="slider-button">
          &#8592; Prev
        </button>
        <button onClick={handleNext} className="slider-button">
          Next &#8594;
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;

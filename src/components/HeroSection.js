import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to ExploreNow</h1>
        <p className="hero-subtitle">Discover the most beautiful destinations in India.</p>
        <button className="hero-button">Get Started</button>
      </div>
    </div>
  );
};

export default HeroSection;

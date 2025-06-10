import React from "react";
import HeroSection from "./components/HeroSection";
import ImageSlider from "./components/ImageSlider";
import PlaceList from "./components/PlaceList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <ImageSlider />
      <PlaceList />
  
    </div>
  );
}

export default App;

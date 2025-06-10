import React from 'react';
import './App.css';
import PlaceList from './components/PlaceList';
import ImageSlider from './components/ImageSlider';

function App() {
  return (
    <div className="App">
      <h1>Tourguide App</h1>
      <ImageSlider />
      <PlaceList />
    </div>
  );
}

export default App;
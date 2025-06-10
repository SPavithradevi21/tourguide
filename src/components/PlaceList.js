import React, { useState, useEffect } from "react";
import PlaceCard from "./PlaceCard";
import "./PlaceList.css";

const PlaceList = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    setPlaces([
      {
        id: 1,
        title: "Taj Mahal",
        image: "/images/taj-mahal.jpg",
        description: "An iconic symbol of love in Agra.",
        location: "Agra, India",
      },
      {
        id: 2,
        title: "Qutub Minar",
        image: "/images/qutub-minar.jpg",
        description: "A UNESCO World Heritage Site in Delhi.",
        location: "Delhi, India",
      },
      {
        id: 3,
        title: "Mysore Palace",
        image: "/images/mysore-palace.jpg",
        description: "A historic palace in Mysore.",
        location: "Mysore, Karnataka",
      },
    ]);
  }, []);

  return (
    <div className="place-list">
      {places.map((place) => (
        <PlaceCard key={place.id} {...place} />
      ))}
    </div>
  );
};

export default PlaceList;

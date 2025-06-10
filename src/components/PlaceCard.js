import React from "react";
import "./PlaceCard.css";

const PlaceCard = ({ image, title, description, location }) => {
  return (
    <div className="place-card">
      <img src={image} alt={title} className="place-card-image" />
      <div className="place-card-body">
        <h2 className="place-card-title">{title}</h2>
        <p className="place-card-description">{description}</p>
        <p className="place-card-location">{location}</p>
      </div>
    </div>
  );
};

export default PlaceCard;

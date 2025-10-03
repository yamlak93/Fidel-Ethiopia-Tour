import React from "react";
import "../css/Tours.css";

const TourSummaryCard = ({ id, name, duration, image, onClick }) => {
  // Fallback image if image prop is invalid or undefined
  const validImage = image ? image : "default-image.jpg";

  // Debug log to check the duration prop
  console.log("TourSummaryCard - Duration:", duration);

  return (
    <div className="tour-card" onClick={onClick}>
      <div className="tour-card-image-wrapper">
        <img
          src={validImage}
          alt={name || "Tour Image"}
          className="tour-card-image"
        />
        <div className="tour-card-overlay">
          <span className="tour-card-duration-badge">{duration || "N/A"}</span>
        </div>
      </div>
      <div className="tour-card-body">
        <h4 className="tour-card-title">{name || "Unnamed Tour"}</h4>
        <button className="tour-card-button">Learn More</button>
      </div>
    </div>
  );
};

export default TourSummaryCard;

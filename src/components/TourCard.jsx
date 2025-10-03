import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TourCard = ({
  title,
  description,
  image,
  duration,
  price,
  "data-bs-target": dataBsTarget,
}) => {
  return (
    <div
      className="card shadow-sm border-2 rounded-5 mb-4"
      style={{ overflow: "hidden", padding: 0, width: "20rem", margin: "20px" }}
    >
      <img
        src={image}
        className="card-img-top"
        alt={title}
        style={{
          objectFit: "cover",
          width: "100%",
          height: "auto",
          margin: 0,
          padding: 0,
        }}
      />
      <div className="card-body p-3 d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title text-dark fw-bold mb-2">{title}</h5>
          <p className="card-text text-muted small mb-3">{description}</p>
        </div>
        <div className="price-tag">
          <div className="price-box">
            <span className="d-block fw-bold">{duration}</span>
            <span className="d-block">{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;

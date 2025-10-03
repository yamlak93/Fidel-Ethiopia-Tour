import React from "react";

const TourLocationCard = ({ imageSrc, title, subtitle }) => {
  return (
    <div
      style={{
        border: "1px solid #706e6eff",
        borderRadius: "15px",
        overflow: "hidden",
        width: "100%",
        height: "400px",
        maxWidth: "400px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={imageSrc}
        alt={title}
        style={{
          display: "block",
          width: "100%",
          height: "300px",
          margin: 0,
          padding: 0,
          border: "none",
        }}
      />
      <div style={{ padding: "16px" }}>
        <h1
          style={{
            margin: "0 0 8px",
            fontSize: "1.25rem",
            color: "#44d13dff",
            fontWeight: "bold",
          }}
        >
          {title}
        </h1>
        <p style={{ margin: 0, fontSize: "1rem", color: "#666" }}>{subtitle}</p>
      </div>
    </div>
  );
};

export default TourLocationCard;

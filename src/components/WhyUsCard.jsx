import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const WhyUsCard = ({ icon, title, description }) => {
  const cardStyle = {
    border: "1px solid #727272ff", // Light gray border
    borderRadius: "16px",
    paddingTop: "3rem",
    paddingBottom: "1.5rem",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    backgroundColor: "#fff",
    position: "relative",
    textAlign: "center",
    width: "300px",
    margin: "3rem 0",
  };

  const iconWrapperStyle = {
    position: "absolute",
    top: "-60px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "rgba(255, 255, 255, 0)",
    borderRadius: "50%",
    padding: "10px",
  };

  const iconStyle = {
    width: "100px",
    height: "100px",
  };

  const titleStyle = {
    color: "#28a745", // Bootstrap green
    fontWeight: "bold",
    fontSize: "1.25rem",
    marginBottom: "0.75rem",
  };

  const descriptionStyle = {
    color: "#555",
    fontSize: "0.95rem",
    lineHeight: "1.6",
  };

  return (
    <div style={cardStyle}>
      <div style={iconWrapperStyle}>
        <img src={icon} alt="Icon" style={iconStyle} />
      </div>
      <h5 style={titleStyle}>{title}</h5>
      <p style={descriptionStyle}>{description}</p>
    </div>
  );
};

export default WhyUsCard;

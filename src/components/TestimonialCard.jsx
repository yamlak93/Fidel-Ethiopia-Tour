import React from "react";
import tripAdvisor from "../assets/TripAdvisorLogoMini.png";
const TestimonialCard = ({
  profileImage,
  name,
  date,
  rating = 5,
  review,
  tripAdvisorLogo,
}) => {
  const truncatedReview =
    review.length > 100 ? review.slice(0, 100) + "..." : review;
  const tripAdvisorURL =
    "https://www.tripadvisor.com/Attraction_Review-g293791-d17549738-Reviews-Fidel_Ethiopia_Tours-Addis_Ababa.html";

  return (
    <div
      style={{
        position: "relative",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        maxWidth: "500px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
      }}
    >
      {/* TripAdvisor Logo */}
      <img
        src={tripAdvisor}
        alt="TripAdvisor"
        style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          width: "32px",
          height: "32px",
          objectFit: "contain",
          borderRadius: "50%",
        }}
      />

      {/* Profile Info */}
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}
      >
        <img
          src={profileImage}
          alt={name}
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            objectFit: "cover",
            marginRight: "12px",
          }}
        />
        <div>
          <strong>{name}</strong>
          <div style={{ fontSize: "0.85rem", color: "#666" }}>{date}</div>
        </div>
      </div>

      {/* Rating + Verified */}
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}
      >
        {Array.from({ length: rating }).map((_, i) => (
          <div
            key={i}
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              backgroundColor: "#4CAF50",
              marginRight: "4px",
            }}
          />
        ))}
        <span
          style={{
            marginLeft: "8px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            fontSize: "0.75rem",
            padding: "2px 6px",
            borderRadius: "4px",
          }}
        >
          Verified
        </span>
      </div>

      {/* Review Text */}
      <p style={{ fontSize: "1rem", color: "#333", marginBottom: "8px" }}>
        {truncatedReview}
      </p>

      {/* Read More */}
      {review.length > 100 && (
        <a
          href={tripAdvisorURL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#007BFF",
            fontSize: "0.9rem",
            textDecoration: "none",
          }}
        >
          Read more
        </a>
      )}
    </div>
  );
};

export default TestimonialCard;

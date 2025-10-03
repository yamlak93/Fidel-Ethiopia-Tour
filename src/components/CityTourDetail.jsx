import React from "react";
import "../css/Tours.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CityTourDetail = ({ tour, onClose }) => {
  if (!tour) return null;

  return (
    <>
      <section className="tour-detail-section">
        <div className="tour-detail-container">
          <div className="tour-detail-header">
            <img
              src={tour.image}
              alt={tour.name}
              className="tour-detail-image"
            />
            <div className="tour-detail-info">
              <h1 className="tour-detail-title">{tour.name}</h1>
              <span className="tour-detail-duration">{tour.duration}</span>
              <p className="tour-detail-summary">{tour.summary}</p>
              <button className="tour-detail-back-button" onClick={onClose}>
                Back to Tours
              </button>
            </div>
          </div>
          <div className="tour-detail-content">
            <h2 className="tour-detail-section-title">Itinerary</h2>
            <div className="tour-day-grid">
              {tour.itinerary &&
                tour.itinerary.map((item, index) => (
                  <div key={index} className="tour-day-card">
                    <h3 className="tour-day-title">{item.time}</h3>
                    <div className="tour-day-section">
                      <p className="tour-day-activities">{item.description}</p>
                    </div>
                  </div>
                ))}
            </div>
            <div className="tour-detail-inclusions-exclusions">
              <div className="tour-detail-card">
                <h3 className="tour-detail-section-title">Inclusions</h3>
                <ul className="tour-detail-list">
                  {tour.inclusions &&
                    tour.inclusions.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
              <div className="tour-detail-card">
                <h3 className="tour-detail-section-title">Exclusions</h3>
                <ul className="tour-detail-list">
                  {tour.exclusions &&
                    tour.exclusions.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </div>
            <button
              className="tour-detail-book-button"
              onClick={() => alert("Booking functionality to be implemented")}
            >
              Book Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CityTourDetail;

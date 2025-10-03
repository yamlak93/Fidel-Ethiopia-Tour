import React from "react";
import "../css/Tours.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TourDetail = ({ tour, onClose }) => {
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
              {tour.itinerary.map((day, index) => (
                <div key={index} className="tour-day-card">
                  <h3 className="tour-day-title">
                    Day {day.day}: {day.title}
                  </h3>
                  {day.morning && day.morning.length > 0 && (
                    <div className="tour-day-section morning">
                      <h4 className="tour-day-section-header">Morning</h4>
                      <ul className="tour-day-activities">
                        {day.morning.map((activity, i) => (
                          <li key={i}>{activity}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {day.midMorning && day.midMorning.length > 0 && (
                    <div className="tour-day-section midMorning">
                      <h4 className="tour-day-section-header">Mid-Morning</h4>
                      <ul className="tour-day-activities">
                        {day.midMorning.map((activity, i) => (
                          <li key={i}>{activity}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {day.fullDay && day.fullDay.length > 0 && (
                    <div className="tour-day-section fullDay">
                      <h4 className="tour-day-section-header">Full Day</h4>
                      <ul className="tour-day-activities">
                        {day.fullDay.map((activity, i) => (
                          <li key={i}>{activity}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {day.lunch && day.lunch.length > 0 && (
                    <div className="tour-day-section lunch">
                      <h4 className="tour-day-section-header">Lunch</h4>
                      <ul className="tour-day-activities">
                        {day.lunch.map((activity, i) => (
                          <li key={i}>{activity}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {day.afternoon && day.afternoon.length > 0 && (
                    <div className="tour-day-section afternoon">
                      <h4 className="tour-day-section-header">Afternoon</h4>
                      <ul className="tour-day-activities">
                        {day.afternoon.map((activity, i) => (
                          <li key={i}>{activity}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {day.evening && day.evening.length > 0 && (
                    <div className="tour-day-section evening">
                      <h4 className="tour-day-section-header">Evening</h4>
                      <ul className="tour-day-activities">
                        {day.evening.map((activity, i) => (
                          <li key={i}>{activity}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="tour-detail-inclusions-exclusions">
              <div className="tour-detail-card">
                <h3 className="tour-detail-section-title">Inclusions</h3>
                <ul className="tour-detail-list">
                  {tour.inclusions.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="tour-detail-card">
                <h3 className="tour-detail-section-title">Exclusions</h3>
                <ul className="tour-detail-list">
                  {tour.exclusions.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
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

export default TourDetail;

import React, { useState } from "react";
import TourSummaryCard from "../components/TourSummaryCard";
import CityTourDetail from "../components/CityTourDetail";
import tours from "../data/ToursData";
import "../css/Tours.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const CityTour = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTour, setSelectedTour] = useState(null);
  const cityTours = tours[0].cityTour;

  const filteredTours = cityTours.filter((tour) =>
    tour.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      {selectedTour ? (
        <CityTourDetail
          tour={selectedTour}
          onClose={() => setSelectedTour(null)}
        />
      ) : (
        <section className="historic-tour-section">
          <div className="historic-tour-header">
            <h2>City Tours of Ethiopia</h2>
            <p>
              Explore the vibrant cities and cultural landmarks of Ethiopia.
            </p>
            <input
              type="text"
              placeholder="Search city tours..."
              className="tour-search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="tour-grid">
            {filteredTours.length > 0 ? (
              filteredTours.map((tour) => (
                <TourSummaryCard
                  key={tour.id}
                  id={tour.id}
                  name={tour.name}
                  duration={tour.duration}
                  image={tour.image}
                  onClick={() => setSelectedTour(tour)}
                />
              ))
            ) : (
              <p className="no-tours-message">
                No tours found. Try a different search!
              </p>
            )}
          </div>
        </section>
      )}
      <Footer />
    </>
  );
};

export default CityTour;

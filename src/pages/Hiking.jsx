import React, { useState } from "react";
import TourSummaryCard from "../components/TourSummaryCard";
import TourDetail from "../components/TourDetail";
import tours from "../data/ToursData";
import "../css/Tours.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Hiking = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTour, setSelectedTour] = useState(null);
  // Access the hiking tours array directly
  const hikingTours = tours[0]?.hiking || [];

  const filteredTours = hikingTours.filter((tour) =>
    tour.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      {selectedTour ? (
        <TourDetail tour={selectedTour} onClose={() => setSelectedTour(null)} />
      ) : (
        <section className="historic-tour-section">
          <div className="historic-tour-header">
            <h2>Hiking and Trekking Tours of Ethiopia</h2>
            <p>Explore the stunning mountains and trails of Ethiopia.</p>
            <input
              type="text"
              placeholder="Search hiking tours..."
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
                  duration={`${tour.itinerary.length} Days`}
                  image={tour.image || "default-image.jpg"} // Fallback image
                  onClick={() => {
                    // Create a new tour object with the computed duration
                    const tourWithDuration = {
                      ...tour,
                      duration: `${tour.itinerary.length} Days`,
                    };
                    setSelectedTour(tourWithDuration);
                  }}
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

export default Hiking;

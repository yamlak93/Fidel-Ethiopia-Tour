import React, { useState } from "react";
import TourSummaryCard from "../components/TourSummaryCard";
import TourDetail from "../components/TourDetail";
import tours from "../data/ToursData";
import "../css/Tours.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Natural = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTour, setSelectedTour] = useState(null);
  // Access the natural tours array directly with fallback
  const naturalTours =
    Array.isArray(tours) && tours[0]?.natural ? tours[0].natural : [];

  console.log("Natural Tours Data:", naturalTours); // Debug log to check data

  const filteredTours = naturalTours.filter((tour) =>
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
            <h2>Natural and Cultural Tours of Ethiopia</h2>
            <p>
              Discover the stunning landscapes and rich cultures of Ethiopia.
            </p>
            <input
              type="text"
              placeholder="Search natural tours..."
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

export default Natural;

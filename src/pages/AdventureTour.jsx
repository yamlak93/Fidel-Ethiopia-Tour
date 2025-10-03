import React, { useState } from "react";
import TourSummaryCard from "../components/TourSummaryCard";
import TourDetail from "../components/TourDetail";
import tours from "../data/ToursData";
import "../css/Tours.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AdventureTour = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTour, setSelectedTour] = useState(null);
  const adventureTours = tours[0].adventurous;

  const filteredTours = adventureTours.filter((tour) =>
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
            <h2>Adventure Tours of Ethiopia</h2>
            <p>
              Embark on thrilling adventures through Ethiopia’s unique
              landscapes and cultural gems.
            </p>
            <input
              type="text"
              placeholder="Search adventure tours..."
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

export default AdventureTour;

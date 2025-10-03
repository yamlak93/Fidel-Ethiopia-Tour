import React from "react";
import TourCard from "./TourCard";
import omo from "../assets/Omo-Ethiopia.png";
import bale from "../assets/Bale Mountains.jpg";
import gondar from "../assets/Gondar-Castle.jpg";
import afar from "../assets/Afar Dalol.jpg";
import gheralta from "../assets/the gheralta mountains.jpg";
import "../css/Home.css";

const TopTours = ({
  title = "Top Tour Experiences",
  subtitle = "Make a memory with us",
}) => {
  const tours = [
    {
      id: "omo",
      title: "5 Days Omo Valley Tribes Tour",
      image: omo,
      alt: "Omo Valley Tribes Tour",
      description:
        "Discover Ethiopia's rich cultures and stunning valley landscapes.",
      duration: "5 Days",
      price: "US$ 4,500",
      modalId: "omoModal",
    },
    {
      id: "northern",
      title: "13 Days Northern Ethiopia Historic Route",
      image: bale,
      alt: "Northern Ethiopia Historic Route",
      description:
        "Explore history and UNESCO sites in stunning northern landscapes.",
      duration: "13 Days",
      price: "US$ 9,500",
      modalId: "northernModal",
    },
    {
      id: "danakil",
      title: "5 Days Danakil Depression Tour",
      image: gondar,
      alt: "Danakil Depression Tour",
      description: "Adventure through one of the hottest places on Earth.",
      duration: "5 Days",
      price: "US$ 4,500",
      modalId: "danakilModal",
    },
    {
      id: "omo2",
      title: "5 Days Omo Valley Tribes Tour",
      image: omo,
      alt: "Omo Valley Tribes Tour",
      description:
        "Discover Ethiopia's rich cultures and stunning valley landscapes.",
      duration: "5 Days",
      price: "US$ 4,500",
      modalId: "omoModal",
    },
    {
      id: "northern2",
      title: "13 Days Northern Ethiopia Historic Route",
      image: bale,
      alt: "Northern Ethiopia Historic Route",
      description:
        "Explore history and UNESCO sites in stunning northern landscapes.",
      duration: "13 Days",
      price: "US$ 9,500",
      modalId: "northernModal",
    },
    {
      id: "danakil2",
      title: "5 Days Danakil Depression Tour",
      image: gondar,
      alt: "Danakil Depression Tour",
      description: "Adventure through one of the hottest places on Earth.",
      duration: "5 Days",
      price: "US$ 4,500",
      modalId: "danakilModal",
    },
  ];

  return (
    <section className="tour-experiences-section py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-12 text-center">
            <h2 className="section-title mb-2">{title}</h2>
            <p className="lead text-muted">{subtitle}</p>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {tours.map((tour) => (
            <TourCard
              key={tour.id}
              title={tour.title}
              description={tour.description}
              image={tour.image}
              duration={tour.duration}
              price={tour.price}
              data-bs-target={`#${tour.modalId}`}
            />
          ))}
        </div>
      </div>

      {/* Modals */}
      {tours.map((tour) => (
        <div
          key={`${tour.id}-modal`}
          className="modal fade"
          id={tour.modalId}
          tabIndex="-1"
          aria-labelledby={`${tour.id}ModalLabel`}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content rounded-4 shadow-lg border-0">
              <div className="modal-header bg-success text-white rounded-top">
                <h5 className="modal-title fw-bold" id={`${tour.id}ModalLabel`}>
                  {tour.title}
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body p-4">
                <img
                  src={tour.image}
                  className="img-fluid rounded-3 shadow mb-3"
                  alt={`${tour.alt} Details`}
                />
                <p className="lead text-justify mb-3">
                  Detailed description of the {tour.title}, including itinerary,
                  highlights, and more. {tour.description}
                </p>
                <ul className="list-group list-group-flush mb-3">
                  <li className="list-group-item border-0 px-0 py-2">
                    <strong>Duration:</strong> {tour.duration}
                  </li>
                  <li className="list-group-item border-0 px-0 py-2">
                    <strong>Price:</strong> {tour.price}
                  </li>
                  <li className="list-group-item border-0 px-0 py-2">
                    <strong>Highlights:</strong> Cultural immersion, stunning
                    landscapes
                  </li>
                </ul>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="btn btn-outline-success">
                    Contact Us
                  </button>
                  <button className="btn btn-success">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TopTours;

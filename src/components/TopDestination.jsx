import React from "react";
import TourLocationCard from "./TourLocationCard";
import omo from "../assets/OmoVally.jpg";
import gena from "../assets/Gena.jpg";
import coffeeBeans from "../assets/Coffee Beans.jpg";
import lalibela from "../assets/Lalibela.jpg";
import Dallol from "../assets/Dallol Volcano.jpg";
import Addis from "../assets/Addis ababa.jpg";
import timket from "../assets/Timket.jpg";
import bird from "../assets/Birds.jpg";

import "../css/home.css";

const TopDestination = () => {
  const destinations = [
    {
      id: "lalibela",
      imageSrc: lalibela,
      title: "Northern Ethiopia",
      subtitle: "Historic Tour",
    },
    {
      id: "omo",
      imageSrc: omo,
      title: "Southern Omo Valley",
      subtitle: "Cultural Tour",
    },
    {
      id: "dallol",
      imageSrc: Dallol,
      title: "Denakil Depression",
      subtitle: "Adventurous Tour",
    },
    {
      id: "addisAbaba",
      imageSrc: Addis,
      title: "Addis Ababa",
      subtitle: "City Tour & Excursion",
    },
  ];

  const attractions = [
    {
      id: "timket",
      imageSrc: timket,
      title: "Timket Festival",
      subtitle: "Festival Tour",
    },
    {
      id: "gena",
      imageSrc: gena,
      title: "Gena Festival",
      subtitle: "Festival Tour",
    },
    {
      id: "coffee",
      imageSrc: coffeeBeans,
      title: "Coffee Tour",
      subtitle: "Adventurous Tour",
    },
    {
      id: "bird",
      imageSrc: bird,
      title: "Birding Tour",
      subtitle: "Adventurous Tour",
    },
  ];

  return (
    <div>
      <section className="top-destination-section py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-12 text-center">
              <h2 className="section-title mb-2">Top Destinations</h2>
              <p className="lead text-muted">
                Explore the best places to visit in Ethiopia.
              </p>
            </div>
          </div>
          <div className="card-container">
            {destinations.map((destination) => (
              <TourLocationCard
                key={destination.id}
                imageSrc={destination.imageSrc}
                title={destination.title}
                subtitle={destination.subtitle}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="top-attraction-section py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-12 text-center">
              <h2 className="section-title mb-2">
                Top Attractions in Ethiopia
              </h2>
              <p className="lead text-muted">
                Discover the must-see highlights of Ethiopia.
              </p>
            </div>
          </div>
          <div className="card-container">
            {attractions.map((attraction) => (
              <TourLocationCard
                key={attraction.id}
                imageSrc={attraction.imageSrc}
                title={attraction.title}
                subtitle={attraction.subtitle}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopDestination;

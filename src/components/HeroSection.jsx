import React, { useState, useEffect } from "react";
import "../css/hero.css";
import omo from "../assets/Omo-Ethiopia.png";
import bale from "../assets/Bale Mountains.jpg";
import gondar from "../assets/Gondar-Castle.jpg";
import afar from "../assets/Afar Dalol.jpg";
import gheralta from "../assets/the gheralta mountains.jpg";
import { FaSearch, FaWhatsapp } from "react-icons/fa";

const slidesData = [omo, bale, gondar, afar, gheralta];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slidesData.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrev = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slidesData.length) % slidesData.length
    );
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  return (
    <section id="hero" className="hero-slider position-relative">
      {slidesData.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
        >
          <img src={image} alt={`Slide ${index + 1}`} className="img-fluid" />
        </div>
      ))}

      <div className="search-container d-flex flex-column justify-content-center align-items-center text-center h-100 px-3">
        <h1 className="hero-title text-white fw-bold">
          Where do you want to go?
        </h1>
        <h4 className="hero-subtitle text-white">
          Trust Fidel Ethiopia Expedition's 18 years of experience planning
          trips all over Ethiopia
        </h4>

        <form
          className="search-form w-100"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="input-group rounded-pill shadow-lg">
            <input
              type="search"
              className="form-control border-0 bg-transparent text-white placeholder-white/70"
              placeholder="Enter destination"
              aria-label="Search"
            />
            <button className="btn search-btn" type="submit">
              <FaSearch className="me-2" />
            </button>
          </div>
        </form>
      </div>

      <div className="indicators">
        {slidesData.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>

      <a
        href="https://wa.me/251911504103"
        className="floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
        <span className="whatsapp-tooltip">Chat with us</span>
      </a>
    </section>
  );
};

export default HeroSection;

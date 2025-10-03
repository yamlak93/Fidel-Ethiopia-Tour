import React from "react";
import "../css/home.css"; // Adjust the import path to match your CSS file
import profileElias from "../assets/omoVally.jpg"; // Placeholder for Elias's image
import profileGuide from "../assets/omoVally.jpg"; // Placeholder for guide image
import profileCook from "../assets/omoVally.jpg"; // Placeholder for cook image
import profileDriver from "../assets/omoVally.jpg"; // Placeholder for driver image
import profileAssistant from "../assets/omoVally.jpg"; // Placeholder for assistant image
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Team from "../components/Team";
import Principles from "../components/Principles";
import WhyUs from "../components/WhyUs";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="about-section py-5 bg-light">
        <div className="container">
          {/* Who We Are */}
          <div className="row justify-content-center mb-5">
            <div className="col-12 text-center">
              <h1 className="mb-4" style={{ color: "#28a745" }}>
                Who We Are
              </h1>
              <p className="lead text-muted mb-4">
                Welcome to Fidel Ethiopia Tours, your trusted partner in
                exploring the enchanting landscapes and rich cultural tapestry
                of Ethiopia. Founded in 2018 by Elias Alemayehu, a seasoned tour
                guide with a deep-rooted passion for his homeland, our company
                is committed to delivering exceptional travel experiences that
                resonate with every traveler. Our commitment to providing a
                seamless tour experience means that every detail is carefully
                planned and executed. Whether you’re embarking on an adventurous
                trek, exploring ancient ruins, or immersing yourself in local
                cultures, we ensure that your journey is smooth and enjoyable
                from start to finish. Join us at Fidel Ethiopia Tours and let us
                guide you through the wonders of Ethiopia. With our passion for
                travel and dedication to excellence, we promise an unforgettable
                adventure that will leave you with cherished memories and a
                deeper appreciation for this remarkable country. Welcome to the
                journey of a lifetime!
              </p>
            </div>
          </div>

          {/* Meet Our Team */}
          <Team />
          {/* Core Principles */}
          <Principles />

          {/* Why Travel with Us */}
          <WhyUs />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;

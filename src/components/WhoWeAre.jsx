import React from "react";
import "../css/Home.css";
import { Link } from "react-router-dom";

const WhoWeAre = ({ moreAboutUsLink = "#" }) => {
  return (
    <section id="who-we-are" className="who-we-are-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h2 className="section-title text-center mb-5">
              Welcome to Fidel Ethiopia Expedition
            </h2>
            <p className="lead text-center mb-4">
              Welcome to Fidel Ethiopia Tours, your trusted partner in exploring
              the enchanting landscapes and rich cultural tapestry of Ethiopia.
              Founded in 2018 by Elias Alemayehu, a seasoned tour guide with a
              deep-rooted passion for his homeland, our company is committed to
              delivering exceptional travel experiences that resonate with every
              traveler. Our commitment to providing a seamless tour experience
              means that every detail is carefully planned and executed.{" "}
              <Link to={"/about"}>more about us</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../css/Navbar.css";
import FidelLogo from "../assets/fidelLogo.png";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    const topBar = document.querySelector(".top-bar");
    const mainNav = document.querySelector(".main-nav");

    const handleScroll = () => {
      if (window.scrollY > topBar.offsetHeight) {
        mainNav.classList.add("sticky-at-top");
      } else {
        mainNav.classList.remove("sticky-at-top");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ✅ Top Bar */}
      <div className="top-bar">
        <div className="container-fluid">
          <div className="row align-items-center g-0 navContainer">
            {/* Fidel Logo Area */}
            <div className="col-auto pe-3 logo-wrapper">
              <a className="navbar-brand" href="#">
                <div className="logo">
                  <img
                    src={FidelLogo}
                    alt="Fidel Ethiopia Expedition Logo"
                    className="logo-img"
                  />
                </div>
              </a>
            </div>

            {/* ✅ Contact Section */}
            <div className="col d-none d-md-block contact-section text-white px-3 py-1">
              <div className="row justify-content-center">
                <div className="col-auto">
                  <a href="tel:+251911615053" className="text-white me-3">
                    <FaPhone className="me-1" />
                    +251 91 161 5053
                  </a>
                </div>
                <div className="col-auto">
                  <a
                    href="mailto:fidelethiopiaexpedition@gmail.com"
                    className="text-white"
                  >
                    <FaEnvelope className="me-1" />
                    fidelethiopiaexpedition@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* ✅ Language Dropdown */}
            <div className="col-auto ps-3 language-dropdown-container">
              <div className="dropdown">
                <button
                  className="btn btn-link dropdown-toggle bg-light languageBtn text-dark"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Language
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      English
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Amharic
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light main-nav">
        <div className="container">
          {/* Toggle Button for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu Items */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Destinations
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      North Ethiopia Routes
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      South Omo Vally
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Addis Ababa City Tour
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Afar Denakil Depression
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Activities
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Cultural Tours
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Adventure Tours
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Tour Packages
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/historic-tour" className="dropdown-item">
                      Historic Tour
                    </Link>
                  </li>
                  <li>
                    <Link to={"/adventure-tour"} className="dropdown-item">
                      Adventurous Tours
                    </Link>
                  </li>
                  <li>
                    <Link to={"/city-tour"} className="dropdown-item">
                      Excursion & City Tours
                    </Link>
                  </li>
                  <li>
                    <Link to={"/natural-tour"} className="dropdown-item">
                      Natural & Cultural Tours
                    </Link>
                  </li>
                  <li>
                    <Link to={"/hiking"} className="dropdown-item">
                      Hiking & Trekking Tours
                    </Link>
                  </li>
                  <li>
                    <Link to={"/coffee-birding"} className="dropdown-item">
                      Coffee Tours & Birding Tours
                    </Link>
                  </li>
                  <li>
                    <Link to={"/festival-tour"} className="dropdown-item">
                      Festival and Pilgrimage Tour
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

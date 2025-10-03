import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import omo from "../assets/Omo-Ethiopia.png";
import recommended from "../assets/Recomended.png"; // Placeholder for recommended badge
import masterCard from "../assets/masterCard.png"; // Placeholder for Mastercard logo
import visa from "../assets/visa.png"; // Placeholder for Visa logo
import paypal from "../assets/paypal.png"; // Placeholder for PayPal logo
import zelle from "../assets/zelle.png"; // Placeholder for Zelle logo
import tripAdvisor from "../assets/TripAdvisor.png";
import safariBooking from "../assets/safari-bookings-logo.png";
import getYourGuide from "../assets/Get-your-guide.png";
import airlines from "../assets/ethiopian-airlines.png";
import viator from "../assets/viator.png";
import atta from "../assets/atta.png";

const Footer = () => {
  const partnerLogos = [
    tripAdvisor,
    safariBooking,
    getYourGuide,
    airlines,
    viator,
    atta,
  ];
  return (
    <footer
      className=" text-dark pt-5 pb-3 px-4"
      style={{ backgroundColor: "#d3d5d6ff" }}
    >
      <div className="container">
        {/* Top Row */}
        <div className="row gy-4">
          {/* About Section */}
          <div className="col-md-3">
            <h5 className="fw-bold text-success mb-3">
              About Fidel Ethiopia Expedition
            </h5>
            <p className="small text-muted">
              At Fidel Ethiopia tours, we believe that travel is not just a
              journey but a way to connect with new cultures, create lasting
              memories, and explore the wonders of the world. Our mission is to
              provide you with seamless travel experiences that cater to your
              individual needs and aspirations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2">
            <h5 className="fw-bold text-success mb-3">Quick links</h5>
            <ul className="list-unstyled small">
              <li className="mb-2">&gt; Home</li>
              <li className="mb-2">&gt; About us</li>
              <li className="mb-2">&gt; Destinations</li>
              <li className="mb-2">&gt; FAQ</li>
              <li className="mb-2">&gt; Contact us</li>
            </ul>
          </div>

          {/* Tour Packages */}
          <div className="col-md-3">
            <h5 className="fw-bold text-success mb-3">Tour Packages</h5>
            <ul className="list-unstyled small">
              <li className="mb-2">Historic Tour</li>
              <li className="mb-2">Adventurous Tours</li>
              <li className="mb-2">Excursion & City Tours</li>
              <li className="mb-2">Natural & Cultural Tours</li>
              <li className="mb-2">Hiking & Trekking Tours</li>
              <li className="mb-2">Coffee Tours & Birding Tours</li>
              <li className="mb-2">Festival and Pilgrimage Tour</li>
            </ul>
          </div>

          {/* We Work With */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-success mb-3 text-center">
              We work with
            </h5>
            <div className="row g-3 justify-content-center">
              {partnerLogos.map((logo, i) => (
                <div className="col-6 text-center" key={i}>
                  <img src={logo} alt={`Partner ${i + 1}`} height="80" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr className="my-4" />

        {/* Bottom Row */}
        <div className="row gy-4 align-items-start">
          {/* Contact Us */}
          <div className="col-md-3 contact-us">
            <h5 className="fw-bold text-success mb-3">Contact us</h5>

            {/* Phone Numbers */}
            <p className="mb-2">
              <FaPhoneAlt className="text-success me-2" />
              <a
                href="tel:+251911615053"
                className="text-dark text-decoration-none"
              >
                +251 911 61 50 53
              </a>
              <br />
              <FaPhoneAlt className="text-success me-2" />
              <a
                href="tel:+251911504103"
                className="text-dark text-decoration-none"
              >
                +251 911 50 41 03
              </a>
            </p>

            {/* Email */}
            <p className="mb-2">
              <FaEnvelope className="text-success me-2" />
              <a
                href="mailto:fidelethiopiaexpedition@gmail.com"
                className="text-dark text-decoration-none"
              >
                fidelethiopiaexpedition@gmail.com
              </a>
            </p>

            {/* Address */}
            <p className="mb-2">
              <FaMapMarkerAlt className="text-success me-2" />
              <a
                href="https://maps.app.goo.gl/b13PpeNfhZNjwsQp8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark text-decoration-none"
              >
                Ras Desta Avenue, Inside Ghion Hotel, Addis Ababa, 26021/1000,
                ET
              </a>
            </p>
          </div>

          {/* Follow Us */}
          <div className="col-md-3">
            <h5 className="fw-bold text-success mb-3">Follow us on</h5>
            <ul className="list-unstyled small">
              <li className="d-flex align-items-center mb-2">
                <a
                  href="https://twitter.com/FidelethiopiaT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center text-decoration-none text-dark"
                >
                  <FaTwitter className="me-2 fs-5" /> Twitter
                </a>
              </li>
              <li className="d-flex align-items-center mb-2">
                <a
                  href="https://www.facebook.com/FidelEthiopiaTours"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center text-decoration-none text-dark"
                >
                  <FaFacebook className="me-2 fs-5" /> Facebook
                </a>
              </li>
              <li className="d-flex align-items-center mb-2">
                <a
                  href="https://www.linkedin.com/company/fidel-ethiopia-tours"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center text-decoration-none text-dark"
                >
                  <FaLinkedin className="me-2 fs-5" /> LinkedIn
                </a>
              </li>
              <li className="d-flex align-items-center">
                <a
                  href="https://www.instagram.com/fidelethiopia_tours"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center text-decoration-none text-dark"
                >
                  <FaInstagram className="me-2 fs-5" /> Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Rate Us */}
          <div className="col-md-2 text-center">
            <h5 className="fw-bold text-success mb-3">Rate us on</h5>
            <div className=" p-3 rounded  d-inline-block">
              <a href="https://www.tripadvisor.com/UserReviewEdit-g293791-d17549738-Fidel_Ethiopia_Tours-Addis_Ababa.html">
                <img
                  src={recommended}
                  alt="Tripadvisor"
                  height="100"
                  className="my-2 rounded-3"
                />
              </a>
            </div>
          </div>

          {/* Payments */}
          <div className="col-md-4  text-center">
            <h5 className="fw-bold text-success mb-3">We Accept</h5>
            <div className="d-flex justify-content-md-end gap-3 flex-wrap">
              <img src={visa} alt="Visa" height="50" />
              <img src={masterCard} alt="Mastercard" height="50" />
              <img src={paypal} alt="PayPal" height="50" />
              <img src={zelle} alt="Zelle" height="50" />
            </div>
          </div>
        </div>
      </div>
      <p className="text-center mt-4">
        © {new Date().getFullYear()} Fidel Ethiopia Tours. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;

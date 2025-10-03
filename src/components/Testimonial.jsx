import React, { useRef } from "react";
import TestimonialCard from "./TestimonialCard";
import profile1 from "../assets/omoVally.jpg";
import profile2 from "../assets/omoVally.jpg";
import profile3 from "../assets/omoVally.jpg";
import profile4 from "../assets/omoVally.jpg";
import "../css/home.css"; // Adjust the import path to match your CSS file
import { FaStar } from "react-icons/fa";
import tripAdvisorLogo from "../assets/tripadvisorlogo.png"; // Placeholder for TripAdvisor logo

const Testimonial = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -500 : 500; // Matches TestimonialCard maxWidth
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const testimonials = [
    {
      id: "1",
      profileImage: profile1,
      name: "Amina K.",
      date: "September 15, 2025",
      rating: 5,
      review:
        "Fidel Ethiopia Tours made my trip to the Omo Valley unforgettable! The guides were knowledgeable, and the cultural immersion was incredible. I loved every moment of exploring the tribal cultures and stunning landscapes.",
    },
    {
      id: "2",
      profileImage: profile2,
      name: "John D.",
      date: "September 20, 2025",
      rating: 4,
      review:
        "The Bale Mountains hike was breathtaking. The team ensured our safety and comfort throughout the journey. Highly recommend for nature lovers, though the trails were a bit challenging.",
    },
    {
      id: "3",
      profileImage: profile3,
      name: "Sara T.",
      date: "September 25, 2025",
      rating: 5,
      review:
        "Visiting Gondar with Fidel was a dream come true. The personalized service exceeded my expectations! The castles and history were amazing, and the guides were top-notch.",
    },
    {
      id: "4",
      profileImage: profile4,
      name: "Michael R.",
      date: "September 30, 2025",
      rating: 4,
      review:
        "The Afar Region tour was an adventure like no other. Highly recommend their sustainable practices! The desert and volcanic scenery were stunning, though it was quite hot.",
    },
  ];

  // Calculate average rating for the summary
  const averageRating =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

  return (
    <section className="testimonial-section py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-12 text-center">
            <h2 className="section-title mb-2">What Our Clients Say</h2>
            <p className="lead text-muted">
              Hear from travelers who experienced Ethiopia with us.
            </p>
          </div>
        </div>
        <div className="testimonial-row">
          <div className="testimonial-summary">
            <div className="summary-rating">
              <h3 style={{ color: "#000000ff", margin: 0, fontWeight: "bold" }}>
                Excellent
              </h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    style={{
                      color: i < Math.round(averageRating) ? "#28a745" : "#ccc",
                      fontSize: "1.5rem",
                    }}
                  />
                ))}
              </div>
              <span
                style={{
                  marginLeft: "10px",
                  fontSize: "1.2rem",
                  color: "#333",
                }}
              >
                Based on 115 reviews
              </span>
            </div>
            <div style={{ marginTop: "15px" }}>
              <img
                src={tripAdvisorLogo}
                alt="TripAdvisor"
                style={{ width: "100px", height: "auto" }}
              />
            </div>
          </div>
          <div className="testimonial-scroll">
            <div className="horizontal-scroll-container">
              <div ref={scrollRef} className="horizontal-scroll-content">
                {testimonials.map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.id}
                    profileImage={testimonial.profileImage}
                    name={testimonial.name}
                    date={testimonial.date}
                    rating={testimonial.rating}
                    review={testimonial.review}
                    onReadMore={() => {}}
                  />
                ))}
              </div>
              <button
                className="scroll-button left"
                onClick={() => scroll("left")}
              >
                &lt;
              </button>
              <button
                className="scroll-button right"
                onClick={() => scroll("right")}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

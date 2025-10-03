import React from "react";
import "../css/about.css";

const principles = [
  {
    title: "Cultural Respect and Authenticity",
    description:
      "We are committed to promoting and preserving the rich cultural heritage of Ethiopia. We strive to provide authentic experiences that respect local customs, traditions, and communities, ensuring that travelers gain a genuine understanding of the places they visit.",
  },
  {
    title: "Sustainability and Environmental Responsibility",
    description:
      "   We prioritize sustainable tourism practices that minimize our environmental impact. We encourage eco-friendly initiatives, support local conservation efforts, and promote responsible travel to protect Ethiopia’s natural beauty for future generations.",
  },
  {
    title: "Customer-Centric Approach",
    description:
      "Our travelers are at the heart of everything we do. We listen to their needs and preferences, providing personalized itineraries and exceptional service to ensure a memorable and enjoyable experience tailored to each individual.",
  },
  {
    title: "Safety and Comfort",
    description:
      "The safety and well-being of our guests is our top priority. We maintain high standards for our transportation, accommodations, and activities, ensuring a comfortable and secure travel experience throughout the journey.",
  },
  {
    title: "Local Empowerment",
    description:
      "We believe in the importance of supporting local communities. By partnering with local guides, artisans, and businesses, we contribute to the economic development of the regions we visit, fostering a positive impact on the communities we engage with.",
  },
  {
    title: "Transparency and Integrity",
    description:
      "   We operate with honesty and transparency in all our dealings. Our pricing is clear, with no hidden fees, and we provide accurate information about our tours and services to build trust with our clients.",
  },
  {
    title: "Continuous Improvement",
    description:
      " We are dedicated to learning and evolving. We actively seek feedback from our travelers and team members to improve our services continually. Our commitment to excellence drives us to innovate and enhance the travel experience we offer.",
  },
];

const Principles = () => {
  return (
    <section className="principles-section">
      <div className="principles-header">
        <h2>Core Principles</h2>
        <p>
          At Fidel Ethiopia Tours, our values guide every journey we create.
          These principles reflect our commitment to meaningful, responsible,
          and enriching travel.
        </p>
      </div>
      <div className="principles-grid">
        {principles.map((principle, index) => (
          <div className="principle-card" key={index}>
            <h4 className="principle-title">{principle.title}</h4>
            <p className="principle-description">{principle.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Principles;

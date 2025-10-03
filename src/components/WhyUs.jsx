import React, { useRef } from "react";
import WhyUsCard from "./WhyUsCard";
import "../css/Home.css";

import omo from "../assets/Omo-Ethiopia.png";
import localExpertiseIcon from "../assets/Local Expertise.png";
import exclusiveServiceIcon from "../assets/Exclusive Service.png";
import supportingLocalCommunitiesIcon from "../assets/Supporting Local Communities.png";
import sustainabilityIcon from "../assets/Sustainability.png";
import flexiablityIcon from "../assets/Flexiablity.png";
import culturalImmersionIcon from "../assets/Cultural Immersion.png";
import safetyComfortIcon from "../assets/Safety and Comfort.png";
import passionAdventureIcon from "../assets/Passion for Adventure.png";
import communityEngagementIcon from "../assets/Community Engagement.png";
import memorableExperiencesIcon from "../assets/Memorable Experiences.png";

const WhyUs = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -600 : 600; // Adjusted to match new card width
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const cards = [
    {
      id: "localExpertise",
      icon: localExpertiseIcon,
      title: "Local Expertise",
      description:
        "Our team is composed of passionate locals who possess an in-depth knowledge of Ethiopia's rich history, diverse cultures, and stunning landscapes. With our local guides, you’ll gain unique insights and access to hidden gems that only insiders know about, ensuring an authentic experience that goes beyond the typical tourist path.",
    },
    {
      id: "exclusiveService",
      icon: exclusiveServiceIcon,
      title: "Exclusive Service",
      description:
        "We pride ourselves on offering personalized service tailored to your individual needs and preferences. From the moment you reach out to us until the end of your journey, our dedicated team is here to provide you with exceptional support, ensuring your travel experience is seamless and unforgettable.",
    },
    {
      id: "supportingCommunities",
      icon: supportingLocalCommunitiesIcon, // Replace with actual icon URL
      title: "Supporting Local Communities",
      description:
        "We are committed to making a positive impact on the communities we visit. By partnering with local artisans, guides, and businesses, we ensure that your travel dollars help support the local economy. We also engage in community initiatives that promote education, health, and cultural preservation, allowing you to travel with purpose.",
    },
    {
      id: "sustainability",
      icon: sustainabilityIcon, // Replace with actual icon URL
      title: "Sustainability",
      description:
        "Environmental responsibility is at the core of our operations. We strive to minimize our ecological footprint by promoting eco-friendly practices, such as using sustainable transportation and supporting conservation efforts. When you travel with us, you can feel good knowing that you’re contributing to the preservation of Ethiopia’s natural beauty for future generations.",
    },
    {
      id: "flexibility",
      icon: flexiablityIcon, // Replace with actual icon URL
      title: "Flexibility",
      description:
        "We understand that every traveler is unique, and plans can change. Our flexible itineraries allow you to customize your journey according to your interests and schedule. Whether you want to explore ancient ruins, hike breathtaking trails, or immerse yourself in local culture, we work with you to create the perfect travel experience.",
    },
    {
      id: "culturalImmersion",
      icon: culturalImmersionIcon, // Replace with actual icon URL
      title: "Cultural Immersion",
      description:
        "Experience Ethiopia like never before! Our tours are designed to immerse you in the local culture, from traditional cooking classes and dance performances to visits with local families. You’ll leave not only with memories but also with a deeper understanding of the people and traditions that make Ethiopia so special.",
    },
    {
      id: "safetyComfort",
      icon: safetyComfortIcon, // Replace with actual icon URL
      title: "Safety and Comfort",
      description:
        "Your safety is our top priority. We maintain high standards for all our accommodations and transportation, ensuring that you travel comfortably and securely throughout your journey. Our knowledgeable team is always available to address any concerns you may have.",
    },
    {
      id: "passionAdventure",
      icon: passionAdventureIcon, // Replace with actual icon URL
      title: "Passion for Adventure",
      description:
        "Our love for exploration drives us to create unique itineraries filled with adventure and discovery. Whether you’re seeking thrilling outdoor activities or serene moments in nature, we’re here to help you find the perfect balance between excitement and relaxation.",
    },
    {
      id: "communityEngagement",
      icon: communityEngagementIcon, // Replace with actual icon URL
      title: "Community Engagement",
      description:
        "We believe in giving back to the communities we visit. Through various initiatives, we support local charities and cultural projects, ensuring that tourism benefits the people and places we cherish.",
    },
    {
      id: "memorableExperiences",
      icon: memorableExperiencesIcon, // Replace with actual icon URL
      title: "Memorable Experiences",
      description:
        "Ultimately, our goal is to create unforgettable experiences that resonate long after your journey ends. With Fidel Ethiopia Tours, you’ll embark on a transformative adventure that enriches your life and broadens your horizons.",
    },
  ];

  return (
    <section className="why-us-section py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-12 text-center">
            <h2 className="section-title mb-2">Why Travel with Us?</h2>
            <p className="lead text-muted">
              At Fidel Ethiopia Tours, we believe that travel should be more
              than just a journey; it should be an enriching experience that
              connects you with the heart and soul of your destination.
            </p>
          </div>
        </div>
        <div className="horizontal-scroll-container">
          <div ref={scrollRef} className="horizontal-scroll-content">
            {cards.map((card) => (
              <WhyUsCard
                key={card.id}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
          <button className="scroll-button left" onClick={() => scroll("left")}>
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
    </section>
  );
};

export default WhyUs;

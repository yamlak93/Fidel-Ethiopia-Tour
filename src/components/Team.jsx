import React from "react";
import "../css/about.css";
import founderImage from "../assets/fidelFounder.webp"; // Replace with actual image path

const FounderCard = () => (
  <div className="team-card founder-card">
    <img src={founderImage} alt="Elias Alemayehu" className="founder-image" />
    <h3 className="team-name">Elias Alemayehu</h3>
    <p className="team-role">Founder & CEO</p>
    <p className="team-description">
      Our CEO, Elias Alemayehu, is a remarkable leader with an extensive
      background in tourism, bringing 15 years of experience guiding tourists
      across the breathtaking landscapes and rich cultures of Ethiopia. His
      passion for showcasing the beauty and heritage of the country has not only
      enriched the experiences of countless travelers but has also played a
      vital role in promoting Ethiopia as a premier travel destination. Holding
      a Master’s degree in Tourism and Hospitality Management from Addis Ababa
      University, Elias combines his academic knowledge with practical
      expertise, ensuring that our organization is at the forefront of the
      industry. His commitment to excellence and deep understanding of the
      tourism sector empowers our team to provide exceptional services, making
      every journey memorable for our clients.
    </p>
  </div>
);

const TeamMemberCard = ({ title, description }) => (
  <div className="team-card member-card">
    <h4 className="team-role">{title}</h4>
    <p className="team-description">{description}</p>
  </div>
);

const Team = () => {
  const teamMembers = [
    {
      title: "Multilingual Guides",
      description:
        "Our multilingual guides are the heart and soul of our tours. Fluent in several languages, including English, French, Spanish, German, and Amharic, they are not just knowledgeable about Ethiopia’s rich history and diverse cultures—they are also skilled storytellers who bring each destination to life. With their warm hospitality and deep understanding of local customs, our guides create immersive experiences that resonate with travelers from around the world.",
    },
    {
      title: "Skilled Cooks",
      description:
        "Food is an integral part of any travel experience, and our skilled cooks are here to delight your taste buds. With a passion for Ethiopian cuisine, they prepare authentic dishes using fresh, local ingredients. Whether you’re enjoying traditional meals or exploring contemporary flavors, our cooks ensure that every meal is a culinary adventure that reflects the rich heritage of Ethiopia. ",
    },
    {
      title: "Experienced Drivers",
      description:
        "Safety and comfort are our top priorities, and our experienced drivers are dedicated to providing a smooth journey throughout your travels. With extensive knowledge of Ethiopia’s roads and landscapes, they navigate the routes with ease, allowing you to relax and soak in the stunning scenery. Our drivers are not only skilled behind the wheel but also friendly companions who enhance your travel experience with their local insights.",
    },
    {
      title: "Tour Assistances",
      description:
        "Our commitment to exceptional service extends beyond the road. Our 24/7 online tour operators are always available to assist you, answer your questions, and provide support throughout your journey. Whether you need help planning your itinerary or have inquiries during your trip, our dedicated team is just a message away, ensuring that you have a seamless and enjoyable experience from start to finish.",
    },
  ];

  return (
    <section className="team-section">
      <div className="team-intro">
        <h2>Meet Our Team</h2>
        <p>
          At Fidel Ethiopia Tours, our strength lies in our dedicated team of
          professionals who are passionate about showcasing the beauty and
          culture of Ethiopia.
        </p>
      </div>

      <div className="team-hierarchy">
        <FounderCard />
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              title={member.title}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

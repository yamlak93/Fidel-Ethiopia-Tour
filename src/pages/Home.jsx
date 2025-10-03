import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import WhoWeAre from "../components/WhoWeAre";
import TopTours from "../components/TopTours";
import WhyUs from "../components/WhyUs";
import TopDestination from "../components/TopDestination";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhoWeAre />
      <TopTours />
      <WhyUs />
      <TopDestination />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;

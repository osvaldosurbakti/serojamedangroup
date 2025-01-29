import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from '../components/Carousel';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import AboutUs from '../components/AboutUs';
import Business from '../components/Business'; 

function Home() {
  const navigate = useNavigate();

  return (
    <div className="font-sans">

      {/* Carousel */}
      <Carousel />

      {/* Hero Section */}
      <Hero />

      {/* About Us Section */}
      <AboutUs />

      {/* Business Section */}
      <Business /> 

      {/* Testimonials Section */}
      <Testimonials />

      {/* Call to Action Section */}
      <CallToAction />
    </div>
  );
}

export default Home;

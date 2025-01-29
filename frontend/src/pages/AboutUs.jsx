// AboutUs.jsx
import React from 'react';
import { FaHome, FaSeedling, FaHandshake } from 'react-icons/fa';
import Journey from '../components/Journey'; // Import Journey
import Founder from '../components/Founder'; // Import Founder
import Mission from '../components/Mission'; // Import Mission
import Values from '../components/Values'; // Import Values
import ContactButton from '../components/ContactButton';

function AboutUs() {
  return (
    <section className="bg-gradient-to-r text-white py-20 px-6">
      <div className="max-w-7xl mx-auto bg-white p-12 rounded-3xl shadow-2xl">

        {/* Section Title */}
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-8 tracking-wide leading-tight">About Us</h1>
        
        {/* Company Overview */}
        <p className="text-lg text-gray-700 leading-relaxed text-center mb-12 max-w-3xl mx-auto">
          With over 30 years of experience, we specialize in delivering high-quality construction services. Our team is driven by passion, excellence, and innovation to ensure that every project exceeds expectations.
        </p>

        {/* Mission & Vision Section */}
        <div className="space-y-16">
          <Mission /> {/* Mission Component */}
        </div>

        {/* Values Section */}
        <div className="space-y-16">
          <Values /> {/* Values Component */}
        </div>

        {/* Founder Section */}
        <div className="space-y-16">
          <Founder /> {/* Founder Component */}
        </div>

        {/* Company Journey Section */}
        <div className="space-y-16">
          <Journey /> {/* Journey Component */}
        </div>

        {/* Contact Button */}
<ContactButton/>

      </div>
    </section>
  );
}

export default AboutUs;

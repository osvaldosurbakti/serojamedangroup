import React from 'react';
import { FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center py-24 px-6 relative overflow-hidden">
      {/* Decorative Wave */}
      <div className="absolute top-0 left-0 w-full h-24 bg-blue-500 transform -skew-y-6 z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
          Start Your Dream Project Today
        </h2>
        <p className="text-lg md:text-xl mb-8 animate-fade-in-up delay-100">
          Contact us and let's make your vision a reality.
        </p>

        {/* Centered Link with Icon */}
        <Link
          to="/contact-us"
          className="bg-white text-blue-600 py-2 px-4 text-md font-semibold rounded-md flex items-center justify-center gap-3 transition-all duration-300 ease-in-out hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg transform hover:scale-105 mx-auto max-w-max"
        >
          <FaRocket className="text-lg" />
          <span>Contact Us</span>
        </Link>
      </div>
    </section>
  );
}

export default CallToAction;

import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section
      className="relative bg-cover bg-center text-white text-center py-32 px-4 flex items-center justify-center"
      style={{ backgroundImage: "url('/images/hero-image.jpg')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black bg-opacity-70 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-3xl mx-auto">
        {/* Title */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 uppercase tracking-wider leading-tight animate-fade-in"
        >
          Building the Future
        </h1>

        {/* Subtitle */}
        <p className="text-2xl sm:text-3xl lg:text-4xl mb-10 text-yellow-400 font-semibold leading-relaxed animate-fade-in delay-200 drop-shadow-lg">
          Expertise in quality construction, innovation, <br className="hidden sm:block" />
          and delivering excellence for over 30 years.
        </p>

        {/* Call-to-Action Button */}
        <Link
          to="/contact-us"
          className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3 text-lg sm:text-xl font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 animate-fade-in delay-400"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}

export default Hero;

import React from 'react';
import { FaBullseye, FaEye, FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const AboutUs = () => {

  return (
    <section className="py-16 bg-gradient-to-r from-blue-500 to-indigo-300 text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-4">About Us</h2>
        <p className="text-lg mb-6">
          For three decades, we've been transforming visions into reality. Our expertise and commitment to excellence have made us a trusted name in the construction industry. We are driven by a passion to innovate and deliver quality at every step of the journey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6">
          {/* Mission Section */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all">
            <FaBullseye className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-700 text-center">
              To deliver exceptional value through innovative solutions and high-quality construction.
            </p>
          </div>
          
          {/* Vision Section */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all">
            <FaEye className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Vision</h3>
            <p className="text-gray-700 text-center">
              To be recognized as a leader in the construction industry, known for our reliability, quality, and innovation.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <Link
          to="/about-us"
          className="px-8 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300 shadow-lg transform hover:scale-105"
        >
          <FaRocket className="inline-block mr-2" />
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;

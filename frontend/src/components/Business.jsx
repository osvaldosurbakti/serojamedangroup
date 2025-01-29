import { FaBuilding, FaLightbulb, FaHandshake } from 'react-icons/fa';
import React from 'react';
import { Link } from 'react-router-dom';

const Business = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Our Business</h2>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-10">
          Explore our diverse range of services that are designed to meet the evolving needs of our clients. From real estate development to innovative consulting services, we are committed to delivering sustainable solutions.
        </p>

        {/* Business Areas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaBuilding className="text-5xl text-blue-500 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Real Estate Development</h3>
            <p className="text-gray-600 mb-4">
              We specialize in the development of residential, commercial, and mixed-use properties that contribute to the growth of urban spaces.
            </p>
            <Link
              to="/business"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Learn More
            </Link>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaLightbulb className="text-5xl text-yellow-500 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Consulting Services</h3>
            <p className="text-gray-600 mb-4">
              Our expert consultants provide innovative solutions for businesses, helping them navigate challenges and drive growth.
            </p>
            <Link
              to="/business"
              className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300"
            >
              Learn More
            </Link>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaHandshake className="text-5xl text-green-500 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Partnerships</h3>
            <p className="text-gray-600 mb-4">
              We believe in building strong partnerships with key stakeholders, fostering growth through collaboration and mutual success.
            </p>
            <Link
              href="/business"
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;

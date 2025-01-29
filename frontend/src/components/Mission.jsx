// components/Mission.jsx
import React from 'react';
import { FaHandshake, FaHome } from 'react-icons/fa';

function Mission() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Our Mission & Vision</h2>

      {/* Mission & Vision Sections (Horizontal Layout) */}
      <div className="flex flex-col sm:flex-row justify-center gap-8">
        {/* Mission Section */}
        <div className="flex flex-col items-center bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out w-full sm:w-1/2 transform hover:scale-105">
          <FaHandshake className="text-6xl text-black mb-4 transform hover:scale-125 transition duration-300" />
          <h3 className="text-2xl font-semibold text-black mb-4">Our Mission</h3>
          <p className="text-lg text-black text-center sm:text-left">
            To build trust and long-lasting relationships by delivering outstanding projects with precision and professionalism.
          </p>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col items-center bg-gradient-to-r from-green-200 via-green-300 to-green-400 p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out w-full sm:w-1/2 transform hover:scale-105">
          <FaHome className="text-6xl text-black mb-4 transform hover:scale-125 transition duration-300" />
          <h3 className="text-2xl font-semibold text-black mb-4">Our Vision</h3>
          <p className="text-lg text-black text-center sm:text-left">
            To be a recognized leader in the construction industry, known for our commitment to quality and innovation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mission;

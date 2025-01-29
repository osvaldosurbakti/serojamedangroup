// components/Values.jsx
import React from 'react';
import { FaStar, FaUsers, FaTrophy } from 'react-icons/fa';

function Values() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Our Core Values</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Excellence Value */}
        <div className="flex flex-col items-center bg-gradient-to-r from-yellow-200 to-yellow-400 p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
          <FaStar className="text-6xl text-yellow-600 mb-4 transform transition duration-300 ease-in-out hover:text-yellow-800" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Excellence</h3>
          <p className="text-lg text-gray-600 text-center">
            We strive for excellence in everything we do, ensuring high standards in quality and performance.
          </p>
        </div>
        
        {/* Collaboration Value */}
        <div className="flex flex-col items-center bg-gradient-to-r from-green-200 to-green-400 p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
          <FaUsers className="text-6xl text-green-600 mb-4 transform transition duration-300 ease-in-out hover:text-green-800" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Collaboration</h3>
          <p className="text-lg text-gray-600 text-center">
            We believe in the power of teamwork, working together to achieve success.
          </p>
        </div>

        {/* Innovation Value */}
        <div className="flex flex-col items-center bg-gradient-to-r from-blue-200 to-blue-400 p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
          <FaTrophy className="text-6xl text-blue-600 mb-4 transform transition duration-300 ease-in-out hover:text-blue-800" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Innovation</h3>
          <p className="text-lg text-gray-600 text-center">
            We embrace innovation and creativity, continually seeking new solutions to improve our work.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Values;

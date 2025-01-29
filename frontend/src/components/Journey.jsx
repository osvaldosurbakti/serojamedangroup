// components/Journey.jsx
import React from 'react';
import { FaMapMarkedAlt } from 'react-icons/fa';

function Journey() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Our Journey</h2>
      
      <div className="space-y-8">
        {/* Milestone 1992 */}
        <div className="flex items-center bg-gradient-to-r from-blue-100 to-blue-300 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
          <FaMapMarkedAlt className="text-blue-600 text-4xl mr-6 transform transition duration-300 ease-in-out hover:text-blue-800" />
          <div className="text-lg text-gray-600">
            <span className="font-semibold text-xl text-gray-800">1992:</span> Founded by John Doe with a vision to provide innovative construction solutions.
            <p className="text-sm text-gray-500 mt-2 italic">"The start of something big, focusing on quality and sustainability." - John Doe</p>
          </div>
        </div>

        {/* Milestone 2005 */}
        <div className="flex items-center bg-gradient-to-r from-green-100 to-green-300 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
          <FaMapMarkedAlt className="text-green-600 text-4xl mr-6 transform transition duration-300 ease-in-out hover:text-green-800" />
          <div className="text-lg text-gray-600">
            <span className="font-semibold text-xl text-gray-800">2005:</span> Expanded operations to include commercial projects, focusing on office buildings and retail spaces.
            <p className="text-sm text-gray-500 mt-2 italic">"Expanding our horizon to meet growing demand in commercial real estate." - CEO</p>
          </div>
        </div>

        {/* Milestone 2015 */}
        <div className="flex items-center bg-gradient-to-r from-yellow-100 to-yellow-300 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
          <FaMapMarkedAlt className="text-yellow-600 text-4xl mr-6 transform transition duration-300 ease-in-out hover:text-yellow-800" />
          <div className="text-lg text-gray-600">
            <span className="font-semibold text-xl text-gray-800">2015:</span> Achieved recognition as an industry leader, with a strong portfolio of sustainable and award-winning projects.
            <p className="text-sm text-gray-500 mt-2 italic">"Winning awards for innovation and sustainability." - Marketing Director</p>
          </div>
        </div>

        {/* Milestone Present */}
        <div className="flex items-center bg-gradient-to-r from-purple-100 to-purple-300 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
          <FaMapMarkedAlt className="text-purple-600 text-4xl mr-6 transform transition duration-300 ease-in-out hover:text-purple-800" />
          <div className="text-lg text-gray-600">
            <span className="font-semibold text-xl text-gray-800">Present:</span> Continuing to innovate with cutting-edge designs and sustainable practices, expanding our services globally.
            <p className="text-sm text-gray-500 mt-2 italic">"Setting trends for the future of the construction industry." - CTO</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Journey;

// components/Founder.jsx
import React from 'react';
import { FaUserTie, FaUser, FaLaptopCode } from 'react-icons/fa';

function Founder() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Our Leadership</h2>
      
      {/* Leadership Cards (Grid Layout) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Founder Card */}
        <div className="flex flex-col items-center bg-gradient-to-r from-blue-100 to-blue-300 p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out">
          <FaUserTie className="text-6xl text-blue-600 mb-4 transform transition duration-300 ease-in-out hover:text-blue-800" />
          <div className="text-center">
            <p className="text-2xl font-semibold text-gray-800 mb-2">John Doe</p>
            <p className="text-lg text-gray-600 mb-4">Founder & CEO - With a vision to reshape the construction industry, John started the company in 1992, focusing on sustainable and innovative construction practices.</p>
          </div>
        </div>

        {/* CTO Card */}
        <div className="flex flex-col items-center bg-gradient-to-r from-green-100 to-green-300 p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out">
          <FaLaptopCode className="text-6xl text-green-600 mb-4 transform transition duration-300 ease-in-out hover:text-green-800" />
          <div className="text-center">
            <p className="text-2xl font-semibold text-gray-800 mb-2">Jane Smith</p>
            <p className="text-lg text-gray-600 mb-4">Chief Technology Officer - A driving force behind our tech innovation, Jane ensures the integration of cutting-edge technologies to enhance project efficiency and sustainability.</p>
          </div>
        </div>

        {/* COO Card */}
        <div className="flex flex-col items-center bg-gradient-to-r from-purple-100 to-purple-300 p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out">
          <FaUser className="text-6xl text-purple-600 mb-4 transform transition duration-300 ease-in-out hover:text-purple-800" />
          <div className="text-center">
            <p className="text-2xl font-semibold text-gray-800 mb-2">Michael Johnson</p>
            <p className="text-lg text-gray-600 mb-4">Chief Operating Officer - Michael oversees the daily operations of the company, ensuring smooth project execution and high client satisfaction.</p>
          </div>
        </div>
      </div>
      
      {/* Additional Information */}
      <div className="text-center mt-8">
        <p className="text-lg text-gray-600 mb-4">Our leadership team works together with dedication, shaping the future of construction through innovative solutions and a commitment to excellence.</p>
      </div>
    </div>
  );
}

export default Founder;

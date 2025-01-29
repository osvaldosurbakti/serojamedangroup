// components/BusinessItem.jsx
import React from 'react';
import { FaBuilding, FaCogs, FaLaptopCode } from 'react-icons/fa'; // Import icons
import LearnMoreButton from './LearnMoreButton'; // Import LearnMoreButton

const BusinessItem = ({ item, index, handleLearnMore }) => {
  // Select an icon based on business type
  const getIcon = (title) => {
    switch (title) {
      case 'Real Estate Development':
        return <FaBuilding className="text-blue-500 text-6xl mb-4" />;
      case 'Construction & Engineering':
        return <FaCogs className="text-yellow-500 text-6xl mb-4" />;
      case 'Technology & Innovation':
        return <FaLaptopCode className="text-green-500 text-6xl mb-4" />;
      default:
        return <FaBuilding className="text-gray-500 text-6xl mb-4" />;
    }
  };

  return (
    <div className="bg-white shadow-xl rounded-lg p-8 transform hover:scale-105 transition-all duration-500 ease-in-out">
      <div className="text-center flex flex-col items-center"> {/* Centering the content */}
        {/* Dynamic Icon */}
        <div className="mb-6 flex justify-center">
          {getIcon(item.title)} {/* Centering icon */}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{item.title}</h3>

        {/* Description */}
        <p className="text-gray-600 text-lg mb-6">{item.description}</p>

        {/* Learn More Button */}
        <LearnMoreButton onClick={() => handleLearnMore(index)} />
      </div>
    </div>
  );
};

export default BusinessItem;

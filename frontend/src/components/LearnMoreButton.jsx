// components/LearnMoreButton.jsx
import React from 'react';

const LearnMoreButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105"
    >
      Learn More
    </button>
  );
};

export default LearnMoreButton;

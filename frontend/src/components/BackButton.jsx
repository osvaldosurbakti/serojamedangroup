// components/BackButton.jsx
import React from 'react';


const BackButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="mt-6 px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-300"
    >
      Back to Overview
    </button>
  );
};

export default BackButton;

// src/components/SectionTitle.jsx
import React from 'react';

const SectionTitle = ({ title, description }) => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">{title}</h1>
      <p className="text-xl text-gray-500 max-w-2xl mx-auto">{description}</p>
    </div>
  );
};

export default SectionTitle;

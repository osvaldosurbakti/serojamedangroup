// components/BusinessDetail.jsx
import React from 'react';
import BackButton from './BackButton'; // Import BackButton

const BusinessDetail = ({ businessItem, handleBack }) => {
  return (
    <div className="mt-16 bg-white py-12 px-10 shadow-2xl rounded-lg ease-in-out">
      {/* Business Title */}
      <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">{businessItem.title}</h2>

      {/* Business Description */}
      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        {businessItem.detail}
      </p>

      {/* Back Button */}
      <div className="text-center">
        <BackButton onClick={handleBack} />
      </div>
    </div>
  );
};

export default BusinessDetail;

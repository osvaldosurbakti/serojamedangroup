import React, { useState } from 'react';
import BusinessItem from '../components/BusinessItem'; // Import BusinessItem
import BusinessDetail from '../components/BusinessDetail'; // Import BusinessDetail
import ContactButton from '../components/ContactButton'; // Import ContactButton

const Business = () => {
  const businessItems = [
    {
      title: 'Real Estate Development',
      description: 'Building communities and infrastructure for the future.',
      detail: 'We create residential, commercial, and industrial spaces with a focus on sustainability and community impact.',
    },
    {
      title: 'Construction & Engineering',
      description: 'Innovative engineering solutions to complex challenges.',
      detail: 'From bridges to skyscrapers, our engineering expertise delivers durable and innovative solutions.',
    },
    {
      title: 'Manufacturing',
      description: 'High-quality, sustainable products for various markets.',
      detail: 'Our manufacturing units produce high-quality products with an emphasis on environmental responsibility.',
    },
  ];

  const [activeBusinessIndex, setActiveBusinessIndex] = useState(null);

  const handleLearnMore = (index) => {
    setActiveBusinessIndex(index);
  };

  const handleBack = () => {
    setActiveBusinessIndex(null);
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Business</h2>
        <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
          Seroja Medan Group is a leader across multiple industries, providing innovative
          solutions and delivering excellence through our diverse business portfolio.
        </p>

        {/* Overview of Business Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessItems.map((item, index) => (
            <BusinessItem
              key={index}
              item={item}
              index={index}
              handleLearnMore={handleLearnMore}
            />
          ))}
        </div>

        {/* Detailed Business Information */}
        {activeBusinessIndex !== null && (
          <BusinessDetail
            businessItem={businessItems[activeBusinessIndex]}
            handleBack={handleBack}
          />
        )}

        {/* General Learn More Button */}
        <ContactButton />
      </div>
    </section>
  );
};

export default Business;

import React from 'react';

const Header = () => {
  return (
    <header
      className="relative bg-cover bg-center text-white h-96 flex flex-col items-center justify-start pt-16" // Flex column for vertical alignment
      style={{ backgroundImage: "url('/images/hero-image.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-2xl mx-auto text-center flex flex-col items-center">
        {/* Logo */}
        <img
          src="/images/resized_companylogo.jpg"
          alt="Company Logo"
          className="w-28 h-auto mb-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110 focus-visible:scale-110"
        />

        {/* Text Content */}
        <div className="mt-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide mb-2 uppercase leading-tight">
            Seroja Medan Group
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 italic leading-relaxed">
            Building the Future, Together
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;

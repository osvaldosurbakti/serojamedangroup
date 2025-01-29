import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import project1 from '/images/kons1.jpeg';
import project2 from '/images/kons2.jpeg';
import project3 from '/images/kons3.jpeg';

const images = [
  { src: project1, text: "Project 1" },
  { src: project2, text: "Project 2" },
  { src: project3, text: "Project 3" }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Function to go to a specific slide by index
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Automatically change the slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change image every 3 seconds

    // Cleanup the interval when the component is unmounted or when the effect is rerun
    return () => clearInterval(interval);
  }, []);

  return (
<div className="relative max-w-full mx-auto overflow-hidden rounded-lg shadow-xl -mt-4">
{/* Image Slide */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="relative w-full flex-shrink-0">
            <img
              src={image.src}
              alt={`Project ${index + 1}`}
              className="w-full h-full object-cover rounded-lg transition-transform duration-500 transform hover:scale-105"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-shadow-md text-center">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">{image.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Left and Right Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 text-3xl rounded-full z-10 hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 text-3xl rounded-full z-10 hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
      >
        <FaChevronRight />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full ${index === currentIndex ? 'bg-yellow-500' : 'bg-black bg-opacity-50'} transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

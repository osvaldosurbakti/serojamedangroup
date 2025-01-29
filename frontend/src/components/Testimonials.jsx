import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, Company XYZ",
      feedback: "The team exceeded expectations and delivered a project we are proud of.",
    },
    {
      name: "Jane Smith",
      role: "Founder, Company ABC",
      feedback: "Exceptional professionalism and attention to detail in every aspect.",
    },
    {
      name: "Mike Johnson",
      role: "CTO, Company LMN",
      feedback: "They delivered on time with exceptional quality. Highly recommend them.",
    },
    {
      name: "Sarah Lee",
      role: "Managing Director, XYZ Group",
      feedback: "A great experience from start to finish. They understand our needs perfectly.",
    },
    {
      name: "Linda Roberts",
      role: "VP of Operations, ABC Corp",
      feedback: "Their attention to detail and dedication to quality is second to none.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to the previous testimonial
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Navigate to the next testimonial
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="bg-gradient-to-r from-blue-100 to-gray-50 py-16 px-4 relative overflow-hidden">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
        What Our Clients Say
      </h2>

      <div className="relative max-w-3xl mx-auto overflow-hidden rounded-xl shadow-2xl border-2 border-yellow-400">
        {/* Testimonial Slide */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full px-6 py-8"
            >
              <div className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                <p className="italic text-lg text-gray-700 mb-6">{`"${testimonial.feedback}"`}</p>
                <div className="font-semibold text-gray-800">
                  <p className="text-xl">{`- ${testimonial.name}`}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevTestimonial}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full z-10 hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full z-10 hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="mt-6 flex justify-center gap-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full ${
              index === currentIndex ? "bg-yellow-500" : "bg-gray-400"
            } transition-all duration-300`}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;

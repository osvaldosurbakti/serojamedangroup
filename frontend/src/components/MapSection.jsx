// src/components/MapSection.jsx
import React from 'react';

const MapSection = () => {
  return (
    <div className="col-span-1 md:col-span-2">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Find Us on the Map</h3>
      <iframe
        title="Map Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24954.17525592286!2d98.66991449545957!3d3.5834958921864655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312a2b9b7a98bf%3A0x22cc75d7b354b967!2sJl.%20Example%20Street%2C%20Medan%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1676998491604!5m2!1sen!2sid"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapSection;

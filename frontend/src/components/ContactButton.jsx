import React from 'react';
import { Link } from 'react-router-dom';

const ContactButton = () => {
  return (
    <div className="mt-10 text-center">
      <Link
        to="/contact-us"
        className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-md shadow-md hover:bg-yellow-600 transition duration-300"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default ContactButton;

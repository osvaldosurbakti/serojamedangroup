import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons

const ContactDetails = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-12">
      
      {/* Contact Information Section */}
      <div>
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Contact Information</h2>
        <p className="text-lg text-gray-700 mb-6">
          Our team is here to assist you. You can reach us through any of the following channels:
        </p>
        
        <ul className="space-y-6 text-lg text-gray-700">
          {/* Email */}
          <li className="flex items-center">
            <FaEnvelope className="text-yellow-500 mr-3 text-xl" />
            <strong className="text-yellow-500">Email:</strong>
            <a
              href="mailto:support@seroja-group.com"
              className="ml-2 text-black-600 hover:text-blue-700"
            >
              support@seroja-group.com
            </a>
          </li>
          
          {/* Phone */}
          <li className="flex items-center">
            <FaPhoneAlt className="text-yellow-500 mr-3 text-xl" />
            <strong className="text-yellow-500">Phone:</strong>
            <a
              href="https://wa.me/62123456789"
              className="ml-2 text-black-600 hover:text-green-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              +62 123-456-789
            </a>
          </li>
          
          {/* Address */}
          <li className="flex items-center">
            <FaMapMarkerAlt className="text-yellow-500 mr-3 text-xl" />
            <strong className="text-yellow-500">Address:</strong>
            <a
              href="https://www.google.com/maps?q=Jl.+Example+Street,+Medan,+Indonesia"
              className="ml-2 text-black-600 hover:text-red-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jl. Example Street, Medan, Indonesia
            </a>
          </li>
        </ul>
      </div>

      {/* Business Hours Section */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Business Hours</h3>
        <p className="text-lg text-gray-700 mb-6">
          Our team is available during the following times:
        </p>
        
        <ul className="space-y-3 text-lg text-gray-700">
          <li><strong className="text-yellow-500">Monday - Friday:</strong> 9:00 AM - 6:00 PM</li>
          <li><strong className="text-yellow-500">Saturday:</strong> 10:00 AM - 2:00 PM</li>
          <li><strong className="text-yellow-500">Sunday:</strong> Closed</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactDetails;

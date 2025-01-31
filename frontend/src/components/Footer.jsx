import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="container mx-auto px-6">

        {/* Top Section: Content Left and Social Media Right */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-8 mb-8">
          
          {/* Left Section: Company Name and Navigation */}
          <div>
            <p className="text-2xl font-semibold text-yellow-400 mb-4">
              Seroja Medan Group
            </p>
            <ul className="space-y-2">
            <li>
            <Link to="/"
                  className="text-gray-300 hover:text-yellow-500 transition-colors duration-300"
                >
                  Home
                  </Link>
              </li>
              <li>
              <Link to="/about-us"
                  className="text-gray-300 hover:text-yellow-500 transition-colors duration-300"
                >
                  About Us
                  </Link>
              </li>
              <li>
              <Link to="/business"
                  className="text-gray-300 hover:text-yellow-500 transition-colors duration-300"
                >
                  Business
                  </Link>
              </li>
              <li>
              <Link to="/newsevents"
                  className="text-gray-300 hover:text-yellow-500 transition-colors duration-300"
                >
                  News & Events
                  </Link>
              </li>
              <li>
              <Link to="/contact-us"
                  className="text-gray-300 hover:text-yellow-500 transition-colors duration-300"
                >
                  Contact Us
                  </Link>
              </li>
            </ul>
          </div>

          {/* Right Section: Social Media Links */}
          <div className="flex gap-6 text-3xl text-gray-400">
          <Link to="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
              className="hover:text-yellow-500 transition-colors duration-300"
            >
              <FaFacebook />
              </Link>
            <Link to="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
              className="hover:text-yellow-500 transition-colors duration-300"
            >
              <FaInstagram />
              </Link>
            <Link to="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="hover:text-yellow-500 transition-colors duration-300"
            >
              <FaLinkedin />
              </Link>
            <Link to="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              title="Twitter"
              className="hover:text-yellow-500 transition-colors duration-300"
            >
              <FaTwitter />
              </Link>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2025 Seroja Medan Group. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;

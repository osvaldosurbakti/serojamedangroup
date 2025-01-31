import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Cek apakah user sudah login berdasarkan localStorage atau sesi lainnya
    const user = localStorage.getItem('user');
    setIsAuthenticated(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user'); // Hapus status login
    setIsAuthenticated(false);
    navigate('/login'); // Redirect ke halaman login
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Business', path: '/business' },
    { label: 'News & Event', path: '/newsevents' }, // Tambahan menu
    { label: 'Contact Us', path: '/contact-us' },
  ];

  return (
    <nav className="bg-gray-900 text-white fixed top-0 left-0 w-full z-50 shadow-lg h-16">
      <div className="container mx-auto flex justify-between items-center px-4 h-full">
        {/* Brand */}
        <div className="text-3xl font-extrabold text-yellow-400 cursor-pointer hover:text-yellow-500 transition-colors duration-300">
          <Link to="/">Seroja Medan Group</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-lg">
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="px-6 py-2 text-white hover:bg-yellow-400 hover:text-gray-900 rounded-md transition-all duration-300 ease-in-out"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Login / Logout Button */}
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 transition-all duration-300"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="px-6 py-2 bg-yellow-500 text-gray-900 font-bold rounded-md hover:bg-yellow-600 transition-all duration-300">
                Login
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="lg:hidden text-3xl text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✖️' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-800 p-6 transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col gap-6 text-lg">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="block text-white px-6 py-3 border-b-2 border-yellow-400 hover:bg-yellow-400 hover:text-gray-800 rounded-md transition-all duration-300 ease-in-out"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          {/* Login / Logout Button in Mobile Menu */}
          <li>
            {isAuthenticated ? (
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="w-full px-6 py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 transition-all duration-300"
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button
                  className="w-full px-6 py-2 bg-yellow-500 text-gray-900 font-bold rounded-md hover:bg-yellow-600 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

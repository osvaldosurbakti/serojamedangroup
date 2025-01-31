import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate(); // Hook untuk navigasi

  const handleLogout = () => {
    logout(); // Hapus token & perbarui state
    navigate("/login"); // Redirect ke halaman login
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Business', path: '/business' },
    { label: 'News & Event', path: '/newsevents' },
    { label: 'Contact Us', path: '/contact-us' },
  ];

  return (
    <nav className="bg-gray-900 text-white fixed top-0 left-0 w-full z-50 shadow-lg h-16">
      <div className="container mx-auto flex justify-between items-center px-4 h-full">
        <div className="text-3xl font-extrabold text-yellow-400 cursor-pointer hover:text-yellow-500 transition-colors duration-300">
          <Link to="/">Seroja Medan Group</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-lg">
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="px-6 py-2 hover:bg-yellow-400 rounded-md">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {isAuthenticated ? (
            <button onClick={handleLogout} className="px-6 py-2 bg-red-500 rounded-md">
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="px-6 py-2 bg-yellow-500 rounded-md">Login</button>
            </Link>
          )}
        </div>

        {/* Mobile Navigation */}
        <button className="lg:hidden text-3xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✖️' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gray-800 p-6">
          <ul className="flex flex-col gap-6 text-lg">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="block px-6 py-3 hover:bg-yellow-400 rounded-md" onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              {isAuthenticated ? (
                <button onClick={() => { handleLogout(); setIsOpen(false); }} className="w-full px-6 py-2 bg-red-500 rounded-md">
                  Logout
                </button>
              ) : (
                <Link to="/login">
                  <button className="w-full px-6 py-2 bg-yellow-500 rounded-md" onClick={() => setIsOpen(false)}>
                    Login
                  </button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

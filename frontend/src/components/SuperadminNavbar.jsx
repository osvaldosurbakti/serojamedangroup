import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FiMenu, FiX } from 'react-icons/fi'; // Import icons

const NavItem = ({ to, label }) => (
  <li>
    <Link to={to} className="px-6 py-2 hover:bg-yellow-400 rounded-md transition duration-300">
      {label}
    </Link>
  </li>
);

const MobileNavItem = ({ to, label, closeMenu }) => (
  <li>
    <Link to={to} className="block px-6 py-3 hover:bg-yellow-400 rounded-md transition duration-300" onClick={closeMenu}>
      {label}
    </Link>
  </li>
);

const SuperadminNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, role, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Business', path: '/business' },
    { label: 'Contact Us', path: '/contact-us' },
    { label: 'News Events', path: '/newsevents' }
  ];

  const superAdminItems = [
    { label: 'Dashboard Superadmin', path: '/superadmindashboard' },
    { label: 'Manage News-Event', path: '/admindashboard' },
    { label: 'Manage Admin', path: '/controladmin' },
    { label: 'History', path: '/history' }
  ];

  return (
    <nav className="bg-gray-900 text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-8 py-2 h-16">
  
        {/* Logo */}
        <div className="text-2xl font-bold text-yellow-400 cursor-pointer hover:text-yellow-500 transition-colors duration-300">
          <Link to="/superadmindashboard">Superadmin Panel</Link>
        </div>

        {/* Desktop Navigation */}
 {/* Desktop Navigation */}
 <div className="hidden lg:flex items-center gap-6 text-sm">
  <ul className="flex gap-6">
    {navItems.map((item) => (
      <li key={item.path} className="flex items-center justify-center">
        <Link to={item.path} className="px-6 py-2 hover:bg-yellow-400 rounded-md transition duration-300">
          {item.label.includes(' ') ? (
            item.label.split(' ').map((word, index) => (
              <span key={index} className="block text-center">{word}</span>
            ))
          ) : (
            item.label
          )}
        </Link>
      </li>
    ))}
    {isAuthenticated && role === 'superadmin' &&
      superAdminItems.map((item) => (
        <li key={item.path} className="flex items-center justify-center">
          <Link to={item.path} className="px-6 py-2 hover:bg-yellow-400 rounded-md transition duration-300">
            {item.label.includes(' ') ? (
              item.label.split(' ').map((word, index) => (
                <span key={index} className="block text-center">{word}</span>
              ))
            ) : (
              item.label
            )}
          </Link>
        </li>
      ))}
  </ul>

  {/* Logout Button */}
  {isAuthenticated ? (
    <button onClick={handleLogout} className="px-4 py-2 bg-red-500 rounded-md hover:bg-red-600 transition duration-300 text-xs">
      Logout
    </button>
  ) : (
    <Link to="/login">
      <button className="px-4 py-2 bg-yellow-500 rounded-md hover:bg-yellow-600 transition duration-300 text-xs">
        Login
      </button>
    </Link>
  )}
</div>

        {/* Mobile Navigation */}
        <button className="lg:hidden text-3xl text-yellow-400" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed top-16 left-0 w-full bg-gray-800 p-6 transition-transform duration-300 max-h-[calc(100vh-64px)] overflow-y-auto">
          <ul className="flex flex-col gap-6 text-lg">
            {navItems.map((item) => (
              <MobileNavItem key={item.path} to={item.path} label={item.label} closeMenu={() => setIsOpen(false)} />
            ))}
            {isAuthenticated && role === 'superadmin' &&
              superAdminItems.map((item) => (
                <MobileNavItem key={item.path} to={item.path} label={item.label} closeMenu={() => setIsOpen(false)} />
              ))}
            <li>
              {isAuthenticated ? (
                <button onClick={() => { handleLogout(); setIsOpen(false); }} className="w-full px-6 py-2 bg-red-500 rounded-md hover:bg-red-600 transition duration-300">
                  Logout
                </button>
              ) : (
                <Link to="/login">
                  <button className="w-full px-6 py-2 bg-yellow-500 rounded-md hover:bg-yellow-600 transition duration-300" onClick={() => setIsOpen(false)}>
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

export default SuperadminNavbar;

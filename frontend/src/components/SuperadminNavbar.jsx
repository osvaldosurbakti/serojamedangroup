import { useAuth } from '../context/AuthContext';  // Import the useAuth hook
import { Link } from 'react-router-dom';

const SuperadminNavbar = () => {
  const { user, logout } = useAuth();  // Access user and logout function from context

  return (
    <nav className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">Website</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about-us" className="hover:underline">About Us</Link>
          <Link to="/contact-us" className="hover:underline">Contact Us</Link>

          {/* Display links specific to Superadmin */}
          {user && user.role === 'superadmin' && (
            <>
              <Link to="/superadmindashboard" className="hover:underline">Dashboard Superadmin</Link>
              <Link to="/controladmin" className="hover:underline">Manage Admin</Link>
              <Link to="/history" className="hover:underline">History</Link>
            </>
          )}

          {/* Show login/logout link */}
          {!user ? (
            <Link to="/login" className="hover:underline">Login</Link>
          ) : (
            <button onClick={logout} className="hover:underline">Logout</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default SuperadminNavbar;

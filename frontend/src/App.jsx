import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Business from './pages/Business';
import NewsEvents from './pages/NewsEvents';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import SuperAdminDashboard from './pages/SuperAdminDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ControlAdmin from './pages/ControlAdmin';
import History from './pages/History';


function App() {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/hello')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Error fetching data');
        setLoading(false);
      });
  }, []);

  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Header />

        <main className="flex-grow p-4 bg-gray-100">
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/business" element={<Business />} />
            <Route path="/newsevents" element={<NewsEvents />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/superadmindashboard" element={<SuperAdminDashboard />} />
            <Route path="/admindashboard" element={<AdminDashboard />} />
            <Route path="/controladmin" element={<ControlAdmin />} />
            <Route path="/history" element={<History />} />
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </main>

        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;

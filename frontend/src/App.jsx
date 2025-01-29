import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Business from './pages/Business';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Login from './pages/Login';
import SuperAdminDashboard from './pages/SuperAdminDashboard';
import Index from './pages/Index';
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
      <Navbar />
      <Header />

      <main className="flex-grow p-4 bg-gray-100">
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/business" element={<Business />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/superadmindashboard" element={<SuperAdminDashboard />} />
          <Route path="/index" element={<Index />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/controladmin" element={<ControlAdmin />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;

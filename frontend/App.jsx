import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import AboutUs from '../src/pages/AboutUs';
import Business from '../src/pages/Business';
import ContactUs from '../src/pages/ContactUs';
import Footer from '../src/components/Footer';
import Navbar from '../src/components/Navbar';
import Header from '../src/components/Header';
import Login from '../src/pages/Login';
import SuperAdminDashboard from '../src/pages/SuperAdminDashboard';
import Index from '../src/pages/Index';
import AdminDashboard from '../src/pages/AdminDashboard';
import ControlAdmin from '../src/pages/ControlAdmin';
import History from '../src/pages/History';

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

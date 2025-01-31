import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const SuperadminDashboard = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login'); // Redirect ke login jika tidak terautentikasi
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Superadmin Dashboard</h1>
          <nav className="space-x-4">
            <a href="/index" className="hover:underline">Home</a>
            <a href="/controladmin" className="hover:underline">Manage Admin</a>
            <a href="/admin" className="hover:underline">Manage News & Events</a>
            <a href="/history" className="hover:underline">View History</a>
          </nav>
        </div>
      </header>

      <main className="flex-grow bg-white py-8 px-4">
        <section className="container mx-auto space-y-8">
          <h2 className="text-3xl font-semibold">Selamat Datang di Dashboard Superadmin</h2>
          <p>Anda memiliki akses penuh untuk mengelola sistem ini.</p>
        </section>
      </main>
    </div>
  );
};

export default SuperadminDashboard;

import React from 'react';
import SuperadminNavbar from '../components/SuperadminNavbar';

const SuperadminDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 flex flex-col">

      <SuperadminNavbar />

      <main className="flex-grow bg-white py-10 px-6">
        <section className="container mx-auto space-y-10">
          <header className="text-center">
            <h2 className="text-4xl font-bold text-gray-800">Selamat Datang di Dashboard Superadmin</h2>
            <p className="text-lg text-gray-600 mt-2">Anda memiliki akses penuh untuk mengelola sistem ini.</p>
          </header>

          {/* Dashboard Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Kontrol Admin */}
            <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Kontrol Admin</h3>
              <p className="text-gray-600 mb-6">Akses ke manajemen admin dan kontrol lainnya.</p>
              <a href="/controladmin" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">Manage Admin</a>
            </div>

            {/* Manajemen Berita & Acara */}
            <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Manajemen Berita & Acara</h3>
              <p className="text-gray-600 mb-6">Kelola berita dan acara yang ada di sistem.</p>
              <a href="/admindashboard" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">Manage News & Events</a>
            </div>

            {/* History Aksi Admin */}
            <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">History Aksi Admin</h3>
              <p className="text-gray-600 mb-6">Lihat semua riwayat aksi admin di sistem.</p>
              <a href="/history" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">View History</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SuperadminDashboard;

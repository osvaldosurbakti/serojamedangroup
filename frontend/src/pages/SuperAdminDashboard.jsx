import React from 'react';
import SuperadminNavbar from '../components/SuperadminNavbar';


const SuperadminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
       
      <main className="flex-grow bg-white py-8 px-4">
        <section className="container mx-auto space-y-8">
          <h2 className="text-3xl font-semibold text-gray-800">Selamat Datang di Dashboard Superadmin</h2>
          <p className="text-gray-600">Anda memiliki akses penuh untuk mengelola sistem ini.</p>

          {/* Bagian-bagian yang ada di dalam dashboard */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Kontrol Admin</h3>
            <p className="text-gray-600">Akses ke manajemen admin dan kontrol lainnya.</p>
            <a href="/controladmin" className="text-blue-600 hover:underline">Manage Admin</a>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Manajemen Berita & Acara</h3>
            <p className="text-gray-600">Kelola berita dan acara yang ada di sistem.</p>
            <a href="/admindashboard" className="text-blue-600 hover:underline">Manage News & Events</a>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">History Aksi Admin</h3>
            <p className="text-gray-600">Lihat semua riwayat aksi admin di sistem.</p>
            <a href="/history" className="text-blue-600 hover:underline">View History</a>
          </div>
        </section>
      </main>
    </div>
  );

};

export default SuperadminDashboard;

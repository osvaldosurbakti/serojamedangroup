import React from 'react';

const SuperadminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Superadmin Dashboard</h1>
          <nav className="space-x-4">
            <a href="index" className="hover:underline">Home</a>
            <a href="controladmin" className="hover:underline">Manage Admin</a>
            <a href="admin" className="hover:underline">Manage News & Events</a>
            <a href="history" className="hover:underline">View History</a>
            <a href="#" id="logout" className="hover:underline">Logout</a>
          </nav>
        </div>
      </header>

      <main className="flex-grow bg-white py-8 px-4">
        <section className="container mx-auto space-y-8">
          <h2 className="text-3xl font-semibold text-gray-800">Selamat Datang di Dashboard Superadmin</h2>
          <p className="text-gray-600">Anda memiliki akses penuh untuk mengelola sistem ini.</p>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Kontrol Admin</h3>
            <p className="text-gray-600">Akses ke manajemen admin dan kontrol lainnya.</p>
            <a href="controladmin" className="text-blue-600 hover:underline">Manage Admin</a>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Manajemen Berita & Acara</h3>
            <p className="text-gray-600">Kelola berita dan acara yang ada di sistem.</p>
            <a href="admin" className="text-blue-600 hover:underline">Manage News & Events</a>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">History Aksi Admin</h3>
            <p className="text-gray-600">Lihat semua riwayat aksi admin di sistem.</p>
            <a href="history" className="text-blue-600 hover:underline">View History</a>
          </div>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-4 mt-8">
        <div className="container mx-auto text-center">© 2025 Superadmin Dashboard</div>
      </footer>
    </div>
  );
};

export default SuperadminDashboard;

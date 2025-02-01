import React, { useEffect, useState } from 'react';

const AdminHistory = () => {
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Riwayat Aksi Admin
  const fetchHistory = async () => {
    const token = localStorage.getItem('token');

    try {
      const response = await fetch('http://localhost:5000/api/history', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setHistoryData(data);
      setLoading(false);

    } catch (error) {
      setError('Gagal memuat riwayat. Cek koneksi atau server!');
      setLoading(false);
    }
  };

  // Panggil fetchHistory saat komponen dimuat
  useEffect(() => {
    fetchHistory();
  }, []);

  // Fungsi logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login'; // Redirect ke halaman login setelah logout
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 py-10 px-6">

      <main className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-xl">
        <header className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Riwayat Admin</h2>
          <p className="text-lg text-gray-600 mt-2">Pantau riwayat aksi admin yang dilakukan pada sistem.</p>
        </header>

        {/* Error or Loading State */}
        {loading ? (
          <div className="text-center text-lg text-gray-600">Memuat riwayat...</div>
        ) : error ? (
          <div className="text-center text-lg text-red-500">{error}</div>
        ) : (
          <section>
            <ul className="space-y-6">
              {historyData.map((entry) => {
                const adminName = entry.adminId ? entry.adminId.name : 'Admin Tidak Diketahui';
                const adminEmail = entry.adminId ? entry.adminId.email : 'Email Tidak Diketahui';
                const newsEventTitle = entry.newsEventId ? entry.newsEventId.title : 'No Title Available';

                return (
                  <li
                    key={entry._id}
                    className="p-6 bg-gray-100 border-2 border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <strong className="text-xl font-semibold text-gray-800">{adminName}</strong>
                        <p className="text-sm text-gray-600">{adminEmail}</p>
                      </div>
                      <span className="text-sm text-gray-500">{new Date(entry.timestamp).toLocaleString()}</span>
                    </div>

                    <p className="text-lg text-gray-700 mb-2">
                      <span className="font-semibold text-gray-800">Aksi:</span> {entry.action}
                    </p>
                    <p className="text-lg text-gray-700">
                      <span className="font-semibold text-gray-800">Event:</span> {newsEventTitle}
                    </p>
                  </li>
                );
              })}
            </ul>
          </section>
        )}
      </main>
    </div>
  );
};

export default AdminHistory;

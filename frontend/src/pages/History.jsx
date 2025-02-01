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
    <div className="container mx-auto p-4">
    
      <main>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Riwayat Admin</h2>

          {loading ? (
            <p>Memuat riwayat...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <ul id="historyList" className="space-y-4">
              {historyData.map((entry) => {
                const adminName = entry.adminId ? entry.adminId.name : 'Admin Tidak Diketahui';
                const adminEmail = entry.adminId ? entry.adminId.email : 'Email Tidak Diketahui';
                const newsEventTitle = entry.newsEventId ? entry.newsEventId.title : 'No Title Available';

                return (
                  <li key={entry._id} className="p-4 bg-gray-100 border rounded-lg">
                    <strong>{adminName} ({adminEmail})</strong> melakukan <b>{entry.action}</b> pada event <b>{newsEventTitle}</b>
                    <p className="text-sm text-gray-600">
                      pada <em>{new Date(entry.timestamp).toLocaleString()}</em>
                    </p>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
};

export default AdminHistory;

import { useEffect, useState } from "react";

const AdminHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Simulasi pengambilan data riwayat dari API
    const fetchHistory = async () => {
      const data = [
        { id: 1, action: "Menambahkan user baru", timestamp: "2025-01-29 10:00" },
        { id: 2, action: "Menghapus data pelanggan", timestamp: "2025-01-28 14:30" },
      ];
      setHistory(data);
    };
    
    fetchHistory();
  }, []);

  const handleLogout = () => {
    // Tambahkan logika logout di sini
    console.log("Logout berhasil");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center rounded-lg">
        <h1 className="text-xl font-bold">Riwayat Aksi Admin</h1>
        <nav>
          <a href="/superadmindashboard" className="mr-4 hover:underline">Kembali ke Dashboard</a>
          <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">
            Logout
          </button>
        </nav>
      </header>

      <main className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Riwayat Admin</h2>
        <ul>
          {history.length > 0 ? (
            history.map((item) => (
              <li key={item.id} className="p-2 border-b">
                <span className="font-medium">{item.action}</span> - <span className="text-gray-600">{item.timestamp}</span>
              </li>
            ))
          ) : (
            <p className="text-gray-500">Tidak ada riwayat tersedia.</p>
          )}
        </ul>
      </main>
    </div>
  );
};

export default AdminHistory;

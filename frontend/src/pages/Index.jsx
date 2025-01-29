import React, { useEffect, useState } from "react";

const NewsEvents = () => {
  const [newsEvents, setNewsEvents] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // Cek status login dan role pengguna dari JWT
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUserRole(decoded.role); // Misal role: 'admin' atau 'superadmin'
      } catch (error) {
        console.error("Token invalid:", error);
        localStorage.removeItem("token");
      }
    }
  
    // Ambil data berita & acara (contoh statis, bisa diubah ke API fetch)
    fetch("/api/news") // Sesuaikan dengan API backend
      .then((response) => response.json())
      .then((data) => setNewsEvents(data))
      .catch((error) => {
        console.error("Error fetching news:", error);
        setErrorMessage("Gagal memuat berita & acara.");
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to the News & Events Page</h1>
      </header>

      <nav className="bg-blue-600 text-white p-4 rounded-lg mb-6 shadow-md w-full max-w-3xl flex justify-around">
        <a href="/" className="hover:underline">Home</a>
        {userRole === "admin" && (
          <a href="/admin" className="hover:underline">Admin Dashboard</a>
        )}
        {userRole === "superadmin" && (
          <a href="/superadmin" className="hover:underline">Superadmin Dashboard</a>
        )}
        {userRole ? (
          <button onClick={handleLogout} className="hover:underline">Logout</button>
        ) : (
          <a href="/login" className="hover:underline">Login</a>
        )}
      </nav>

      <main className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Berita & Acara</h3>
        {errorMessage ? (
          <p className="text-red-600">{errorMessage}</p>
        ) : (
          <ul className="space-y-4">
            {newsEvents.length > 0 ? (
              newsEvents.map((news, index) => (
                <li key={index} className="bg-gray-50 p-4 rounded shadow">
                  <h4 className="font-semibold text-lg">{news.title}</h4>
                  <p className="text-gray-600">{news.description}</p>
                </li>
              ))
            ) : (
              <p className="text-gray-600">Tidak ada berita atau acara saat ini.</p>
            )}
          </ul>
        )}
      </main>
    </div>
  );
};

export default NewsEvents;
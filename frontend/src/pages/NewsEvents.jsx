import React, { useEffect, useState } from "react";
import * as jwt_decode from "jwt-decode";

const NewsEvents = () => {
  const [newsEvents, setNewsEvents] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    updateUI();
    fetchNewsEvents();
  }, []);

  const updateUI = () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedUser = jwt_decode(token);
        setUser(decodedUser);
      } catch (error) {
        console.error("Invalid token");
      }
    }
  };

  const fetchNewsEvents = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/news-events");
      if (!response.ok) {
        throw new Error("Failed to fetch news & events");
      }
      const data = await response.json();
      setNewsEvents(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center mb-4">
        <h1 className="text-2xl font-bold">Welcome to the News & Events Page</h1>
        <div className="mt-4">
          {user ? (
            <div>
              {user.role === "admin" && (
                <a href="/admin" className="text-blue-500 mx-2">Admin Dashboard</a>
              )}
              {user.role === "superadmin" && (
                <a href="/superadmin" className="text-green-500 mx-2">Superadmin Dashboard</a>
              )}
              <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded ml-4">Logout</button>
            </div>
          ) : (
            <a href="/login" className="bg-blue-500 text-white px-4 py-2 rounded">Login</a>
          )}
        </div>
      </header>

      <main className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Berita & Acara</h3>
        <ul className="space-y-4">
          {newsEvents.length > 0 ? (
            newsEvents.map((newsEvent) => (
              <li key={newsEvent.id} className="p-4 border rounded">
                <strong>{newsEvent.title}</strong>
                <p className="text-sm text-gray-500">Kategori: {newsEvent.category}</p>
                <p>{newsEvent.description}</p>
                {newsEvent.eventDate && (
                  <p className="text-gray-600">Tanggal: {new Date(newsEvent.eventDate).toLocaleDateString()}</p>
                )}
                {newsEvent.image && (
                  <img src={newsEvent.image} alt="Event" className="w-full h-auto mt-2 rounded" />
                )}
              </li>
            ))
          ) : (
            <p className="text-center text-gray-500">Tidak ada berita atau acara saat ini.</p>
          )}
        </ul>
      </main>
    </div>
  );
};

export default NewsEvents;

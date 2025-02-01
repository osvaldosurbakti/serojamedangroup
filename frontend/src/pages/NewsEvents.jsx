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


  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-200 p-6">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-gray-800">Welcome to the News & Events Page</h1>
        <div className="mt-6">
        </div>
      </header>
  
      <main className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Berita & Acara</h3>
        <ul className="space-y-6">
          {newsEvents.length > 0 ? (
            newsEvents.map((newsEvent) => (
              <li key={newsEvent.id} className="p-6 bg-gray-50 border-2 border-gray-200 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
                <strong className="text-xl font-bold text-gray-900">{newsEvent.title}</strong>
                <p className="text-sm text-gray-600 mt-2">{newsEvent.category}</p>
                <p className="mt-2 text-gray-700">{newsEvent.description}</p>
                {newsEvent.eventDate && (
                  <p className="mt-2 text-gray-600">Tanggal: {new Date(newsEvent.eventDate).toLocaleDateString()}</p>
                )}
                {newsEvent.image && (
                  <img src={newsEvent.image} alt="Event" className="w-full h-auto mt-4 rounded-lg shadow-sm" />
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

import React, { useEffect, useState } from "react";

const NewsEvents = () => {
  const [newsEvents, setNewsEvents] = useState([]);

  useEffect(() => {
    fetchNewsEvents();
  }, []);

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
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 tracking-wide">News & Events</h1>
        <p className="text-lg text-gray-600 mt-2">Stay updated with the latest news and events!</p>
      </header>

      <main className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
        <ul className="space-y-8">
          {newsEvents.length > 0 ? (
            newsEvents.map((newsEvent) => (
              <li
                key={newsEvent.id}
                className="p-6 bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-all ease-in-out duration-300 transform hover:scale-105"
              >
                <div className="mb-4">
                  <strong className="text-2xl font-bold text-gray-900">{newsEvent.title}</strong>
                  <p className="text-sm text-gray-600 mt-1">
                    {newsEvent.category.charAt(0).toUpperCase() + newsEvent.category.slice(1)}
                  </p>
                </div>

                <p className="mt-2 text-gray-700">{newsEvent.description}</p>

                {newsEvent.eventDate && (
                  <p className="mt-4 text-sm text-gray-600">Event Date: {new Date(newsEvent.eventDate).toLocaleDateString()}</p>
                )}

                {newsEvent.image && (
                  <div className="mt-6">
                    <img
                      src={newsEvent.image}
                      alt="Event"
                      className="w-full h-full object-cover rounded-xl shadow-lg"
                    />
                  </div>
                )}
              </li>
            ))
          ) : (
            <p className="text-center text-gray-500">No news or events available at the moment.</p>
          )}
        </ul>
      </main>
    </div>
  );
};

export default NewsEvents;

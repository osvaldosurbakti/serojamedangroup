import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [newsEvents, setNewsEvents] = useState([]);
  const [formData, setFormData] = useState({ title: "", description: "", category: "news", eventDate: "", image: null });
  const [editingId, setEditingId] = useState(null);
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  useEffect(() => {
    if (!token) {
      window.location.href = "/login";
    } else {
      fetchNewsEvents();
    }
  }, []);

  const fetchNewsEvents = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/news-events", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setNewsEvents(data);
    } catch (error) {
      console.error("Error fetching news events:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key]) form.append(key, formData[key]);
    });

    const method = editingId ? "PUT" : "POST";
    const url = editingId ? `http://localhost:5000/api/news-events/${editingId}` : "http://localhost:5000/api/news-events";

    try {
      await fetch(url, {
        method,
        headers: { Authorization: `Bearer ${token}` },
        body: form,
      });
      alert(editingId ? "Updated successfully!" : "Added successfully!");
      setFormData({ title: "", description: "", category: "news", eventDate: "", image: null });
      setEditingId(null);
      fetchNewsEvents();
    } catch (error) {
      console.error("Error saving:", error);
    }
  };

  const handleEdit = (item) => {
    setEditingId(item._id);
    setFormData({ title: item.title, description: item.description, category: item.category, eventDate: item.eventDate?.split("T")[0], image: null });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      await fetch(`http://localhost:5000/api/news-events/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Deleted successfully!");
      fetchNewsEvents();
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-8">
      <header className="bg-indigo-600 text-white p-4 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold">{role === "superadmin" ? "Superadmin Dashboard" : "Admin Dashboard"}</h1>
        <nav className="mt-4">
          <a href="/" className="text-indigo-200 hover:text-white mr-4">Home</a>
          <a href="/admindashboard" className="text-indigo-200 hover:text-white">Dashboard</a>
          <button
            onClick={() => { localStorage.clear(); window.location.href = "/login"; }}
            className="ml-6 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Logout
          </button>
        </nav>
      </header>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">{editingId ? "Edit" : "Add"} News & Event</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <div className="flex space-x-4">
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="news">News</option>
              <option value="event">Event</option>
            </select>
            <input
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            accept="image/*"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            {editingId ? "Update" : "Submit"}
          </button>
        </form>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">News & Events</h2>
        <ul className="space-y-6">
          {newsEvents.map((item) => (
            <li key={item._id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="flex justify-between items-center">
                <strong className="text-xl">{item.title}</strong>
                <div>
                  <button
                    onClick={() => handleEdit(item)}
                    className="px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <p className="mt-2">{item.description}</p>
              {item.eventDate && <p className="mt-2 text-gray-600">Date: {new Date(item.eventDate).toLocaleDateString()}</p>}
              {item.image && <img src={item.image} alt="Event" className="mt-4 w-32 h-32 object-cover rounded-lg" />}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

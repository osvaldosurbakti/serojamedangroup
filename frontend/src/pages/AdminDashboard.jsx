import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [newsEvents, setNewsEvents] = useState([]);
  const [formData, setFormData] = useState({ title: "", description: "", category: "news", eventDate: "", image: null });
  const [editingId, setEditingId] = useState(null);
  const [filterCategory, setFilterCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const username = localStorage.getItem("username"); // assuming username is stored

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
      setLoading(false); // stop loading
    } catch (error) {
      console.error("Error fetching news events:", error);
      setLoading(false); // stop loading
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

  const filteredNewsEvents = newsEvents.filter((item) => {
    return (
      (filterCategory === "" || item.category === filterCategory) &&
      item.title.toUpperCase().includes(searchQuery.toUpperCase())
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-8">
      <div className="mb-6 text-lg text-gray-600">
      <p>Welcome, <strong className="text-indigo-700">{username}</strong></p>
        <p>Logged in as: <strong className="text-indigo-700">{role}</strong></p>
      </div>
      {/* Form Input */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-xl">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-700">{editingId ? "Edit" : "Add"} News & Event</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            required
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            required
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
          />
          <div className="flex space-x-4">
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            accept="image/*"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            {editingId ? "Update" : "Submit"}
          </button>
        </form>
      </div>
  
      {/* Filter and Search */}
      <div className="mt-8 flex justify-between items-center">
        <div className="flex space-x-4">
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">All Categories</option>
            <option value="news">News</option>
            <option value="event">Event</option>
          </select>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title..."
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>
  
      {/* News & Events List */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-700">News & Events</h2>
        <ul className="space-y-6">
          {filteredNewsEvents.map((item) => (
            <li key={item._id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
              <div className="flex justify-between items-center">
                <strong className="text-xl text-indigo-600">{item.title}</strong>
                <div>
                  <button
                    onClick={() => handleEdit(item)}
                    className="px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition duration-300 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition duration-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <p className="mt-2">{item.description}</p>
              <p className="mt-2 text-gray-600">Category: {item.category}</p>
              {item.eventDate && <p className="mt-2 text-gray-600">Date: {new Date(item.eventDate).toLocaleDateString()}</p>}
              {item.image && <img src={item.image} alt="Event" className="mt-4 w-32 h-32 object-cover rounded-lg" />}
              <p className="mt-2 text-sm text-gray-500">{item.status}</p> {/* Added Status */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

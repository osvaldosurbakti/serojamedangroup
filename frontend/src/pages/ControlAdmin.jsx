import React, { useState, useEffect } from 'react';

function App() {
  const [admins, setAdmins] = useState([]);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [editAdminId, setEditAdminId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editUsername, setEditUsername] = useState('');
  const [editEmail, setEditEmail] = useState('');

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchAdmins();
  }, []);

  // Fetch the list of admins
  const fetchAdmins = async () => {
    const response = await fetch('http://localhost:5000/api/admins', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      setAdmins(data);
    } else {
      console.error('Failed to fetch admins');
    }
  };

  // Add new admin
  const addAdmin = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/admin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ name, username, password, email }),
    });

    const data = await response.json();
    if (response.ok) {
      alert('Admin added successfully');
      fetchAdmins();  // Refresh admin list
    } else {
      alert('Failed to add admin');
    }
  };

  // Edit admin
  const editAdmin = (adminId) => {
    const admin = admins.find(admin => admin._id === adminId);
    setEditAdminId(adminId);
    setEditName(admin.name);
    setEditUsername(admin.username);
    setEditEmail(admin.email);
  };

  const updateAdmin = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:5000/api/admin/${editAdminId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ name: editName, username: editUsername, email: editEmail }),
    });

    if (response.ok) {
      alert('Admin updated successfully');
      fetchAdmins();  // Refresh admin list
      setEditAdminId(null);  // Clear edit state
    } else {
      alert('Failed to update admin');
    }
  };

  // Delete admin
  const deleteAdmin = async (adminId) => {
    const response = await fetch(`http://localhost:5000/api/admin/${adminId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (response.ok) {
      alert('Admin deleted successfully');
      fetchAdmins();  // Refresh admin list
    } else {
      alert('Failed to delete admin');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div className="App bg-blue-50 min-h-screen">
  
      <main className="container mx-auto p-6">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-blue-900">Daftar Admin</h2>
          <ul className="space-y-4">
            {admins.map(admin => (
              <li key={admin._id} className="flex justify-between items-center p-4 bg-white shadow-md rounded-md transform transition-transform hover:scale-105">
                <span className="text-lg text-gray-800">{`Name: ${admin.name}, Username: ${admin.username}, Email: ${admin.email}`}</span>
                <div>
                  <button 
                    onClick={() => editAdmin(admin._id)} 
                    className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600 mr-2"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => deleteAdmin(admin._id)} 
                    className="bg-red-600 text-black px-4 py-2 rounded-md hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
  
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-blue-900">Tambah Admin Baru</h2>
          <form onSubmit={addAdmin} className="bg-white p-6 shadow-md rounded-md space-y-4">
            <div>
              <label htmlFor="name" className="block font-medium text-gray-700">Nama Admin:</label>
              <input 
                type="text" 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            <div>
              <label htmlFor="username" className="block font-medium text-gray-700">Username:</label>
              <input 
                type="text" 
                id="username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            <div>
              <label htmlFor="password" className="block font-medium text-gray-700">Password:</label>
              <input 
                type="password" 
                id="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            <div>
              <label htmlFor="email" className="block font-medium text-gray-700">Email:</label>
              <input 
                type="email" 
                id="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all"
            >
              Tambah Admin
            </button>
          </form>
        </section>
  
        {editAdminId && (
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">Edit Admin</h2>
            <form onSubmit={updateAdmin} className="bg-white p-6 shadow-md rounded-md space-y-4">
              <div>
                <label htmlFor="editName" className="block font-medium text-gray-700">Nama Admin:</label>
                <input 
                  type="text" 
                  id="editName" 
                  value={editName} 
                  onChange={(e) => setEditName(e.target.value)} 
                  required 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
  
              <div>
                <label htmlFor="editUsername" className="block font-medium text-gray-700">Username:</label>
                <input 
                  type="text" 
                  id="editUsername" 
                  value={editUsername} 
                  onChange={(e) => setEditUsername(e.target.value)} 
                  required 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
  
              <div>
                <label htmlFor="editEmail" className="block font-medium text-gray-700">Email:</label>
                <input 
                  type="email" 
                  id="editEmail" 
                  value={editEmail} 
                  onChange={(e) => setEditEmail(e.target.value)} 
                  required 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
  
              <button 
                type="submit" 
                className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-all"
              >
                Update Admin
              </button>
            </form>
          </section>
        )}
      </main>
    </div>
  );
  
}  

export default App;

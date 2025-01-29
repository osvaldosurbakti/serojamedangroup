import { useState, useEffect } from "react";

const ControlAdmin = () => {
  const [admins, setAdmins] = useState([]);
  const [newAdmin, setNewAdmin] = useState({ name: "", username: "", password: "", email: "" });
  const [editAdmin, setEditAdmin] = useState(null);

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    try {
      const response = await fetch("/api/admins");
      const data = await response.json();
      setAdmins(data);
    } catch (error) {
      console.error("Error fetching admins:", error);
    }
  };

  const handleAddAdmin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/admins", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newAdmin),
      });
      if (response.ok) {
        fetchAdmins();
        setNewAdmin({ name: "", username: "", password: "", email: "" });
      }
    } catch (error) {
      console.error("Error adding admin:", error);
    }
  };

  const handleEditAdmin = (admin) => {
    setEditAdmin(admin);
  };

  const handleUpdateAdmin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/admins/${editAdmin.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editAdmin),
      });
      if (response.ok) {
        fetchAdmins();
        setEditAdmin(null);
      }
    } catch (error) {
      console.error("Error updating admin:", error);
    }
  };

  const handleDeleteAdmin = async (id) => {
    if (window.confirm("Yakin ingin menghapus admin ini?")) {
      try {
        await fetch(`/api/admins/${id}`, { method: "DELETE" });
        fetchAdmins();
      } catch (error) {
        console.error("Error deleting admin:", error);
      }
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Control Admin</h1>
        <nav>
          <a href="superadmin.html" className="mr-4 text-blue-500">Superadmin Dashboard</a>
          <button className="text-red-500" onClick={() => console.log("Logout")}>Logout</button>
        </nav>
      </header>

      {/* Daftar Admin */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Daftar Admin</h2>
        <ul className="border p-4 rounded-lg bg-gray-100">
          {admins.length > 0 ? (
            admins.map((admin) => (
              <li key={admin.id} className="flex justify-between items-center p-2 border-b">
                <span>{admin.name} ({admin.username})</span>
                <div>
                  <button className="text-blue-500 mr-2" onClick={() => handleEditAdmin(admin)}>Edit</button>
                  <button className="text-red-500" onClick={() => handleDeleteAdmin(admin.id)}>Hapus</button>
                </div>
              </li>
            ))
          ) : (
            <p className="text-gray-500">Belum ada admin.</p>
          )}
        </ul>
      </section>

      {/* Tambah Admin */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Tambah Admin Baru</h2>
        <form onSubmit={handleAddAdmin} className="space-y-3">
          <input type="text" placeholder="Nama Admin" className="border p-2 w-full" value={newAdmin.name} onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })} required />
          <input type="text" placeholder="Username" className="border p-2 w-full" value={newAdmin.username} onChange={(e) => setNewAdmin({ ...newAdmin, username: e.target.value })} required />
          <input type="password" placeholder="Password" className="border p-2 w-full" value={newAdmin.password} onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })} required />
          <input type="email" placeholder="Email" className="border p-2 w-full" value={newAdmin.email} onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })} required />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Tambah Admin</button>
        </form>
      </section>

      {/* Edit Admin */}
      {editAdmin && (
        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Edit Admin</h2>
          <form onSubmit={handleUpdateAdmin} className="space-y-3">
            <input type="text" className="border p-2 w-full" value={editAdmin.name} onChange={(e) => setEditAdmin({ ...editAdmin, name: e.target.value })} required />
            <input type="text" className="border p-2 w-full" value={editAdmin.username} onChange={(e) => setEditAdmin({ ...editAdmin, username: e.target.value })} required />
            <input type="email" className="border p-2 w-full" value={editAdmin.email} onChange={(e) => setEditAdmin({ ...editAdmin, email: e.target.value })} required />
            <button type="submit" className="bg-green-500 text-white p-2 rounded w-full">Update Admin</button>
          </form>
        </section>
      )}
    </div>
  );
};

export default ControlAdmin;

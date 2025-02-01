import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // Import AuthContext

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Gunakan login dari context

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Simpan data ke context dan localStorage
        login(data.token, data.role);
        alert("Login berhasil!");

        // Arahkan pengguna berdasarkan peran
        if (data.role === "admin") {
          navigate("/admindashboard");
        } else if (data.role === "superadmin") {
          navigate("/superadmindashboard");
        } else {
          navigate("/");
        }
      } else {
        setErrorMessage(data.message || "Login gagal!");
      }
    } catch (error) {
      setErrorMessage("Terjadi kesalahan, coba lagi.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-blue-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-sm w-full">
        <header className="mb-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800">Login</h1>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block font-medium text-gray-700">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          >
            Login
          </button>
        </form>

        {errorMessage && <p className="text-red-600 mt-4 text-center">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Login;

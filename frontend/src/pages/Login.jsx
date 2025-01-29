import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Untuk navigasi setelah login

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate(); // Hook untuk navigasi

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
        // Simpan token dan role di localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);

        alert("Login berhasil!");

        // Arahkan berdasarkan peran pengguna
        if (data.role === "admin") {
          navigate("/admindashboard");
        } else if (data.role === "superadmin") {
          navigate("/superadmindashboard");
        }
      } else {
        setErrorMessage(data.message || "Login gagal!");
      }
    } catch (error) {
      setErrorMessage("Terjadi kesalahan, coba lagi.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Login</h1>
        <nav>
          <a href="/" className="text-blue-600 hover:underline">
            Home
          </a>
        </nav>
      </header>

      <main className="bg-white p-8 rounded-lg shadow-md w-96">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block font-medium text-gray-700">
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>

          <div>
            <label htmlFor="password" className="block font-medium text-gray-700">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
            Login
          </button>
        </form>

        {errorMessage && <p className="text-red-600 mt-4">{errorMessage}</p>}
      </main>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://lawyerportfolio-backend.onrender.com/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('token', data.token);
      navigate('/admin');
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-navy text-white p-6 rounded shadow-md max-w-sm w-full">
        <h2 className="text-3xl font-bold mb-6 text-yellow-300">Admin Login</h2>
        <div className="mb-4">
          <label className="block text-yellow-300">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border border-yellow-500 rounded bg-navy text-white"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-yellow-300">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-yellow-500 rounded bg-navy text-white"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-500 text-navy p-3 rounded hover:bg-yellow-400"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/some-other-path'); // Example navigation
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 rounded">
        Go to Another Page
      </button>
    </div>
  );
};

export default AdminDashboard;

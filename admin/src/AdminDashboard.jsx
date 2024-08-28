import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      history.push('/login');
    } else {
      // Add logic to verify token if needed
      setUser({ username: 'admin' }); // Mock user data, replace with actual data if needed
    }
  }, [history]);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold">Admin Dashboard</h2>
      <p>Welcome, {user?.username}</p>
      {/* Add your dashboard components here */}
    </div>
  );
};

export default AdminDashboard;

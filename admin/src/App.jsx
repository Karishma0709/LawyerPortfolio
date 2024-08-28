import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AdminSidebar from './components/AdminSidebar';
import ContactDetails from './components/ContactDetails';
import BlogForm from './components/BlogForm';
import LoginPage from './LoginPage';
import AdminDashboard from './AdminDashboard';
import './App.css';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Check if the user is authenticated

  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute
              element={() => (
                <div className="flex">
                  <AdminSidebar />
                  <div className="flex-1 bg-white p-6">
                    <AdminDashboard />
                  </div>
                </div>
              )}
            />
          }
        />
        <Route
          path="/contact-details"
          element={
            <ProtectedRoute
              element={() => (
                <div className="flex">
                  <AdminSidebar />
                  <div className="flex-1 bg-white p-6">
                    <ContactDetails />
                  </div>
                </div>
              )}
            />
          }
        />
        <Route
          path="/blog-form"
          element={
            <ProtectedRoute
              element={() => (
                <div className="flex">
                  <AdminSidebar />
                  <div className="flex-1 bg-white p-6">
                    <BlogForm />
                  </div>
                </div>
              )}
            />
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute
              element={() => (
                <div className="flex">
                  <AdminSidebar />
                  <div className="flex-1 bg-white p-6">
                    <h1 className="text-xl font-bold">Welcome to the Admin Dashboard</h1>
                  </div>
                </div>
              )}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

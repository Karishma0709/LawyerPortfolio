import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminSidebar from './components/AdminSidebar';
import ContactDetails from './components/ContactDetails';
import BlogForm from './components/BlogForm';
import LoginPage from './LoginPage';
import AdminDashboard from './AdminDashboard';
import './App.css';

const AdminLayout = () => (
  <div className="flex">
    <AdminSidebar />
    <main className="flex-1 bg-white p-6">
      <Routes>
        <Route path="contact-details" element={<ContactDetails />} />
        <Route path="blog-form" element={<BlogForm />} />
        <Route index element={<AdminDashboard />} />
      </Routes>
    </main>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<AdminLayout />} />
      </Routes>
    </Router>
  );
};

export default App;

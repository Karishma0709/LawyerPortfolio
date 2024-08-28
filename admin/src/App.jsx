import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminSidebar from './components/AdminSidebar';
import ContactDetails from './components/ContactDetails';
import BlogForm from './components/BlogForm';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1 bg-white p-6">
          <Routes>
            <Route path="/contact-details" element={<ContactDetails />} />
            <Route path="/blog-form" element={<BlogForm />} />
            <Route path="/" element={<h1 className="text-xl font-bold">Welcome to the Admin Dashboard</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

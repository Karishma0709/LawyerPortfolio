<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminSidebar from "./components/AdminSidebar";
import ContactDetails from "./components/ContactDetails";
import BlogForm from "./components/BlogForm";
import LoginPage from "./LoginPage";
import AdminDashboard from "./AdminDashboard";
import "./App.css";
=======
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminSidebar from './components/AdminSidebar';
import ContactDetails from './components/ContactDetails';
import BlogForm from './components/BlogForm';
>>>>>>> 3dfea1165afb3f5ba7df9d7ea91eba85f8d270eb

import './App.css';

const App = () => {
  return (
    <Router>
<<<<<<< HEAD
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        {/* Notice the change here: path="/" -> path="/*" */}
        <Route path="/*" element={<AdminLayout />} />
      </Routes>
=======
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
>>>>>>> 3dfea1165afb3f5ba7df9d7ea91eba85f8d270eb
    </Router>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminSidebar from "./components/AdminSidebar";
import ContactDetails from "./components/ContactDetails";
import BlogForm from "./components/BlogForm";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <AdminSidebar />

        {/* Main content area */}
        <main className="flex-1 bg-white p-6">
          <Routes>
            <Route path="contact-details" element={<ContactDetails />} />
            <Route path="blog-form" element={<BlogForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

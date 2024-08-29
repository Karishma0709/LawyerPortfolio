import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import AdminSidebar from "./components/AdminSidebar";
import ContactDetails from "./components/ContactDetails";
import BlogForm from "./components/BlogForm";
import Login from "./components/Login";
import "./App.css";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

const Layout = ({ children }) => {
  const location = useLocation();
  const showSidebar = location.pathname !== "/login";

  return (
    <div className="flex">
      {showSidebar && <AdminSidebar />}
      <main className="flex-1 bg-white p-6">
        {children}
      </main>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={
          <PrivateRoute>
            <Layout>
              <Routes>
                <Route path="contact-details" element={<ContactDetails />} />
                <Route path="blog-form" element={<BlogForm />} />
              </Routes>
            </Layout>
          </PrivateRoute>
        } />
      </Routes>
    </Router>
  );
};

export default App;




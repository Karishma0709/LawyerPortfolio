import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <div className="w-80 h-[100vh] bg-navy p-4">
      <h1>Admin Portal</h1>
      <nav>
        <ul>
          <li className="mb-4">
            <Link to="/contact-details" className="text-white text-lg hover:text-yellow-300">
              Contact Details
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/blog-form" className="text-white text-lg hover:text-yellow-300">
              Blog Form
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;

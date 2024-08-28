import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserShield } from 'react-icons/fa'; // Importing an icon for the admin

const AdminSidebar = () => {
  return (
    <div className="w-80 h-[100vh] bg-navy text-white p-6 shadow-lg">
      <div className="flex items-center mb-8">
        <FaUserShield className="text-yellow-300 text-3xl mr-3" /> {/* Admin Icon */}
        <h1 className="text-2xl font-bold">Admin Portal</h1>
      </div>
      <nav>
        <ul>
          <li className="mb-6">
            <Link
              to="/contact-details"
              className="text-lg hover:text-yellow-300 transition-colors duration-300 flex items-center"
            >
              <span className="material-icons mr-2">contact_mail</span>
              Contact Details
            </Link>
          </li>
          <li className="mb-6">
            <Link
              to="/blog-form"
              className="text-lg hover:text-yellow-300 transition-colors duration-300 flex items-center"
            >
              <span className="material-icons mr-2">edit</span>
              Blog Form
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;

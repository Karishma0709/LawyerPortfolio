import React from "react";
import { Link } from "react-router-dom";
import { FaUserShield, FaAddressBook, FaBlog } from "react-icons/fa";

const AdminSidebar = () => {
  return (
    <div className="w-80 h-screen bg-navy text-white p-6">
      <FaUserShield className="text-yellow-300 text-6xl mb-6" />
      <h1 className="text-2xl font-bold mb-4">Admin Portal</h1>
      <nav>
        <ul>
          <li className="mb-4">
            <Link
              to="/contact-details"
              className="text-lg hover:text-yellow-300 transition-colors duration-300 flex items-center"
            >
              <FaAddressBook className="mr-2" />
              Contact Details
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/blog-form"
              className="text-lg hover:text-yellow-300 transition-colors duration-300 flex items-center"
            >
              <FaBlog className="mr-2" />
              Blog Form
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;

import React from "react";
import { Link } from "react-router-dom";
import { FaUserShield, FaAddressBook, FaBlog } from "react-icons/fa";

const AdminSidebar = () => {
  return (
    <div className="w-80 h-[100vh] bg-navy text-white p-6 shadow-lg">
      <FaUserShield className="text-yellow-300 text-9xl text-center ml-10" />{" "}
      {/* Admin Icon */}
      <div className="flex items-center my-8">
        <h1 className="text-4xl font-bold">Admin Portal</h1>
      </div>
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

<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import { FaUserShield, FaAddressBook, FaBlog } from "react-icons/fa";
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserShield } from 'react-icons/fa'; // Importing an icon for the admin
>>>>>>> 3dfea1165afb3f5ba7df9d7ea91eba85f8d270eb

const AdminSidebar = () => {
  return (
    <div className="w-80 h-[100vh] bg-navy text-white p-6 shadow-lg">
       <FaUserShield className="text-yellow-300 text-9xl text-center ml-10" /> {/* Admin Icon */}
      <div className="flex items-center my-8">
        <h1 className="text-4xl font-bold">Admin Portal</h1>
      </div>
      <nav>
        <ul>
<<<<<<< HEAD
          <li className="mb-4">
=======
          <li className="mb-6">
>>>>>>> 3dfea1165afb3f5ba7df9d7ea91eba85f8d270eb
            <Link
              to="/contact-details"
              className="text-lg hover:text-yellow-300 transition-colors duration-300 flex items-center"
            >
<<<<<<< HEAD
              <FaAddressBook className="mr-2" />
              Contact Details
            </Link>
          </li>
          <li className="mb-4">
=======
             
              Contact Details
            </Link>
          </li>
          <li className="mb-6">
>>>>>>> 3dfea1165afb3f5ba7df9d7ea91eba85f8d270eb
            <Link
              to="/blog-form"
              className="text-lg hover:text-yellow-300 transition-colors duration-300 flex items-center"
            >
<<<<<<< HEAD
              <FaBlog className="mr-2" />
=======
>>>>>>> 3dfea1165afb3f5ba7df9d7ea91eba85f8d270eb
              Blog Form
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;

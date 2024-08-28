import React from 'react';
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-2">123 Legal Street</p>
          <p className="mb-2">City, State, ZIP</p>
          <p className="mb-2">
            <a href="tel:+1234567890" className="hover:text-yellow-500">Phone: (123) 456-7890</a>
          </p>
          <p>
            <a href="mailto:info@lawyerportfolio.com" className="hover:text-yellow-500">Email: info@lawyerportfolio.com</a>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><NavLink to="/" className="hover:underline hover:text-yellow-500">Home</NavLink></li>
            <li><NavLink to="/about" className="hover:underline hover:text-yellow-500">About Us</NavLink></li>
            <li><NavLink to="/practiceArea" className="hover:underline hover:text-yellow-500">Practice Area</NavLink></li>
            <li><NavLink to="/contactUs" className="hover:underline hover:text-yellow-500">Contact</NavLink></li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-500"><FaFacebookF size={24} /></a>
            <a href="#" className="hover:text-yellow-500"><FaTwitter size={24} /></a>
            <a href="#" className="hover:text-yellow-500"><FaYoutube size={24} /></a>
            <a href="#" className="hover:text-yellow-500"><FaLinkedinIn size={24} /></a>
          </div>
        </div>
      </div>
      
      
      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} Lawyer Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-2">123 Legal Street</p>
          <p className="mb-2">City, State, ZIP</p>
          <p className="mb-2">Phone: (123) 456-7890</p>
          <p>Email: info@lawyerportfolio.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500"><i className="fab fa-facebook-f"></i> Facebook</a>
            <a href="#" className="hover:text-blue-400"><i className="fab fa-twitter"></i> Twitter</a>
            <a href="#" className="hover:text-red-600"><i className="fab fa-youtube"></i> YouTube</a>
            <a href="#" className="hover:text-blue-700"><i className="fab fa-linkedin-in"></i> LinkedIn</a>
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

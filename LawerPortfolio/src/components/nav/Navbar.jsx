import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".nav-link",
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" }
    );

    gsap.fromTo(
      "img",
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        ".menu-item",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.2, ease: "power3.out" }
      );
    }
  }, [isMenuOpen]);

  return (
    <div className="relative flex justify-between items-center py-6 px-6 md:px-40 bg-white shadow-lg">
      {/* Logo Section */}
      <div className="transition-transform duration-300 ease-in-out transform hover:scale-110">
        <a href="/">
          <img src={logo} alt="logo" className="h-12 sm:h-16 md:h-20" />
        </a>
      </div>

      {/* Hamburger Icon for Small Screens */}
      <div className="md:hidden z-50">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl text-gray-800 focus:outline-none"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row md:items-center md:space-x-14 absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 ease-in-out z-40 items-center`}
      >
        <NavLink
          to="/"
          exact
          className="menu-item nav-link text-lg md:text-xl font-semibold text-gray-800 hover:text-yellow-500 hover:underline transition duration-300 py-4 md:py-0 text-center"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="menu-item nav-link text-lg md:text-xl font-semibold text-gray-800 hover:text-yellow-500 hover:underline transition duration-300 py-4 md:py-0 text-center"
          onClick={() => setIsMenuOpen(false)}
        >
          About Us
        </NavLink>
        <NavLink
          to="/practiceArea"
          className="menu-item nav-link text-lg md:text-xl font-semibold text-gray-800 hover:text-yellow-500 hover:underline transition duration-300 py-4 md:py-0 text-center"
          onClick={() => setIsMenuOpen(false)}
        >
          Practice Area
        </NavLink>
        <NavLink
          to="/blog"
          className="menu-item nav-link text-lg md:text-xl font-semibold text-gray-800 hover:text-yellow-500 hover:underline transition duration-300 py-4 md:py-0 text-center"
          onClick={() => setIsMenuOpen(false)}
        >
          Blog
        </NavLink>
        <NavLink
          className="menu-item button-arounder text-lg md:text-xl font-semibold text-white bg-navy py-4 px-6 rounded hover:bg-yellow-500 hover:text-navy transition duration-300 my-4 md:my-0 text-center"
          to="/contactUs"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact Us
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

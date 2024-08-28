import React, { useEffect } from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";

const Navbar = () => {
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

  return (
    <div className="flex justify-between items-center py-6 px-40 bg-white shadow-lg">
      {/* Logo Section */}
      <div className="transition-transform duration-300 ease-in-out transform hover:scale-110">
        <a href="/">
          <img
            src={logo}
            alt="logo"
            className="h-12 sm:h-16 md:h-20"
          />
        </a>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-20 md:space-x-14">
        <NavLink
          to="/"
          exact
          className="nav-link text-lg md:text-xl font-semibold text-gray-800 hover:text-yellow-500 hover:underline transition duration-300"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="nav-link text-lg md:text-xl font-semibold text-gray-800 hover:text-yellow-500 hover:underline transition duration-300"
        >
          About Us
        </NavLink>
        <NavLink
          to="/practiceArea"
          className="nav-link text-lg md:text-xl font-semibold text-gray-800 hover:text-yellow-500 hover:underline transition duration-300"
        >
          Practice Area
        </NavLink>
        <NavLink
          to="/blog"
          className="nav-link text-lg md:text-xl font-semibold text-gray-800 hover:text-yellow-500 hover:underline transition duration-300"
        >
          Blog
        </NavLink>
      </div>

      {/* Contact Us Button */}
      <div>
        <NavLink
          className="button-arounder text-lg md:text-xl font-semibold text-white bg-navy py-4 px-6 rounded hover:bg-yellow-500 hover:text-navy transition duration-300"
          to="/contactUs"
        >
          Contact Us
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

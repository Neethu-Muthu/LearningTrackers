// Navbar.js
import React from "react";
import { Link } from "react-router-dom"; // If you're using React Router

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link to="/">Learning Tracker</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-blue-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/courses" className="text-white hover:text-blue-300">
              Courses
            </Link>
          </li>
          <li>
            <Link to="/certificates" className="text-white hover:text-blue-300">
              Certificates
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-blue-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-blue-300">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

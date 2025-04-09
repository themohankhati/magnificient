import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src="Images/Magnificent logo.png" alt="Logo" className="h-14" />
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8 text-lg font-semibold">
            <li>
              <Link
                to="/destinations"
                className="relative text-gray-800 hover:text-blue-600 transition duration-300"
              >
                <span className="hover-underline">DESTINATIONS</span>
              </Link>
            </li>
            <li>
              <Link
                to="/activities"
                className="relative text-gray-800 hover:text-blue-600 transition duration-300"
              >
                <span className="hover-underline">ACTIVITIES</span>
              </Link>
            </li>
            <li>
              <Link
                to="/aboutus"
                className="relative text-gray-800 hover:text-blue-600 transition duration-300"
              >
                <span className="hover-underline">ABOUT US</span>
              </Link>
            </li>
            <li>
              <Link
                to="/contactus"
                className="relative text-gray-800 hover:text-blue-600 transition duration-300"
              >
                <span className="hover-underline">CONTACT US</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Custom underline effect with Tailwind */}
      <style>{`
        .hover-underline::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0%;
          height: 2px;
          background-color: #2563eb;
          transition: width 0.3s ease;
        }
        .hover-underline:hover::after {
          width: 100%;
        }
      `}</style>
    </header>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="w-full px-8 py-3 flex items-center justify-between max-w-[1600px] mx-auto">
        {/* Logo */}
        <Link to="/">
          <img src="Images/Magnificent logo.png" alt="Logo" className="h-14" />
        </Link>

        {/* Navigation and Auth Buttons */}
        <div className="flex items-center space-x-8">
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

          {/* Login/Register Buttons */}
          <div className="flex space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition duration-300"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition duration-300"
            >
              Register
            </Link>
          </div>
        </div>
      </div>

      {/* Custom underline effect */}
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

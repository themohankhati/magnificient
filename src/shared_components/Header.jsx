import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setLoggedInUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setLoggedInUser(null);
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top Announcement Bar */}
      <div className="bg-blue-900 overflow-hidden whitespace-nowrap">
        <p className="text-white py-1.5 text-sm animate-slide">
          Celebrating 30 Years of Excellence – Serving since 1995 | Explore Nepal, Bhutan, Tibet & India | 📞 +977 1 4523218, 4529264 | ✉️ info@magnificenttravels.com
        </p>
      </div>

      {/* Main Header Content */}
      <div className="bg-white shadow-md w-full px-8 py-1 flex items-center justify-between mx-auto">
        {/* Logo */}
        <Link to="/">
          <img src="/Images/Magnificent logo.png" alt="Logo" className="h-18" />
        </Link>

        {/* Navigation and Auth Buttons */}
        <div className="flex items-center space-x-30">
          <nav>
            <ul className="flex space-x-20 text-lg font-semibold">
              <li><Link to="/" className="relative text-gray-800 hover:text-blue-600 transition duration-300"><span className="hover-underline">Home</span></Link></li>
              <li className="relative group">
                <span className="relative text-gray-800 hover:text-blue-600 transition duration-300 cursor-pointer hover-underline">Destinations</span>
                <ul className="absolute left-0 min-w-full bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto transition-all duration-200 z-50">
                  <li><Link to="/tour/nepal" className="block px-4 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-700 transition">Nepal</Link></li>
                  <li><Link to="/tour/tibet" className="block px-4 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-700 transition">Tibet</Link></li>
                  <li><Link to="/tour/bhutan" className="block px-4 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-700 transition">Bhutan</Link></li>
                  <li><Link to="/tour/india" className="block px-4 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-700 transition">India</Link></li>
                </ul>
              </li>
              <li><Link to="/Tours" className="relative text-gray-800 hover:text-blue-600 transition duration-300"><span className="hover-underline">Tours</span></Link></li>
              <li><Link to="/activities" className="relative text-gray-800 hover:text-blue-600 transition duration-300"><span className="hover-underline">Activites</span></Link></li>
              <li><Link to="/aboutus" className="relative text-gray-800 hover:text-blue-600 transition duration-300"><span className="hover-underline">About Us</span></Link></li>
              <li><Link to="/contactus" className="relative text-gray-800 hover:text-blue-600 transition duration-300"><span className="hover-underline">Contact Us</span></Link></li>
            </ul>
          </nav>

          {/* Auth Section */}
          <div className="flex space-x-4 items-center ml-6">
            {loggedInUser ? (
              <>
                <span className="text-blue-800 font-semibold">
                  Welcome, {loggedInUser?.first_name}
                </span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 border border-red-500 text-red-500 rounded-lg font-medium hover:bg-red-500 hover:text-white transition duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="px-4 py-2 border border-blue-900 text-blue-900 rounded-lg font-medium hover:bg-blue-800 hover:text-white transition duration-300">Login</Link>
                <Link to="/register" className="px-4 py-2 bg-blue-900 text-white rounded-lg font-medium hover:bg-blue-600 transition duration-300">Register</Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Custom underline and animation styles */}
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

        @keyframes slide {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }

        .animate-slide {
          display: inline-block;
          animation: slide 20s linear infinite;
        }
      `}</style>
    </header>
  );
};

export default Header;

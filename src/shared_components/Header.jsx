import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Hamburger and close icons

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [destOpen, setDestOpen] = useState(false);

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

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top Bar */}
      <div className="bg-blue-900 overflow-hidden whitespace-nowrap">
        <p className="text-white py-1.5 text-sm animate-slide text-center">
          Celebrating 30 Years of Excellence – Serving since 1995 | Explore Nepal, Bhutan, Tibet & India | 📞 +977 1 4523218, 4529264 | ✉️ info@magnificenttravels.com
        </p>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-md w-full px-4 md:px-8 py-2 flex items-center justify-between mx-auto">
        {/* Logo */}
        <Link to="/">
          <img src="/Images/Magnificent logo.png" alt="Logo" className="h-14 sm:h-16" />
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none text-blue-900"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-lg font-semibold">
          <Link to="/" className="relative text-gray-800 hover:text-blue-600 hover-underline">Home</Link>

          <div className="relative group">
            <span className="relative text-gray-800 hover:text-blue-600 hover-underline cursor-pointer">Destinations</span>
            <ul className="absolute left-0 min-w-full bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto transition-all duration-200 z-50">
              <li><Link to="/tour/nepal" className="block px-4 py-2 hover:bg-blue-100 text-gray-800">Nepal</Link></li>
              <li><Link to="/tour/tibet" className="block px-4 py-2 hover:bg-blue-100 text-gray-800">Tibet</Link></li>
              <li><Link to="/tour/bhutan" className="block px-4 py-2 hover:bg-blue-100 text-gray-800">Bhutan</Link></li>
              <li><Link to="/tour/india" className="block px-4 py-2 hover:bg-blue-100 text-gray-800">India</Link></li>
            </ul>
          </div>

          <Link to="/Tours" className="relative text-gray-800 hover:text-blue-600 hover-underline">Tours</Link>
          <Link to="/activities" className="relative text-gray-800 hover:text-blue-600 hover-underline">Activities</Link>
          <Link to="/aboutus" className="relative text-gray-800 hover:text-blue-600 hover-underline">About Us</Link>
          <Link to="/contactus" className="relative text-gray-800 hover:text-blue-600 hover-underline">Contact Us</Link>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {loggedInUser ? (
            <>
              <span className="text-blue-800 font-semibold">
                Welcome, {loggedInUser?.first_name}
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 border border-red-500 text-red-500 rounded-lg font-medium hover:bg-red-500 hover:text-white transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="px-4 py-2 border border-blue-900 text-blue-900 rounded-lg font-medium hover:bg-blue-800 hover:text-white transition">Login</Link>
              <Link to="/register" className="px-4 py-2 bg-blue-900 text-white rounded-lg font-medium hover:bg-blue-600 transition">Register</Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Nav */}
  {menuOpen && (
  <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-4 text-base font-medium">
    <Link to="/" onClick={toggleMenu} className="block text-gray-800">Home</Link>

    {/* Expandable Mobile Destinations */}
    <div>
      <button
        onClick={() => setDestOpen(!destOpen)}
        className="w-full text-left text-gray-800 font-semibold focus:outline-none"
      >
        Destinations {destOpen ? "▲" : "▼"}
      </button>
      {destOpen && (
        <div className="pl-4 pt-2 space-y-1">
          <Link to="/tour/nepal" onClick={toggleMenu} className="block text-gray-700">Nepal</Link>
          <Link to="/tour/tibet" onClick={toggleMenu} className="block text-gray-700">Tibet</Link>
          <Link to="/tour/bhutan" onClick={toggleMenu} className="block text-gray-700">Bhutan</Link>
          <Link to="/tour/india" onClick={toggleMenu} className="block text-gray-700">India</Link>
        </div>
      )}
    </div>

    <Link to="/Tours" onClick={toggleMenu} className="block text-gray-800">Tours</Link>
    <Link to="/activities" onClick={toggleMenu} className="block text-gray-800">Activities</Link>
    <Link to="/aboutus" onClick={toggleMenu} className="block text-gray-800">About Us</Link>
    <Link to="/contactus" onClick={toggleMenu} className="block text-gray-800">Contact Us</Link>

    {/* Auth Section */}
    {loggedInUser ? (
      <div className="pt-2">
        <p className="text-blue-800 font-semibold">Welcome, {loggedInUser.first_name}</p>
        <button
          onClick={() => {
            handleLogout();
            setMenuOpen(false);
          }}
          className="mt-2 w-full px-4 py-2 border border-red-500 text-red-500 rounded-lg font-medium hover:bg-red-500 hover:text-white transition"
        >
          Logout
        </button>
      </div>
    ) : (
      <div className="space-y-2 pt-2">
        <Link to="/login" onClick={toggleMenu} className="block w-full px-4 py-2 border border-blue-900 text-blue-900 rounded-lg text-center hover:bg-blue-800 hover:text-white transition">Login</Link>
        <Link to="/register" onClick={toggleMenu} className="block w-full px-4 py-2 bg-blue-900 text-white rounded-lg text-center hover:bg-blue-600 transition">Register</Link>
      </div>
    )}
  </div>
)}


      {/* Custom Styles */}
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

import React from "react";
import { useState } from "react";
import {
  FaBell,
  FaTicketAlt,
  FaListAlt,
  FaUtensils,
  FaEdit,
  FaPlus,
  FaHome,
  FaFileInvoiceDollar,
  FaTasks,
  FaCog,
  FaMoneyBillWave,
  FaUser,
} from "react-icons/fa";
import { GoPackage } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
const UserDetails = () => {
  const [activeMenu, setActiveMenu] = useState(null); // tracks which submenu is open
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  const toggleMenu = (menuName) => {
    setActiveMenu((prev) => (prev === menuName ? null : menuName));
  };
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      {/* Sidebar */}
      <aside className="w-50 text-black flex flex-col bg-white">
        <div className="p-4">
          <img src="Images/Magnificent logo.png" alt="Logo" />
        </div>
        <nav className="flex-1 px-4 space-y-4">
          <Link to="/dashboard" className="flex items-center px-4 py-2  hover:bg-gray-700 hover:text-white">
            <FaHome className="mr-2" /> Home
          </Link>

          {/* Billing Menu */}

          {/* Static Links */}
          <Link to="/dashboardpackage" className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-white">
            <GoPackage className="mr-2" /> Package
          </Link>
          <Link to="/userdetails" className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-white">
            <FaUser className="mr-2" /> Users
          </Link>
          <Link to="/customerdetails" className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-white">
            <FaUser className="mr-2" /> Customers
          </Link>

          {/* Settings Menu */}
        </nav>
      </aside>
      {/* Main Section */}
      <main className="flex-1 bg-gray-100">
        {/* Topbar */}
        <div className="flex justify-end items-center p-4 bg-white shadow gap-4">
          <img src="Images/cultural-historical.jpg" alt="Profile" className="w-10 h-10 rounded-full" />
          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <div className="cursor-pointer ">
              <p className="text-red-500">Ella Jones</p>
              <p className="text-sm">Admin</p>
            </div>

            {showDropdown && (
              <div className="absolute right-0  w-40 bg-white border rounded shadow z-50 ">
                <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  My Profile
                </Link>
                <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto p-6">
          <table className="min-w-full bg-white shadow rounded text-sm">
            <thead className="bg-black text-white">
              <tr>
                <th className="px-4 py-2 text-left">User Id</th>
                <th className="px-4 py-2 text-left">User Name</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Phone Number</th>
                <th className="px-4 py-2 text-left">Email</th>
              </tr>
            </thead>
            <tr>
              <td className="px-4 py-2 text-left">1</td>
              <td className="px-4 py-2 text-left">Mohan Kalu</td>
              <td className="px-4 py-2 text-left">2025/09/9</td>
              <td className="px-4 py-2 text-left">9867396900</td>
              <td className="px-4 py-2 text-left">pantamanoj08@gmail.com</td>
            </tr>
          </table>
        </div>
      </main>
    </div>
  );
};

export default UserDetails;

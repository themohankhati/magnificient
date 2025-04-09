import React from "react";
import {
  FaBell,

  FaHome,

  FaTasks,
  FaUser,
} from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GoPackage } from "react-icons/go";
const CustomerDetails = () => {
    const [showDropdown, setShowDropdown] = useState(false)
  

  return (
    <div className="flex min-h-screen">
       {/* Sidebar */}
        <aside className="w-50 text-black flex flex-col bg-white">
          <div className="p-4">
            <img
              src="Images/Magnificent logo.png"
              alt="Logo"
        
            />
          </div>
          <nav className="flex-1 px-4 space-y-4">
            <Link
              to="/dashboard"
              className="flex items-center px-4 py-2  hover:bg-gray-700 hover:text-white"
            >
              <FaHome className="mr-2" /> Home
            </Link>
  
            {/* Billing Menu */}
        
  
            {/* Static Links */}
            <Link
              to="/package"
              className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-white"
            >
              <GoPackage className="mr-2" /> Package
            </Link>
            <Link
              to="/userdetails"
              className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-white"
            >
              <FaUser className="mr-2" /> Users
            </Link>
            <Link
              to="/customerdetails"
              className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-white"
            >
              <FaUser className="mr-2" /> Customers
            </Link>
          
  
            {/* Settings Menu */}
   
  
  
          </nav>
        </aside>

      {/* Main Section */}
      <main className="flex-1 bg-gray-100">
        {/* Topbar */}
        <div className="flex justify-end items-center p-4 bg-white shadow gap-4">
          <FaBell className="mr-4" />
          <img
            src="/Images/cultural-historical.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
     <div
                className="relative"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <div className="cursor-pointer">
                  <p className="text-red-500">Ella Jones</p>
                  <p className="text-sm">Admin</p>
                </div>
  
                {showDropdown && (
                  <div className="absolute right-0  w-40 bg-white border rounded shadow z-50">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      My Profile
                    </Link>
                    <button
                      onClick={() => alert("Logging out...")}
                      className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
        </div>

        {/* Action Buttons */}


        {/* Table */}
        <div className="overflow-x-auto p-6">
          <table className="min-w-full bg-white shadow rounded text-sm">
            <thead className="bg-black text-white">
              <tr>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Customers Name</th>
                <th className="px-4 py-2 text-left">Phone Number </th>
                <th className="px-4 py-2 text-left">Email </th>
                <th className="px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tr>
                <td className="px-4 py-2 text-left">1</td>
                <td className="px-4 py-2 text-left">Manoj Babu</td>
                <td className="px-4 py-2 text-left">2025/10/9</td>
                <td className="px-4 py-2 text-left">984234543</td>
                <td className="px-4 py-2 text-left">pantamanoj08@gmail.com</td>
              </tr>
          </table>
        </div>
      </main>
    </div>
  );
};

export default CustomerDetails;

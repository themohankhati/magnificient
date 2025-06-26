import React, { useState } from "react";
import {
  FaPlus,
  FaBell,
  FaHome,
  FaTasks,
  FaFileInvoiceDollar,
  FaUser,
} from "react-icons/fa";
import { GoPackage } from "react-icons/go";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-50 text-black flex flex-col bg-white">
        <div className="p-4">
          <img src="Images/Magnificent logo.png" alt="Logo" />
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
            to="/dashboardpackage"
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

      {/* Main Content */}
      <main className="flex-1 bg-gray-100">
        {/* Header */}
        <div className="flex justify-end p-4 bg-white shadow">
          <div className="flex items-center space-x-4">
          
            <img
              src="Images/cultural-historical.jpg"
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
        </div>

        {/* Stats Cards */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-200 text-black p-6 rounded shadow text-center flex  gap-10 justify-center items-center">
            <FaBell className="text-2xl mb-2" />
            <div>
              <h2 className="text-xl font-semibold">Revenue</h2>
              <p className="text-lg font-bold">$23,540.00</p>
            </div>
          </div>
          <div className="bg-gray-200 text-black p-6 rounded shadow text-center flex  gap-10 justify-center items-center">
            <FaBell className="text-2xl mb-2 " />
            <div>
              <h2 className="text-xl font-semibold">Orders</h2>
              <p className="text-lg font-bold">20</p>
            </div>
          </div>
          <div className="bg-gray-200 text-black p-6 rounded shadow text-center flex  gap-10 justify-center items-center">
            <FaFileInvoiceDollar className="text-2xl mb-2" />
            <div>
              <h2 className="text-xl font-semibold">Room Available</h2>
              <p className="text-lg font-bold">100</p>
            </div>
          </div>
          <div className="bg-gray-200 text-black p-6 rounded shadow text-center flex  gap-10 justify-center items-center">
            <FaTasks className="text-2xl mb-2" />
            <div>
              <h2 className="text-xl font-semibold">Bookings</h2>
              <p className="text-lg font-bold">50</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}

        {/* Orders Table */}
        <div className="overflow-x-auto p-6">
          <table className="min-w-full bg-white shadow rounded">
            <thead className="bg-black text-white">
              <tr>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Order ID</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">Quantity</th>
                <th className="p-3 text-left">Total</th>
              </tr>
            </thead>
            <tr>
              <td className="p-3 text-left">2025/01/3</td>
              <td className="p-3 text-left">4</td>
              <td className="p-3 text-left">ORD-34</td>
              <td className="p-3 text-left">$100</td>
              <td className="p-3 text-left">Value</td>
              <td className="p-3 text-left">$100</td>
            </tr>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

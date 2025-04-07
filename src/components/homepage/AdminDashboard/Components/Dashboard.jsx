import React, { useState } from "react";
import {
  FaPlus,
  FaBell,
  FaHome,
  FaTasks,
  FaFileInvoiceDollar,
  FaTicketAlt,
  FaListAlt,
  FaUtensils,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState(null); // tracks which submenu is open

  const toggleMenu = (menuName) => {
    setActiveMenu((prev) => (prev === menuName ? null : menuName));
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-110 text-black flex flex-col bg-white">
        <div className="p-4">
          <img
            src="/Images/Magnificent logo.png"
            alt="Logo"
            className="h-50"
          />
        </div>
        <nav className="flex-1 px-4 space-y-4">
          <Link
            to="/"
            className="flex items-center px-4 py-2 bg-orange-500 rounded"
          >
            <FaHome className="mr-2" /> Home
          </Link>

          {/* Billing Menu */}
          <div>
            <button
              className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-700 hover:text-white"
              onClick={() => toggleMenu("billing")}
            >
              <span className="flex items-center">
                <FaFileInvoiceDollar className="mr-2" /> Billing
              </span>
              <FaPlus />
            </button>
            {activeMenu === "billing" && (
              <div className="pl-6 space-y-1 flex flex-col bg-white shadow-2xl">
                <Link to="#" className="hover:text-red-500">Sales</Link>
                <Link to="#" className="hover:text-red-500">Purchases</Link>
                <Link to="#" className="hover:text-red-500">Orders</Link>
                <Link to="#" className="hover:text-red-500">Revenue</Link>
              </div>
            )}
          </div>

          {/* Static Links */}
          <Link
            to="/vendors"
            className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-white"
          >
            <FaTasks className="mr-2" /> Vendors
          </Link>
          <Link
            to="/userdetails"
            className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-white"
          >
            <FaTasks className="mr-2" /> Users
          </Link>
          <Link
            to="/customerdetails"
            className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-white"
          >
            <FaTasks className="mr-2" /> Customers
          </Link>
          <Link
            to="/productdetails"
            className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-white"
          >
            <FaTasks className="mr-2" /> Products
          </Link>

          {/* Settings Menu */}
          <div>
            <button
              className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-700 hover:text-white"
              onClick={() => toggleMenu("settings")}
            >
              <span className="flex items-center">
                <FaFileInvoiceDollar className="mr-2" /> Settings
              </span>
              <FaPlus />
            </button>
            {activeMenu === "settings" && (
              <div className="pl-6 space-y-1 flex flex-col bg-white shadow-2xl">
                <Link to="#" className="hover:text-red-500">Category</Link>
                <Link to="#" className="hover:text-red-500">Sub Category</Link>
                <Link to="#" className="hover:text-red-500">Unit</Link>
                <Link to="#" className="hover:text-red-500">User Role</Link>
              </div>
            )}
          </div>

          {/* Finance Menu */}
          <div>
            <button
              className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-700 hover:text-white"
              onClick={() => toggleMenu("finance")}
            >
              <span className="flex items-center">
                <FaFileInvoiceDollar className="mr-2" /> Finance
              </span>
              <FaPlus />
            </button>
            {activeMenu === "finance" && (
              <div className="pl-6 space-y-1 flex flex-col bg-white shadow-2xl">
                <Link to="#" className="hover:text-red-500">Inventory</Link>
                <Link to="#" className="hover:text-red-500">Items</Link>
              </div>
            )}
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100">
        {/* Header */}
        <div className="flex justify-end p-4 bg-white shadow">
          <div className="flex items-center space-x-4">
            <FaBell />
            <img
              src="Images/cultural-historical.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-red-500">Ella Jones</p>
              <p className="text-sm">Admin</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white text-black p-6 rounded shadow text-center">
            <FaBell className="text-2xl mb-2" />
            <h2 className="text-xl font-semibold">Revenue</h2>
            <p className="text-lg font-bold">$23,540.00</p>
          </div>
          <div className="bg-white text-black p-6 rounded shadow text-center">
            <FaBell className="text-2xl mb-2" />
            <h2 className="text-xl font-semibold">Orders</h2>
            <p className="text-lg font-bold">20</p>
          </div>
          <div className="bg-white text-black p-6 rounded shadow text-center">
            <FaFileInvoiceDollar className="text-2xl mb-2" />
            <h2 className="text-xl font-semibold">Room Available</h2>
            <p className="text-lg font-bold">100</p>
          </div>
          <div className="bg-white text-black p-6 rounded shadow text-center">
            <FaTasks className="text-2xl mb-2" />
            <h2 className="text-xl font-semibold">Bookings</h2>
            <p className="text-lg font-bold">50</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 p-6">
          <button className="flex items-center bg-white text-black px-6 py-3 rounded shadow">
            <FaTicketAlt className="mr-2" /> New Booking
          </button>
          <button className="flex items-center bg-white text-black px-6 py-3 rounded shadow">
            <FaListAlt className="mr-2" /> Room Food Order
          </button>
          <button className="flex items-center bg-white text-black px-6 py-3 rounded shadow">
            <FaUtensils className="mr-2" /> Restaurant Order
          </button>
        </div>

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
            <tbody></tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

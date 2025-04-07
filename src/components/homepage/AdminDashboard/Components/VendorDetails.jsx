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
} from "react-icons/fa";
import { Link } from "react-router-dom";
const VendorDetails = () => {
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
             className="h-40"
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

      {/* Main Section */}
      <main className="flex-1 bg-gray-100">
        {/* Topbar */}
        <div className="flex justify-end items-center p-4 bg-white shadow">
          <FaBell className="mr-4" />
          <img
            src="Images/cultural-historical.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-4">
            <p className="text-red-500">Ella Jones</p>
            <p className="text-sm">Admin</p>
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

        {/* Table */}
        <div className="overflow-x-auto p-6">
          <table className="min-w-full bg-white shadow rounded text-sm">
            <thead className="bg-black text-white">
              <tr>
                <th className="px-4 py-2 text-left">Code</th>
                <th className="px-4 py-2 text-left">Company Name</th>
                <th className="px-4 py-2 text-left">Company Email</th>
                <th className="px-4 py-2 text-left">Company Contact</th>
                <th className="px-4 py-2 text-left">Company Address</th>
                <th className="px-4 py-2 text-left">Staff Name</th>
                <th className="px-4 py-2 text-left">Staff Email</th>
                <th className="px-4 py-2 text-left">Staff Contact</th>
                <th className="px-4 py-2 text-left">Designation</th>
                <th className="px-4 py-2 text-left">Gender</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">001</td>
                <td className="px-4 py-2">Tech Innovations Ltd.</td>
                <td className="px-4 py-2">contact@techinnovations.com</td>
                <td className="px-4 py-2">+1 234 567 890</td>
                <td className="px-4 py-2">
                  123 Silicon Valley, Suite 200, San Francisco, CA
                </td>
                <td className="px-4 py-2">John Doe</td>
                <td className="px-4 py-2">johndoe@techinnovations.com</td>
                <td className="px-4 py-2">+1 234 567 891</td>
                <td className="px-4 py-2">Project Manager</td>
                <td className="px-4 py-2">Male</td>
                <td className="px-4 py-2">Active</td>
                <td className="px-4 py-2 flex space-x-2">
                  <a href="EditDetails.html">
                    <FaEdit />
                  </a>
                  <a href="EditDetails.html">
                    <FaEdit />
                  </a>
                  <a href="EditDetails.html">
                    <FaEdit />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default VendorDetails;

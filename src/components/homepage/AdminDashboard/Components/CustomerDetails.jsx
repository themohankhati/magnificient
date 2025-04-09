import React from "react";
import {
  FaBell,
  FaTicketAlt,
  FaListAlt,
  FaUtensils,
  FaPlus,
  FaHome,
  FaFileInvoiceDollar,
  FaTasks,
} from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
const CustomerDetails = () => {
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
               src="Images/Magnificent logo.png"
               alt="Logo"
               className="h-50"
             />
           </div>
           <nav className="flex-1 px-4 space-y-4">
             <Link
               to="/dashboard"
               className="flex items-center px-4 py-2 bg-orange-500 rounded"
             >
               <FaHome className="mr-2" /> Home
             </Link>
   
             {/* Billing Menu */}
         
   
             {/* Static Links */}
             <Link
               to="/package"
               className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-white"
             >
               <FaTasks className="mr-2" /> Package
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
           
   
             {/* Settings Menu */}
    
   
   
           </nav>
         </aside>
   

      {/* Main Section */}
      <main className="flex-1 bg-gray-100">
        {/* Topbar */}
        <div className="flex justify-end items-center p-4 bg-white shadow">
          <FaBell className="mr-4" />
          <img
            src="/Images/cultural-historical.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-4">
            <p className="text-red-500">Ella Jones</p>
            <p className="text-sm">Admin</p>
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
          </table>
        </div>
      </main>
    </div>
  );
};

export default CustomerDetails;

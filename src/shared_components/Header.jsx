import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="flex items-center p-2 bg-white shadow-md relative z-10 l">
      <div className="pr-0.000005">
        <img src="Images/Magnificent logo.png" alt="Logo" className="h-16" />
      </div>
      <nav className="ml-auto">
        <ul className="flex gap-22 list-none pr-30">
          <li>
            <Link
              to="/destinations"
              className="text-gray-900 font-bold transition-colors duration-300 hover:text-blue-500"
            >
              DESTINATIONS
            </Link>
          </li>
          <li>
            <Link
              to="/activities"
              className="text-gray-900 font-bold transition-colors duration-300 hover:text-blue-500"
            >
              ACTIVITIES
            </Link>
          </li>
          <li>
            {/* <a className="text-gray-900 font-bold transition-colors duration-300 hover:text-blue-500"> */}
            <Link
              to="/aboutus"
              className="text-gray-900 font-bold transition-colors duration-300 hover:text-blue-500"
            >
              {" "}
              ABOUT US
            </Link>
            {/* </a> */}
          </li>
          <li>
            <Link
              to="/contactus"
              className="text-gray-900 font-bold transition-colors duration-300 hover:text-blue-500"
            >
              CONTACT US
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

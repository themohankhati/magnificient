import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center p-2 bg-white shadow-md relative z-10">
      <div className="pr-0.000005">
        <img src="Magnificent logo.png" alt="Logo" className="h-16" />
      </div>
      <nav className="ml-auto">
        <ul className="flex gap-22 list-none pr-120">
          <li>
            <a
              href="#"
              className="text-gray-900 font-bold transition-colors duration-300 hover:text-blue-500"
            >
              DESTINATIONS
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-900 font-bold transition-colors duration-300 hover:text-blue-500"
            >
              ACTIVITIES
            </a>
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
            <a
              href="#"
              className="text-gray-900 font-bold transition-colors duration-300 hover:text-blue-500"
            >
              CONTACT US
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

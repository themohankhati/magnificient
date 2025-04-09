import React from "react";
const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 text-black text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start px-4">
        <div className="flex flex-col items-start">
          <img
            src="Images/Magnificent logo.png"
            alt="Magnificent Travels & Tours Logo"
            className="h-20 mb-4"
          />
        </div>
        <div className="flex flex-wrap justify-between w-full md:w-auto gap-30">
          <div>
            <h3 className="font-bold text-lg mb-2">Destinations</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Nepal
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Tibet
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  India
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Bhutan
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Popular Trips</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Everest Base Camp Trek
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Annapurna Trek
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Kilimanjaro Climbing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Nepal and Bhutan Tour
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Annapurna Base Camp Trek
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Incredible India Tour
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Company</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Awards and Achievements
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 mt-8 py-4 bg-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <div className="flex items-center">
            <img
              src="Images/Magnificent logo.png"
              alt="Magnificent Travels & Tours Logo"
              className="h-10 mr-3"
            />
            <div>
              <p className="text-gray-900">Crafting Unforgettable Adventures</p>
              <p className="text-gray-400 text-xs">All rights reserved ©</p>
            </div>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-gray-900 mr-4">Follow Us :</span>
            <div className="flex gap-4">
              <a href="#">
                <img src="Images/Facebook-logo.png" alt="Facebook" className="h-6" />
              </a>
              <a href="#">
                <img src="Images/instagram-logo.png" alt="Instagram" className="h-6" />
              </a>
              <a href="#">
                <img src="Images/x-logo.png" alt="X" className="h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";

const Section = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="min-w-[200px] w-full md:w-auto">
      {/* Button on mobile, static heading on md+ */}
      <button
        type="button"
        className="w-full md:w-auto flex items-center justify-between md:justify-start font-bold text-lg py-2 md:py-0 mb-2 md:mb-2"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
     >
        <span>{title}</span>
        <svg
          className="h-5 w-5 md:hidden transition-transform"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96" : "max-h-0"} md:max-h-none`}>
        <ul className="space-y-1 text-left pl-1 md:pl-0">{children}</ul>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 text-black text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start px-4 gap-10 md:gap-0">
        <div className="flex flex-col items-center md:items-start w-full md:w-auto">
          <img
            src="/Images/Magnificent logo.png"
            alt="Magnificent Travels & Tours Logo"
            className="h-20 mb-4"
          />
        </div>
        <div className="w-full md:w-auto grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap gap-6 md:gap-16">
          <Section title="Destinations" defaultOpen>
            <li><a href="#" className="hover:underline">Nepal</a></li>
            <li><a href="#" className="hover:underline">Tibet</a></li>
            <li><a href="#" className="hover:underline">India</a></li>
            <li><a href="#" className="hover:underline">Bhutan</a></li>
          </Section>
          <Section title="Popular Trips" defaultOpen>
            <li><a href="#" className="hover:underline">Everest Base Camp Trek</a></li>
            <li><a href="#" className="hover:underline">Annapurna Trek</a></li>
            <li><a href="#" className="hover:underline">Kilimanjaro Climbing</a></li>
            <li><a href="#" className="hover:underline">Nepal and Bhutan Tour</a></li>
            <li><a href="#" className="hover:underline">Annapurna Base Camp Trek</a></li>
            <li><a href="#" className="hover:underline">Incredible India Tour</a></li>
          </Section>
          <Section title="Company" defaultOpen>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Our Team</a></li>
            <li><a href="#" className="hover:underline">Why Us</a></li>
            <li><a href="#" className="hover:underline">Awards and Achievements</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </Section>
        </div>
      </div>
      <div className="border-t border-gray-300 mt-8 py-4 bg-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-4 md:gap-0">
          <div className="flex items-center gap-3">
            <img
              src="Images/Magnificent logo.png"
              alt="Magnificent Travels & Tours Logo"
              className="h-10"
            />
            <div className="text-center md:text-left">
              <p className="text-gray-900">Crafting Unforgettable Adventures</p>
              <p className="text-gray-400 text-xs">All rights reserved ©</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-900">Follow Us :</span>
            <a href="#" aria-label="Facebook">
              <img src="/Images/Facebook-logo.png" alt="Facebook" className="h-6" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src="/Images/instagram-logo.png" alt="Instagram" className="h-6" />
            </a>
            <a href="#" aria-label="X">
              <img src="/Images/x-logo.png" alt="X" className="h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

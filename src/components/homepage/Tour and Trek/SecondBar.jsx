import { useState, useEffect } from "react";
import React from "react";
import {
  FaList,
  FaCheckCircle,
  FaSuitcase,
  FaMapMarkerAlt,
  FaImages,
  FaBook,
  FaQuestionCircle,
} from "react-icons/fa";

const tabs = [
  { name: "Overview", icon: FaBook },
  { name: "Itinerary", icon: FaList },
  { name: "Includes", icon: FaCheckCircle },
  { name: "Requirements", icon: FaSuitcase },
  { name: "TripMap", icon: FaMapMarkerAlt },
  { name: "Gallery", icon: FaImages },
  { name: "FAQs", icon: FaQuestionCircle },
];

export default function SecondBar({ id }) {
  const [activeTab, setActiveTab] = useState("Overview");

  // Function to handle scrolling to the section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Set the active tab
      setActiveTab(sectionId);
      
      // Scroll to the section with smooth behavior
      section.scrollIntoView({ behavior: "smooth" });
      
      // Update URL with hash for better navigation
      window.history.pushState(null, null, `#${sectionId}`);
    }
  };

  // Check for hash in URL on initial load
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      // If URL has a hash, activate that tab and scroll to it
      setActiveTab(hash);
      setTimeout(() => {
        const section = document.getElementById(hash);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="flex flex-wrap bg-gray-100 p-2 shadow-md justify-evenly sticky top-0 z-10">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          className={`flex items-center px-4 py-2 text-xl font-medium rounded-md transition-colors duration-200 ${
            activeTab === tab.name
              ? "bg-green-600 text-white"
              : "text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => scrollToSection(tab.name)}
        >
          <tab.icon className="mr-2" />
          {tab.name}
        </button>
      ))}
    </div>
  );
}
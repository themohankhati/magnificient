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
  { name: "Excludes", icon: FaSuitcase },
  { name: "TripMap", icon: FaMapMarkerAlt },
  { name: "Gallery", icon: FaImages },
  { name: "FAQs", icon: FaQuestionCircle },
];

// Map tab names to section IDs
const sectionIdMap = {
  Overview: "Overview",
  Itinerary: "Itinerary",
  Includes: "Includes",
  Excludes: "Excludes",
  TripMap: "TripMap",
  Gallery: "PhotoGallery",
  FAQs: "FAQs",
};

export default function SecondBar({ id }) {
  const [activeTab, setActiveTab] = useState("Overview");

  // Function to handle scrolling to the section
  const scrollToSection = (tabName) => {
    const sectionId = sectionIdMap[tabName] || tabName;
    const section = document.getElementById(sectionId);
    if (section) {
      setActiveTab(tabName);
      section.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, null, `#${sectionId}`);
    }
  };

  // Check for hash in URL on initial load
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
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
    <div className="flex flex-wrap bg-gray-100 p-2 sm:p-3 shadow-md justify-center sm:justify-evenly gap-1 sm:gap-2 sticky top-0 z-10">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          className={`flex items-center px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base lg:text-lg font-medium rounded-md transition-colors duration-200 whitespace-nowrap ${
            activeTab === tab.name
              ? "bg-green-600 text-white"
              : "text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => scrollToSection(tab.name)}
        >
          <tab.icon className="mr-1 sm:mr-2 text-xs sm:text-sm md:text-base" />
          <span>{tab.name}</span>
        </button>
      ))}
    </div>
  );
}
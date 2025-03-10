import { useState  } from "react";
import React from "react";
import { FaList, FaCheckCircle, FaSuitcase, FaMapMarkerAlt, FaImages, FaBook } from "react-icons/fa";

const tabs = [
  { name: "Overview", icon: FaBook, active: true },
  { name: "Itinerary", icon: FaList },
  { name: "Includes", icon: FaCheckCircle },
  { name: "Requirements", icon: FaSuitcase },
  { name: "Trip map", icon: FaMapMarkerAlt },
  { name: "Gallery", icon: FaImages },
  { name: "FAQs", icon: FaBook }
];

export default function SecondBar() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="flex flex-wrap bg-gray-100 p-5 border-b justify-evenly">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          className={`flex items-center px-4 py-2 text-2xl font-medium rounded-md transition-colors duration-200 ${
            activeTab === tab.name
              ? "bg-green-600 text-white"
              : "text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => setActiveTab(tab.name)}
        >
          <tab.icon className="mr-2" />
          {tab.name}
        </button>
      ))}
    </div>
  );
}

import React from "react";
import { FaGlobeAsia } from "react-icons/fa";
import { FiClock, FiCalendar, FiBarChart2 } from "react-icons/fi";
import { Link } from "react-router-dom";

const Card = ({ image, country, title, duration, months, difficulty, description }) => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
      
      {/* Image Section with Title Overlay */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-55 object-cover" />
        
        {/* Country and Icon Section */}
        <div className="absolute bottom-12 left-4 text-white text-sm flex items-center gap-1">
          <FaGlobeAsia /> <span>{country}</span>
        </div>
        
        <div className="absolute bottom-4 left-4 text-white text-xl font-bold">
          {title}
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-4">
        <div className="text-gray-700 text-sm flex flex-col gap-1 mb-3">
          <div className="flex items-center gap-2 mb-2">
            <FiClock /> <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <FiCalendar /> <span>{months}</span>
          </div>
          <div className="flex items-center gap-2">
            <FiBarChart2 /> <span>{difficulty}</span>
          </div>
        </div>
        
        {/* Description */}
        <div className="bg-gray-100 text-gray-800 text-left text-sm p-3 rounded-md shadow-md pb-5 mb-5">
          {description}
        </div>
        
        {/* Button */}
        <div className="flex justify-center mt-4">
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold cursor-pointer">
            <Link to="/annapurnabasecamp"> View Details</Link>
          
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
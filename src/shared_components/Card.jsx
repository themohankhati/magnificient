import React from "react";
import { FaGlobeAsia } from "react-icons/fa";
import { FiClock, FiCalendar, FiBarChart2 } from "react-icons/fi";
import { Link } from "react-router-dom";

const Card = ({ image, country, title, duration, months, difficulty, description, id }) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
      
      {/* Image Section with Title Overlay */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
        
        {/* Country and Icon Section */}
        <div className="absolute bottom-16 left-4 text-white text-xs flex items-center gap-1 z-10">
          <FaGlobeAsia size={14} /> <span>{country}</span>
        </div>
        
        <div className="absolute bottom-3 left-4 text-white text-lg font-bold z-20">
          {title}
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-4">
        <div className="text-gray-700 text-xs flex flex-col gap-1 mb-3">
          <div className="flex items-center gap-2 mb-2">
            <FiClock size={14} /> <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <FiCalendar size={14} /> <span>{months}</span>
          </div>
          <div className="flex items-center gap-2">
            <FiBarChart2 size={14} /> <span>{difficulty}</span>
          </div>
        </div>
        
        {/* Description */}
        <div className="bg-gray-100 text-gray-800 text-left text-xs p-3 rounded-md shadow-md pb-5 mb-5">
          <span className="line-clamp-3 block overflow-hidden text-ellipsis">{description}</span>
        </div>
        
        {/* Button */}
        <div className="flex justify-center mt-4">
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold text-xs cursor-pointer">
            <Link to={id ? `/package/${id}` : "#"}>View Details</Link>
          
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
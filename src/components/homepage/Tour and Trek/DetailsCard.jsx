import React from "react";
import {
  FaGlobeAmericas,
  FaCalendarAlt,
  FaMountain,
  FaRunning,
  FaBed,
  FaUtensils,
  FaSun,
  FaMapMarkerAlt,
  FaQuestionCircle,
}from "react-icons/fa";
import { WiEarthquake } from "react-icons/wi";
const DetailsCard = (detailsItems) => {

  const tourDetailsItem = detailsItems.detailsItems[0];
  return (
    <div className="bg-gray-200 rounded-md shadow-md p-4 sm:p-6 w-full mt-6 sm:mt-8 md:mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {/* Country */}
        <div className="flex flex-col items-start p-2 sm:p-3 bg-white rounded-md">
          <FaGlobeAmericas className="mb-1 text-gray-700" size={18} />
          <span className="text-xs sm:text-sm text-gray-600">Country</span>
          <span className="text-sm sm:text-base md:text-lg font-medium">
            {tourDetailsItem?.country}
          </span>
        </div>

        {/* Duration */}
        <div className="flex flex-col items-start p-2 sm:p-3 bg-white rounded-md">
          <FaCalendarAlt className="mb-1 text-gray-700" size={18} />
          <span className="text-xs sm:text-sm text-gray-600">Duration</span>
          <span className="text-sm sm:text-base md:text-lg font-medium">{tourDetailsItem?.duration}</span>
        </div>

        {/* Difficulty */}
        <div className="flex flex-col items-start p-2 sm:p-3 bg-white rounded-md">
          <WiEarthquake className="mb-1" size={18} />
          <span className="text-xs sm:text-sm text-gray-600">Difficulty</span>
          <span className="text-sm sm:text-base md:text-lg font-medium">
            {tourDetailsItem?.difficulty}{" "}
            <FaQuestionCircle
              className="inline-block ml-1 text-gray-500"
              size={12}
            />
          </span>
        </div>

        {/* Activity */}
        <div className="flex flex-col items-start p-2 sm:p-3 bg-white rounded-md">
          <FaRunning className="mb-1 text-gray-700" size={18} />
          <span className="text-xs sm:text-sm text-gray-600">Activity</span>
          <span className="text-sm sm:text-base md:text-lg font-medium">{tourDetailsItem?.activity}</span>
        </div>

        {/* Max Altitude */}
        <div className="flex flex-col items-start p-2 sm:p-3 bg-white rounded-md">
          <FaMountain className="mb-1 text-gray-700" size={18} />
          <span className="text-xs sm:text-sm text-gray-600">Max. altitude</span>
          <span className="text-sm sm:text-base md:text-lg font-medium">{tourDetailsItem?.maxAltitude}</span>
        </div>

        {/* Best Season */}
        <div className="flex flex-col items-start p-2 sm:p-3 bg-white rounded-md">
          <FaSun className="mb-1 text-gray-700" size={18} />
          <span className="text-xs sm:text-sm text-gray-600">Best season</span>
          <span className="text-sm sm:text-base md:text-lg font-medium">{tourDetailsItem?.bestSeason}</span>
        </div>

        {/* Accommodation */}
        <div className="flex flex-col items-start p-2 sm:p-3 bg-white rounded-md">
          <FaBed className="mb-1 text-gray-700" size={18} />
          <span className="text-xs sm:text-sm text-gray-600">Accomodation</span>
          <span className="text-sm sm:text-base md:text-lg font-medium">
            {tourDetailsItem?.accommodation}{" "}
            <FaQuestionCircle
              className="inline-block ml-1 text-gray-500"
              size={12}
            />
          </span>
        </div>

        {/* Meals */}
        <div className="flex flex-col items-start p-2 sm:p-3 bg-white rounded-md">
          <FaUtensils className="mb-1 text-gray-700" size={18} />
          <span className="text-xs sm:text-sm text-gray-600">Meals</span>
          <span className="text-sm sm:text-base md:text-lg font-medium">
            {tourDetailsItem?.meals}{" "}
            <FaQuestionCircle
              className="inline-block ml-1 text-gray-500"
              size={12}
            />
          </span>
        </div>

        {/* Start/End Point */}
        <div className="flex flex-col items-start p-2 sm:p-3 bg-white rounded-md sm:col-span-2 lg:col-span-1">
          <FaMapMarkerAlt className="mb-1 text-gray-700" size={18} />
          <span className="text-xs sm:text-sm text-gray-600">Start/End Point</span>
          <span className="text-sm sm:text-base md:text-lg font-medium">{tourDetailsItem?.startEndPoint}</span>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;

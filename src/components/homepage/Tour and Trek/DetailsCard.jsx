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
} from "react-icons/fa";
import { WiEarthquake } from "react-icons/wi";
const DetailsCard = ({detailsItems}) => {
  return (
    <div className="bg-gray-200 rounded-md shadow-md p-6 w-full">
      <div className="grid grid-cols-3 gap-4">
        {/* Country */}
        <div className="flex flex-col items-start">
          <FaGlobeAmericas className="mb-1 text-gray-700" size={20} />
          <span className="text-sm text-gray-600">Country</span>
          <span className="text-lg font-medium">{detailsItems?.country}</span>
        </div>

        {/* Duration */}
        <div className="flex flex-col items-start">
          <FaCalendarAlt className="mb-1 text-gray-700" size={20} />
          <span className="text-sm text-gray-600">Duration</span>
          <span className="text-lg font-medium">{detailsItems?.duration}</span>
        </div>

        {/* Difficulty */}
        <div className="flex flex-col items-start">
          <WiEarthquake className="mb-1" />
          <span className="text-sm text-gray-600">Difficulty</span>
          <span className="text-lg font-medium">
            {detailsItems?.difficulty}{" "}
            <FaQuestionCircle
              className="inline-block ml-1 text-gray-500"
              size={14}
            />
          </span>
        </div>

        {/* Activity */}
        <div className="flex flex-col items-start">
          <FaRunning className="mb-1 text-gray-700" size={20} />
          <span className="text-sm text-gray-600">Activity</span>
          <span className="text-lg font-medium">{detailsItems?.activity}</span>
        </div>

        {/* Max Altitude */}
        <div className="flex flex-col items-start">
          <FaMountain className="mb-1 text-gray-700" size={20} />
          <span className="text-sm text-gray-600">Max. altitude</span>
          <span className="text-lg font-medium">{detailsItems?.maxAltitude}</span>
        </div>

        {/* Best Season */}
        <div className="flex flex-col items-start">
          <FaSun className="mb-1 text-gray-700" size={20} />
          <span className="text-sm text-gray-600">Best season</span>
          <span className="text-lg font-medium">{detailsItems?.bestSeason}</span>
        </div>

        {/* Accommodation */}
        <div className="flex flex-col items-start">
          <FaBed className="mb-1 text-gray-700" size={20} />
          <span className="text-sm text-gray-600">Accomodation</span>
          <span className="text-lg font-medium">
            {detailsItems?.acommodation}{" "}
            <FaQuestionCircle
              className="inline-block ml-1 text-gray-500"
              size={14}
            />
          </span>
        </div>

        {/* Meals */}
        <div className="flex flex-col items-start">
          <FaUtensils className="mb-1 text-gray-700" size={20} />
          <span className="text-sm text-gray-600">Meals</span>
          <span className="text-lg font-medium">
            {detailsItems?.meals}{" "}
            <FaQuestionCircle
              className="inline-block ml-1 text-gray-500"
              size={14}
            />
          </span>
        </div>

        {/* Start/End Point */}
        <div className="flex flex-col items-start">
          <FaMapMarkerAlt className="mb-1 text-gray-700" size={20} />
          <span className="text-sm text-gray-600">Start/End Point</span>
          <span className="text-lg font-medium">{detailsItems?.startEndPoint}</span>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;

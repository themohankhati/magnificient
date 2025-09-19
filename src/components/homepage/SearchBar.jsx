import React from "react";

export default function SearchBar() {
  return (
    <div className="w-full flex justify-center my-6 px-4">
      <div className="flex items-stretch bg-white shadow-xl rounded-2xl overflow-hidden w-full md:w-4/5 lg:w-2/3">
        
        {/* Where To */}
        <div className="flex-1 p-4 border-r">
          <label className="text-sm text-gray-500 mb-1 block">Where to</label>
          <input
            type="text"
            placeholder="Enter destination"
            className="w-full text-base font-medium text-blue-900 outline-none bg-transparent placeholder-gray-400"
          />
        </div>

        {/* When */}
        <div className="flex-1 p-4 border-r">
          <label className="text-sm text-gray-500 mb-1 block">When</label>
          <input
            type="text"
            placeholder="Enter date or duration"
            className="w-full text-base font-medium text-blue-900 outline-none bg-transparent placeholder-gray-400"
          />
        </div>

        {/* Type */}
        <div className="flex-1 p-4 border-r">
          <label className="text-sm text-gray-500 mb-1 block">Type</label>
          <input
            type="text"
            placeholder="Enter trip type"
            className="w-full text-base font-medium text-blue-900 outline-none bg-transparent placeholder-gray-400"
          />
        </div>

        {/* Button */}
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 sm:px-8">
          FIND NOW
        </button>
      </div>
    </div>
  );
}

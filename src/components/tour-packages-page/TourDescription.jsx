import React from "react";

const TourDescription = ({ title, description }) => (
    <div className="max-w-7xl mx-auto text-left mt-4 px-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-2 mt-4">{title}</h1>
      <div className="w-[80px] h-1 bg-green-500 mb-4"></div>
      <div className="p-8 rounded-lg text-left shadow-md bg-white">
        <p className="text-gray-900 leading-relaxed text-lg">{description}</p>
      </div>
    </div>
  );
  
  export default TourDescription;
  
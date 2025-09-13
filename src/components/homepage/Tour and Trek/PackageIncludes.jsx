import React from "react";
import { TfiAngleDoubleRight } from "react-icons/tfi";
function PackageIncludes({includes}) {
  return (
    <div className="flex flex-col mt-8 sm:mt-12 md:mt-15 w-full px-2 sm:px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#14205c] mb-6 sm:mb-8 tracking-wide text-start">
        Inclusions
        <div className="flex justify-center w-full mt-2">
            <span className="h-1 bg-green-500 transition-all duration-300 w-0 group-hover:w-2/4"></span>
          </div>
      </h1>
    <div className="bg-white p-4 sm:p-6 shadow-2xl rounded-md">
      
      <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Package Includes</h2>
      <ul className="space-y-2">
        {includes.map((item, index) => (
          <li key={index} className="flex items-start mb-2 p-1">
            <TfiAngleDoubleRight className="m-1 text-green-600 flex-shrink-0 mt-0.5" size={16} />
            <span className="text-sm sm:text-base leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default PackageIncludes;

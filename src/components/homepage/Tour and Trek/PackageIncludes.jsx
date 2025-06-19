import React from "react";
import { TfiAngleDoubleRight } from "react-icons/tfi";
function PackageIncludes({includes}) {
  return (
    <div className="flex flex-col mt-15 w-full px-4">
      <h1 className="text-4xl font-bold text-[#14205c] mb-8 tracking-wide text-start">
        Inclusions
        <div className="flex justify-center w-full mt-2">
            <span className="h-1 bg-green-500 transition-all duration-300 w-0 group-hover:w-2/4"></span>
          </div>
      </h1>
    <div className="bg-white-400  p-4 shadow-2xl rounded-md">
      
      <h2 className="text-lg font-semibold mb-2">Package Includes</h2>
      <ul>
        {includes.map((item, index) => (
          <li key={index} className="flex items-center mb-1 p-1">
            <TfiAngleDoubleRight className="m-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default PackageIncludes;

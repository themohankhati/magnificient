import React from "react";
import { TbXboxXFilled } from "react-icons/tb";
function PackageExcludes({excludes}) {


  return (
    <div className="bg-yellow-100 p-4 shadow-2xl rounded-md mt-10">
      <h2 className="text-lg font-semibold mb-2">Package Excludes</h2>
      <ul>
        {excludes.map((item, index) => (
          <li key={index} className="flex items-center mb-1 p-2">
            <TbXboxXFilled className="m-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PackageExcludes;

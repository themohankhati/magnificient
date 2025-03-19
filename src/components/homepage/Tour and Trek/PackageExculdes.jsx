import React from "react";
import { TbXboxXFilled } from "react-icons/tb";
function PackageExcludes() {
  const includes = [
    "Meals (lunch and dinner) in Kathmandu and Pokhara",
    "Meals (lunch and dinner) in Kathmandu and Pokhara",
    "Meals (lunch and dinner) in Kathmandu and Pokhara",
    "Meals (lunch and dinner) in Kathmandu and Pokhara",
    "Meals (lunch and dinner) in Kathmandu and Pokhara",
    "Meals (lunch and dinner) in Kathmandu and Pokhara",
    "Meals (lunch and dinner) in Kathmandu and Pokhara",
    "Meals (lunch and dinner) in Kathmandu and Pokhara",
  ];

  return (
    <div className="bg-yellow-100  p-4 shadow-2xl rounded-md">
      <h2 className="text-lg font-semibold mb-2">Package Excludes</h2>
      <ul>
        {includes.map((item, index) => (
          <li key={index} className="flex items-center mb-1 p-1">
            <TbXboxXFilled className="m-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PackageExcludes;

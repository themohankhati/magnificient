import React from "react";
import { TfiAngleDoubleRight } from "react-icons/tfi";
function PackageIncludes() {
  const includes = [
    "All (international and domestic) airport transfers on a tourist vehicle",
    "All (international and domestic) airport transfers on a tourist vehicle",
    "All (international and domestic) airport transfers on a tourist vehicle",
    "All (international and domestic) airport transfers on a tourist vehicle",
    "All (international and domestic) airport transfers on a tourist vehicle",
    "All (international and domestic) airport transfers on a tourist vehicle",
    "All (international and domestic) airport transfers on a tourist vehicle",
    "All (international and domestic) airport transfers on a tourist vehicle",
    "All (international and domestic) airport transfers on a tourist vehicle",
    "All (international and domestic) airport transfers on a tourist vehicle",
  ];

  return (
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
  );
}

export default PackageIncludes;

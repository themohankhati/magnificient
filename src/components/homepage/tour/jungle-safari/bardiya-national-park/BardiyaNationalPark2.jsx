import React, { useState, useEffect } from "react";
import TourTrek from "../../../Tour and Trek/TourTrek";
import { getPackages } from "../../../../../services/packageService";

function BardiyaNationalPark2() {

  
  const [packages, setPackages] = useState([]);

  const getBardiyaPackages = async () => {
    try {
      const bardiyaData = await getPackages();

      setPackages(bardiyaData);

    } catch (error) {
      console.error("Error fetching package data:", error);
    }
  };

  useEffect(() => {
    getBardiyaPackages();
  }, []);

  const filteredPackages = packages.filter(
    (pkg) => pkg.package_name === "Bardia National Park 02 Night 03 Days Package"
  );


  return (
    <>
      {filteredPackages.map((pkg, index) => (
        <TourTrek
          key={index}
          title={pkg.title}
          description={pkg.description}
          faqs={pkg.itinerary}
          images={pkg.images}
          includes={pkg.package_includes}
          excludes={pkg.package_excludes}
          itinerary={pkg.itinerary}
            
          />
        ))}
    </>
  );
}

export default BardiyaNationalPark2;

import React, { useState, useEffect } from "react";
import TourTrek from "../Tour and Trek/TourTrek";
import { getPackages } from "../../../services/packageService";

function AnnapurnaBaseCamp() {

  
  const [packages, setPackages] = useState([]);

  const getAnnapurnaPackages = async () => {
    try {
      const annapurnaData = await getPackages();
      console.log(annapurnaData);
      setPackages(annapurnaData);

    } catch (error) {
      console.error("Error fetching package data:", error);
    }
  };

  useEffect(() => {
    getAnnapurnaPackages();
  }, []);

  return (
    <>
<<<<<<< HEAD
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
          detailsItems={pkg.tripDetails}
=======
      {packages.length > 0 &&
        packages.map((pkg, index) => (
          <TourTrek
            key={index}
            title={pkg.title}
            description={pkg.description}
            faqs={pkg.itinerary}
            images={pkg.images}
            includes={pkg.package_includes}
            excludes={pkg.package_excludes}
            itinerary={pkg.itinerary}
>>>>>>> parent of 1abcaef (Chitwan and bardiya tours added)
            
          />
        ))}
    </>
  );
}

export default AnnapurnaBaseCamp;

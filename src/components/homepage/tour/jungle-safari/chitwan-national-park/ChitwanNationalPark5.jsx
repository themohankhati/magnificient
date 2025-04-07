import React, { useState, useEffect } from "react";
import TourTrek from "../../../Tour and Trek/TourTrek";
import { getPackages } from "../../../../../services/packageService";

function ChitwanNationalPark5() {

  
  const [packages, setPackages] = useState([]);

  const getChitwanPackages = async () => {
    try {
      const chitwanData = await getPackages();

      setPackages(chitwanData);

    } catch (error) {
      console.error("Error fetching package data:", error);
    }
  };

  useEffect(() => {
    getChitwanPackages();
  }, []);

  const filteredPackages = packages.filter(
    (pkg) => pkg.package_name === "05 Nights 06 Days Jungle Safari and Cultural Tour Nepal"
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

export default ChitwanNationalPark5;

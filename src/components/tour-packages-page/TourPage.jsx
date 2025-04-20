import React from "react";
import Header from "../../shared_components/Header";
import Newsletter from "../../shared_components/Newsletter";
import Associations from "../../shared_components/Associations";
import Footer from "../../shared_components/Footer";

import ImageGallery from "./ImageGallery";
import TourDescription from "./TourDescription";
import TourPackages from "./TourPackages";


const TourPage = ({ tour, packages }) => {

  if (!tour || !packages) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="bg-white">
      <Header />
      <div className="w-full mx-auto mt-5">
        <ImageGallery images={tour.images} />
        <TourDescription title={tour.title} description={tour.description} />
        <TourPackages packages={packages} />
      </div>
      <Associations />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default TourPage;

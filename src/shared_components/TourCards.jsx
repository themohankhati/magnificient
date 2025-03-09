import React from "react";
import Header from "./Header";
import Newsletter from "./Newsletter";
import Associations from "./Associations";
import Footer from "./Footer";
import Card from "./Card";

const TourCards = ({ tour, packages }) => {
  return (
    <div className="bg-white">
      <Header />
      <div className="w-full mx-auto mt-5">
        <div className="grid grid-cols-7 gap-4 px-4 mb-15">
          <div className="col-span-2 flex flex-col gap-4">
            <img src={tour.images[0]} alt="Tour Image 1" className="w-full h-[250px] object-cover rounded-lg shadow-md" />
            <img src={tour.images[1]} alt="Tour Image 2" className="w-full h-[250px] object-cover rounded-lg shadow-md" />
          </div>
          <div className="col-span-3">
            <img src={tour.images[2]} alt="Main Tour" className="w-full h-[517px] object-cover rounded-lg shadow-md" />
          </div>
          <div className="col-span-2 flex flex-col gap-4">
            <img src={tour.images[3]} alt="Tour Image 3" className="w-full h-[250px] object-cover rounded-lg shadow-md" />
            <img src={tour.images[4]} alt="Tour Image 4" className="w-full h-[250px] object-cover rounded-lg shadow-md" />
          </div>
        </div>


        <div className="max-w-7xl mx-auto text-left mt-4 px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 mt-4">{tour.title}</h1>
          <div className="w-15 h-1 bg-green-500 mx-auto mb-4 mr-255"></div>
          <div className="p-8 rounded-lg text-left shadow-md max-w-8xl mx-auto">
            <p className="text-gray-900 leading-relaxed text-lg">{tour.description}</p>
          </div>
        </div>


        <div className="max-w-7xl mx-auto mt-15 px-6 mb-25">
          <h2 className="text-4xl font-bold text-gray-900 text-left mb-2">Our Packages</h2>
          <div className="w-15 h-1 bg-green-500 ml-20 mb-10"></div>

          <div className="grid grid-cols-3 gap-10">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                image={pkg.image}
                title={pkg.title}
                duration={pkg.duration}
                months={pkg.months}
                difficulty={pkg.difficulty}
                description={pkg.description}
                country={pkg.country || "Nepal"}
              />
            ))}
          </div>
        </div>
      </div>
      <Associations />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default TourCards;

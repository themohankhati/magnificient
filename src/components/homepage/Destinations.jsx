import React from "react";
import Associations from "../../shared_components/Associations";
import Newsletter from "../../shared_components/Newsletter";
import Footer from "../../shared_components/Footer";


const Destinations = () => {
  const destinations = [
    { name: "NEPAL", img: "Top destination-Nepal.jpg" },
    { name: "INDIA", img: "Top destination-India.jpg" },
    { name: "TIBET", img: "Top destination-tibet.jpg" },
    { name: "BHUTAN", img: "Top destination-Bhutan.jpg" },
  ];

  return (
<>

    <section className="text-center py-16">
      <h2 className="text-3xl font-bold mb-10 relative inline-block">
        Top Destinations
        <span className="block w-12 h-1 bg-green-600 mt-2 mx-auto"></span>
      </h2>
      <div className="flex flex-wrap justify-center gap-22">
        {destinations.map((destination, index) => (
          <div
          key={index}
          className="text-center rounded-xl overflow-hidden shadow-lg max-w-[220px] transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <img
              src={destination.img}
              alt={destination.name}
              className="w-full h-[150px] object-cover"
              />
            <h3 className="bg-white text-lg font-semibold py-2 text-gray-800">
              {destination.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
        </>
  );
};

export default Destinations;

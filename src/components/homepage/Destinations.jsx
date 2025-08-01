import React from "react";
import { useNavigate } from "react-router-dom";

const Destinations = () => {
  const navigate = useNavigate();
  const destinations = [
    { name: "NEPAL", img: "Images/Top destination-Nepal.jpg", id: "nepal" },
    { name: "INDIA", img: "Images/Top destination-India.jpg", id: "india" },
    { name: "TIBET", img: "Images/Top destination-tibet.jpg", id: "tibet" },
    { name: "BHUTAN", img: "Images/Top destination-Bhutan.jpg", id: "bhutan" },
  ];

  return (
    <section className="text-center py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-10 relative inline-block">
          Top Destinations
          <span className="block w-12 h-1 bg-green-600 mt-2 mx-auto"></span>
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="w-full max-w-[220px] text-center rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
              onClick={() => {
                if (destination.id) {
                  navigate(`/tour/${destination.id}`);
                }
              }}
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
      </div>
    </section>
  );
};

export default Destinations;

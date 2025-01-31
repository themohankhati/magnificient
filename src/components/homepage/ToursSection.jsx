import React from "react";

const tours = [
  { img: "Homepage-pictures/luxury-tour.jpeg", title: "Luxury Tour", count: "9 tours" },
  { img: "Homepage-pictures/helicopter-tour.jpg", title: "Helicopter Tours", count: "10 tours" },
  { img: "Homepage-pictures/nature-wildlife.jpg", title: "Nature and Wildlife Tours", count: "10 tours" },
  { img: "Homepage-pictures/cultural-historical.jpg", title: "Cultural & Historical Tours", count: "5 tours" },
  { img: "Homepage-pictures/religious-spiritual.jpg", title: "Religious and Spiritual Tours", count: "7 tours" },
  { img: "Homepage-pictures/motorbike-tour.jpg", title: "MotorBike Tour", count: "11 tours" },
  { img: "Homepage-pictures/cycling-tour.jpg", title: "Cycling Tour", count: "8 tours" },
  { img: "Homepage-pictures/sightseeing-tour.jpg", title: "Sightseeing Tour", count: "6 tours" },
  { img: "Homepage-pictures/day-sightseeing-tour.jpg", title: "Day Sightseeing Tour", count: "4 tours" },
];

const ToursSection = () => {
  return (
    <section className="text-center py-8 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10">
          <span className="text-blue-900 underline decoration-green-600">Tours</span> We Offer
        </h2>
        <div className="flex overflow-x-auto space-x-5 p-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          {tours.map((tour, index) => (
            <div
              key={index}
              className="flex-none w-52 bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 border border-gray-200"
            >
              <img src={tour.img} alt={tour.title} className="w-full h-58 object-cover" />
              <h3 className="text-lg font-semibold my-2">{tour.title}</h3>
              <p className="text-gray-600 mb-1">{tour.count}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 mb-10">
          <a
            href="#explore-all-tours"
            className="bg-green-600 text-white text-lg py-2 px-6 rounded-md transition hover:bg-green-800"
          >
            Explore All Tours
          </a>
        </div>
      </div>
    </section>
  );
};

export default ToursSection;

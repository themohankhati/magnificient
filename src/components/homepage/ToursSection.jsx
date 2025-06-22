import React from "react";
import { useNavigate } from "react-router-dom";
import { magnificentToursData } from "../tour-overview-page/components/data/magnificentTourData";

const ToursSection = () => {
  const navigate = useNavigate();
  return (
    <section className="text-center py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10">
          <span className="text-blue-900 underline decoration-green-600">
            Tours
          </span>{" "}
          We Offer
        </h2>
        <div className="flex overflow-x-auto space-x-5 p-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
                    style={{ scrollbarWidth: "none" }}>
          {magnificentToursData.map((tour, index) => (
            <div
              key={tour.id}
              className="flex-none w-52 bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 border border-gray-200 cursor-pointer"
              onClick={() => navigate(`/tours/${tour.id}`)}
            >
              <img
                src={`Images/${tour.img}`}
                alt={tour.title}
                className="w-full h-58 object-cover"
              />
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

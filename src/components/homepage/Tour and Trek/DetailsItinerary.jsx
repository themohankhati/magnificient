import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function DetailsItinerary({ itinerary }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="Itinerary" className="mt-8 sm:mt-12 md:mt-15 py-8 sm:py-10 md:py-12 px-2 sm:px-4 bg-[#f9fdfb]">
      <div className="max-w-5xl mx-auto">
        <h2 className="relative text-2xl sm:text-3xl md:text-4xl font-bold text-[#14205c] mb-6 sm:mb-8 md:mb-10 tracking-wide group inline-block">
          Detailed Itinerary
          <div className="flex justify-center w-full mt-2">
            <span className="h-1 bg-green-500 transition-all duration-300 w-0 group-hover:w-2/4"></span>
          </div>
        </h2>

        <div className="flex flex-col gap-4 sm:gap-6 cursor-pointer">
          {itinerary.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200"
            >
              <button
                className="w-full flex justify-between items-center bg-green-50 p-4 sm:p-5 md:p-6 hover:bg-green-100 transition duration-300 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-sm sm:text-base md:text-lg font-semibold text-left text-gray-900 pr-2">
                  {`Day ${item.day_number}: ${item.title}`}
                </span>
                <span className="text-lg sm:text-xl text-green-700 flex-shrink-0">
                  {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-gray-700 text-sm sm:text-base leading-relaxed border-t border-gray-200 transition-all duration-300 ease-in-out">
                  {item.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
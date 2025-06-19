import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function DetailsItinerary({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="Itinerary" className="mt-15 py-12 px-4 bg-[#f9fdfb]">
      <div className="max-w-5xl">
        <h2 className="relative text-4xl font-bold text-[#14205c] mb-10 tracking-wide group inline-block">
          Detailed Itinerary
          <div className="flex justify-center w-full mt-2">
            <span className="h-1 bg-green-500 transition-all duration-300 w-0 group-hover:w-2/4"></span>
          </div>
        </h2>

        <div className="flex flex-col gap-6 cursor-pointer">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200"
            >
              <button
                className="w-full flex justify-between items-center bg-green-50 p-6 hover:bg-green-100 transition duration-300 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-left text-gray-900">
                  {`Day ${faq.day_number}: ${faq.title}`}
                </span>
                <span className="text-xl text-green-700">
                  {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 text-gray-700 text-base leading-relaxed border-t border-gray-200 transition-all duration-300 ease-in-out">
                  {faq.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
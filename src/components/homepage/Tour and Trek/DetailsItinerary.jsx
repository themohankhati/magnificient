import React from "react";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function DetailsItinerary({faqs}) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-10 py-12">
      <div className="max-w-5xl ">
        <h2 className="text-3xl font-bold ">Detailed Itinerary</h2>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center bg-green-50 cursor-pointer p-8"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-left text-base font-bold">
                  {`Day:${faq.day_number} : ${faq.title}`}
                </span>
                <span className="text-sm">
                  {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-4 text-gray-600 text-left text-sm">
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

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
// import { ArrowRight, ArrowLeft } from "lucide-react";
import Card from "../../shared_components/Card";

const trekData = [
  {
    image: "ANNAPURNATREK.jpeg",
    country: "Nepal",
    title: "Annapurna Royal Treks - 10 Days",
    duration: "10 Days",
    months: "March - May",
    difficulty: "Moderate",
    description: "Explore the stunning Annapurna on a royal trekking. Get an wonderful experience.",
    price: "USD 1300",
  },
  {
    image: "LANGTANG.jpeg",
    country: "Nepal",
    title: "Everest Base Camp - 12 Days",
    duration: "12 Days",
    months: "April - June",
    difficulty: "Challenging",
    description: "Trek to the base of the world's highest peak, Everest. The trip you will never forget.",
    price: "USD 1500",
  },
  {
    image: "ANNAPURNATREK2.jpeg",
    country: "Nepal",
    title: "Annapurna Royal Treks - 10 Days",
    duration: "10 Days",
    months: "March - May",
    difficulty: "Moderate",
    description: "A royal trekking experience with breathtaking views. The trip you will never forget",
    price: "USD 1300",
  },
  {
    image: "ANNAPURNATREK3.jpeg",
    country: "Nepal",
    title: "Annapurna Royal Treks - 10 Days",
    duration: "10 Days",
    months: "March - May",
    difficulty: "Moderate",
    description: "Experience the Himalayan beauty up close. Get a lifetime of Experience!",
    price: "USD 1300",
  },
  {
    image: "EVEREST.jpg",
    country: "Nepal",
    title: "Everest Base Camp - 14 Days",
    duration: "14 Days",
    months: "September - November",
    difficulty: "Hard",
    description: "One of the most iconic trekking routes in the world. Get ready for Unforgettable adventures",
    price: "USD 1800",
  },
  {
    image: "MUSTANG.jpg",
    country: "Nepal",
    title: "Upper Mustang Trek - 12 Days",
    duration: "12 Days",
    months: "May - August",
    difficulty: "Moderate",
    description: "Explore the ancient kingdom of Mustang in a remote trekking adventure.",
    price: "USD 1600",
  },
  
];

const CARDS_PER_PAGE = 3;
const pages = Math.ceil(trekData.length / CARDS_PER_PAGE);

export default function BestSelection() {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % pages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + pages) % pages);
  };

  const paginatedData = trekData.slice(
    currentPage * CARDS_PER_PAGE,
    currentPage * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

  return (
    <section className="text-center bg-[#f0fcf9] py-16">
      <div className="max-w-6xl mx-auto px-8 ">
        <h2 className="text-3xl font-bold">
          Best Selection From{" "}
          <span className="text-[#14205c] underline">Travellers</span>
        </h2>
        <p className="text-sm mt-3 mb-10">
          Discover top adventures chosen by our guests.
        </p>

        <div className="relative">
          {/* Cards */}
          <motion.div className="flex gap-7 justify-center transition-all duration-500">
            {paginatedData.map((trek, index) => (
              <div key={index} className="min-w-[300px] max-w-[350px]">
                <Card
                  image={`Images/${trek.image}`}
                  country={trek.country}
                  title={trek.title}
                  duration={trek.duration}
                  months={trek.months}
                  difficulty={trek.difficulty}
                  description={trek.description}
                />
              </div>
            ))}
          </motion.div>

          {/* Navigation Arrows */}
          {/* <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md"
          >
            <ArrowRight size={20} />
          </button> */}
        </div>

        {/* Pagination Buttons */}
        <div className="mt-8 flex justify-center gap-2 ">
          {Array.from({ length: pages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => handlePageChange(idx)}
              className={`w-8 h-8 rounded-full text-sm font-medium cursor-pointer ${
                currentPage === idx
                  ? "bg-green-600 text-white"
                  : "bg-white border border-gray-300 text-black"
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

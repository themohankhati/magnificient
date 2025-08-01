import React, { useState } from "react";
import { motion } from "framer-motion";
import Card from "../../shared_components/Card";

const trekData = [
  {
    image: "jungle.jpg",
    country: "Nepal",
    title: "Chitwan Jungle Safari - 5 Days",
    duration: "5 Days",
    months: "March - May",
    difficulty: "Easy",
    description:
      "Enjoy the exploration of incredible flora, spectacular wildlife and natural beauty.",
    price: "USD 600",
  },
  {
    image: "LANGTANG.jpeg",
    country: "Nepal",
    title: "Everest Base Camp - 12 Days",
    duration: "12 Days",
    months: "April - June",
    difficulty: "Challenging",
    description:
      "Trek to the base of the world's highest peak, Everest. The trip you will never forget.",
    price: "USD 1500",
  },
  {
    image: "ANNAPURNATREK2.jpeg",
    country: "Nepal",
    title: "Annapurna Royal Treks - 10 Days",
    duration: "10 Days",
    months: "March - May",
    difficulty: "Moderate",
    description:
      "A royal trekking experience with breathtaking views. The trip you will never forget",
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
    description:
      "One of the most iconic trekking routes in the world. Get ready for Unforgettable adventures",
    price: "USD 1800",
  },
  {
    image: "MUSTANG.jpg",
    country: "Nepal",
    title: "Upper Mustang Trek - 12 Days",
    duration: "12 Days",
    months: "May - August",
    difficulty: "Moderate",
    description:
      "Explore the ancient kingdom of Mustang in a remote trekking adventure.",
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

  const paginatedData = trekData.slice(
    currentPage * CARDS_PER_PAGE,
    currentPage * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

  return (
    <section className="text-center bg-[#f0fcf9] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">
          Best Selection From{" "}
          <span className="text-[#14205c] underline">Travellers</span>
        </h2>
        <p className="text-sm mt-3 mb-10 text-gray-600">
          Discover top adventures chosen by our guests.
        </p>

        {/* Card Grid - responsive */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 place-items-center transition-all duration-500"
        >
          {paginatedData.map((trek, index) => (
            <Card
              key={index}
              image={`Images/${trek.image}`}
              country={trek.country}
              title={trek.title}
              duration={trek.duration}
              months={trek.months}
              difficulty={trek.difficulty}
              description={trek.description}
            />
          ))}
        </motion.div>

        {/* Pagination Buttons */}
        <div className="mt-10 flex justify-center gap-2">
          {Array.from({ length: pages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => handlePageChange(idx)}
              className={`w-8 h-8 rounded-full text-sm font-medium cursor-pointer transition duration-300 ${
                currentPage === idx
                  ? "bg-green-600 text-white"
                  : "bg-white border border-gray-300 text-black hover:bg-gray-100"
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

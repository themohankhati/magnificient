import React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const trekData = [
  { img: "Homepage-pictures/ANNAPURNATREK.jpeg", title: "Annapurna Royal Treks - 10 Days", price: "USD 1300" },
  { img: "Homepage-pictures/LANGTANG.jpeg", title: "Everest Base Camp - 12 Days", price: "USD 1500" },
  { img: "Homepage-pictures/ANNAPURNATREK2.jpeg", title: "Annapurna Royal Treks - 10 Days", price: "USD 1300" },
  { img: "Homepage-pictures/ANNAPURNATREK3.jpeg", title: "Annapurna Royal Treks - 10 Days", price: "USD 1300" },
  { img: "Homepage-pictures/EVEREST.jpg", title: "Annapurna Royal Treks - 10 Days", price: "USD 1300" },
  { img: "Homepage-pictures/MUSTANG.jpg", title: "Annapurna Royal Treks - 10 Days", price: "USD 1300" },
  { img: "Homepage-pictures/LANGTANG.jpeg", title: "Annapurna Royal Treks - 10 Days", price: "USD 1300" },
];

export default function BestSelection() {
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 300;
    }
  };

  return (
    <section className="text-center bg-[#f0fcf9] py-16">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl font-bold">
          Best Selection From <span className="text-[#14205c] underline">Travellers</span>
        </h2>
        <p className="text-sm mt-3 mb-10">Discover top adventures chosen by our guests.</p>
        
        <div className="relative overflow-hidden flex items-center">
          <motion.div
            ref={scrollRef}
            className="flex gap-7 overflow-x-scroll no-scrollbar scroll-smooth"
          >
            {trekData.map((trek, index) => (
              <div key={index} className="flex-none w-64 bg-white shadow-md rounded-lg overflow-hidden">
                <img src={trek.img} alt={trek.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <span className="text-gray-600 block">{trek.price}</span>
                  <h3 className="font-semibold text-lg">{trek.title}</h3>
                  <p className="text-gray-500 text-sm">Lorem Ipsum is simply dummy text of the printing and type.</p>
                </div>
              </div>
            ))}
          </motion.div>
          <button
            onClick={handleScroll}
            className="absolute right-0 bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}

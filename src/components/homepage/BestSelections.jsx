import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Card from "../../shared_components/Card";

const trekData = [
  {
    image: "ANNAPURNATREK.jpeg",
    country: "Nepal",
    title: "Annapurna Royal Treks - 10 Days",
    duration: "10 Days",
    months: "March - May",
    difficulty: "Moderate",
    description: "Explore the stunning Annapurna on a royal trekking.",
    price: "USD 1300",
  },
  {
    image: "LANGTANG.jpeg",
    country: "Nepal",
    title: "Everest Base Camp - 12 Days",
    duration: "12 Days",
    months: "April - June",
    difficulty: "Challenging",
    description: "Trek to the base of the world's highest peak, Everest.",
    price: "USD 1500",
  },
  {
    image: "ANNAPURNATREK2.jpeg",
    country: "Nepal",
    title: "Annapurna Royal Treks - 10 Days",
    duration: "10 Days",
    months: "March - May",
    difficulty: "Moderate",
    description: "A royal trekking experience with breathtaking views.",
    price: "USD 1300",
  },
  {
    image: "ANNAPURNATREK3.jpeg",
    country: "Nepal",
    title: "Annapurna Royal Treks - 10 Days",
    duration: "10 Days",
    months: "March - May",
    difficulty: "Moderate",
    description: "Experience the Himalayan beauty up close.",
    price: "USD 1300",
  },
  {
    image: "EVEREST.jpg",
    country: "Nepal",
    title: "Everest Base Camp - 14 Days",
    duration: "14 Days",
    months: "September - November",
    difficulty: "Hard",
    description: "One of the most iconic trekking routes in the world.",
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

export default function BestSelection() {
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="text-center bg-[#f0fcf9] py-16">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl font-bold">
          Best Selection From{" "}
          <span className="text-[#14205c] underline">Travellers</span>
        </h2>
        <p className="text-sm mt-3 mb-10">
          Discover top adventures chosen by our guests.
        </p>

        <div className="relative overflow-hidden">
          <motion.div
            ref={scrollRef}
            className="flex gap-7 overflow-x-hidden scroll-smooth"
            style={{ width: 'calc(100% - 60px)' }} // Adjusting width
          >
            {trekData.map((trek, index) => (
              <div key={index} className="min-w-[400px]"> {/* Adjusting card width */}
                <Card
                  image={trek.image}
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

          {/* Scroll Button */}
          <button
            onClick={handleScroll}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Destinations = () => {
  const navigate = useNavigate();
  const destinations = [
    { name: "NEPAL", img: "Images/Top destination-Nepal.jpg", id: "nepal" },
    { name: "INDIA", img: "Images/Top destination-India.jpg", id: "india" },
    { name: "TIBET", img: "Images/Top destination-tibet.jpg", id: "tibet" },
    { name: "BHUTAN", img: "Images/Top destination-Bhutan.jpg", id: "bhutan" },
  ];

  return (
    <section className="text-center py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.h2
          className="text-3xl font-bold mb-10 relative inline-block"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Top Destinations
          <span className="block w-12 h-1 bg-green-600 mt-2 mx-auto"></span>
        </motion.h2>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-10 place-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              className="relative w-full max-w-[500px] h-[280px] text-center rounded-2xl overflow-hidden shadow-lg bg-white cursor-pointer group"
              variants={cardVariants}
              whileHover="hover"
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate(`/tour/${destination.id}`)}
            >
              {/* Image with hover zoom */}
              <motion.img
                src={destination.img}
                alt={destination.name}
                className="w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />

              {/* Overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-black/40"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />

              {/* Explore Now Button */}
              <motion.button
                className="absolute top-3 right-3 bg-green-600 text-white text-sm px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/tour/${destination.id}`);
                }}
              >
                Explore Now
              </motion.button>

              {/* Title */}
              <motion.h3 className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-2xl font-bold text-white drop-shadow-md">
                {destination.name}
              </motion.h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Destinations;

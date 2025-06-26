import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function TrekkingSection() {
  const navigate = useNavigate();
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text */}
        <div className="flex-1 text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Journey to the <br /> Himalayan Lands
          </h2>
          <div className="w-20 h-1 bg-green-600 mb-4" />
          <p className="text-lg text-gray-700">
            Unveiling Hidden Wonders: Nepal, Bhutan, Tibet, and Beyond - Inspire Your Journey!
          </p>
        </div>
        {/* Right: Cards */}
        <div className="flex-1 flex flex-col md:flex-row gap-6 w-full max-w-2xl">
          {/* Nepal Large Card */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="relative flex-1 h-[340px] rounded-3xl overflow-hidden shadow-lg cursor-pointer"
            onClick={() => navigate("/trekking/nepal")}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src="/Images/tour/Trekking1.jpg"
              alt="Nepal"
              className="w-full h-full object-cover"
            />
            <span className="absolute top-6 left-6 bg-green-500 text-black font-semibold px-3 py-1 rounded-md text-sm shadow">
              36 Trips
            </span>
            <span className="absolute bottom-8 left-6 text-white text-4xl font-bold drop-shadow-lg">
              Nepal
            </span>
          </motion.div>
          {/* Bhutan & Tibet stacked */}
          <div className="flex flex-col gap-6 flex-1">
            {/* Bhutan Card */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="relative h-[160px] rounded-3xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => navigate("/trekking/bhutan")}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src="/Images/tour/Trekking2.jpg"
                alt="Bhutan"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-6 left-6 bg-green-500 text-black font-semibold px-3 py-1 rounded-md text-sm shadow">
                16 Trips
              </span>
              <span className="absolute bottom-8 left-6 text-white text-3xl font-bold drop-shadow-lg">
                Bhutan
              </span>
            </motion.div>
            {/* Tibet Card */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="relative h-[160px] rounded-3xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => navigate("/trekking/tibet")}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <img
                src="/Images/tour/Trekking3.jpg"
                alt="Tibet"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-6 left-6 bg-green-500 text-black font-semibold px-3 py-1 rounded-md text-sm shadow">
                10 Trips
              </span>
              <span className="absolute bottom-8 left-6 text-white text-3xl font-bold drop-shadow-lg">
                Tibet
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 
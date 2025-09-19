import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Play } from "lucide-react";

const KnowUs = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative py-16 bg-white overflow-hidden">
      {" "}
      {/* ✅ Prevent horizontal scroll */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        {" "}
        {/* ✅ Prevent container overflow */}
        <div className="grid lg:grid-cols-2 gap-y-12 lg:gap-x-12 items-center">
          {" "}
          {/* ✅ Separate vertical & horizontal gaps */}
          {/* Left Image / Video */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="relative flex justify-center items-center overflow-hidden" // ✅
          >
            {!showVideo ? (
              <div className="relative w-full max-w-full overflow-hidden rounded-xl">
                <img
                  src="../../Images/mandir.png"
                  alt="Nepal Temple"
                  className="w-full h-auto rounded-xl object-cover"
                />
                {/* Play Button */}
                <button
                  onClick={() => setShowVideo(true)}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="bg-white p-6 rounded-full shadow-lg hover:scale-110 transition transform">
                    <Play className="w-8 h-8 text-green-600" />
                  </div>
                </button>
              </div>
            ) : (
              <div className="w-full aspect-video rounded-xl shadow-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"

                  src="https://www.youtube.com/embed/bY_gRApfoJk"

                  title="YouTube Video"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            )}
          </motion.div>
          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center lg:text-left px-2 sm:px-0" // ✅ Add padding to prevent edge overflow
          >
            <p className="text-green-600 italic font-medium mb-2">Get to know us</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Plan Your Trip with Magnificent</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We are Magnificent Travels operating from Kathmandu, Nepal. With 28 years of experience handling tours,
              trekking, and rafting, our expert staff ensures a safe, comfortable, and memorable journey. Our tours are
              designed to fit the needs of travelers worldwide, including seasonal expeditions.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3 mb-6 text-left">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 w-6 h-6 mt-1" />
                <span>We organize tours to Bhutan and Tibet</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 w-6 h-6 mt-1" />
                <span>We can arrange flights as you require</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 w-6 h-6 mt-1" />
                <span>Assist you in planning your trip to Nepal</span>
              </li>
            </ul>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition"
            >
              Know Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KnowUs;

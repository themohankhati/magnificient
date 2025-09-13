import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const WhyBookWithUs = () => {
  const navigate = useNavigate();

  return (
    <section className="text-center py-16 bg-gray-100 overflow-hidden">
      {/* Title */}
      <motion.h2
        className="text-3xl font-bold mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Why book with{" "}
        <span className="text-blue-900 font-bold">Magnificent?</span>
      </motion.h2>

      {/* Feature Grid */}
      <motion.div
        className="flex flex-wrap justify-evenly gap-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="text-center flex-1 min-w-[200px] max-w-[250px] bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src={`Images/${feature.image}`}
              alt={feature.alt}
              className="w-20 mx-auto mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            />
            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.button
          className="bg-green-600 hover:bg-green-700 rounded-lg text-white py-4 px-6 text-sm font-bold shadow-md"
          onClick={() => navigate("/aboutus")}
          whileHover={{ scale: 1.1, boxShadow: "0px 8px 20px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          FIND OUT MORE
        </motion.button>
      </motion.div>
    </section>
  );
};

const features = [
  {
    image: "local experts.png",
    alt: "Authentic Experts",
    title: "Authentic Local Experts",
    description: "Experience true culture with guides from the region.",
  },
  {
    image: "Safety.png",
    alt: "Safety Commitment",
    title: "Commitment to Safety",
    description: "Your safety is always our top priority.",
  },
  {
    image: "Value.png",
    alt: "Exceptional Value",
    title: "Exceptional Value",
    description: "Premium adventures at the best prices.",
  },
  {
    image: "experience-years.png",
    alt: "Years of Experience",
    title: "25+ Years Experience",
    description: "Exceptional travel experiences since 1995.",
  },
];

export default WhyBookWithUs;

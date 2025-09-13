import React, { useState } from "react";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "Authentic Local Experts",
    answer:
      "At Magnificent Travels and Tours, we believe that no one knows a destination better than the people who call it home. ..."
  },
  {
    question: "Commitment to Safety",
    answer:
      "Your safety is our highest priority. Our guides undergo rigorous training ..."
  },
  // keep rest of faqData here (same as before)
];

export default function WhyChooseUsSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [allExpanded, setAllExpanded] = useState(false);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleAll = () => {
    setAllExpanded(!allExpanded);
    setOpenIndex(allExpanded ? null : "all");
  };

  return (
    <motion.section
      className="bg-gradient-to-b from-blue-50 to-white py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
      }}
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-gray-900">
          Why <span className="text-green-700 underline">Choose Us?</span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
          Discover the world with Magnificent Travels and Tours, where every journey is
          curated to perfection. Our passion for exploration and commitment to exceptional
          service ensure unforgettable travel experiences tailored just for you.
        </p>

        {/* Expand/Collapse All */}
        <button
          className="bg-green-700 hover:bg-green-600 text-white px-5 py-2 rounded-md mt-6 transition"
          onClick={toggleAll}
        >
          {allExpanded ? "Collapse All" : "Expand All"}
        </button>

        {/* FAQ Accordion */}
        <div className="mt-10 space-y-6 text-left">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              className="rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              {/* Question */}
              <div
                className="bg-green-100 p-5 flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                <span
                  className={`transform transition-transform ${
                    openIndex === index || openIndex === "all" ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </div>

              {/* Answer */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index || openIndex === "all" ? "auto" : 0,
                  opacity: openIndex === index || openIndex === "all" ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden bg-white"
              >
                {(openIndex === index || openIndex === "all") && (
                  <div className="p-5 text-gray-700">{faq.answer}</div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { activitiesData } from "../tour-overview-page/components/data/activityData";
import SmartImage from "../../shared_components/SmartImage";

// Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 80 }, // start from bottom, invisible
  visible: {
    opacity: 1,
    y: 0, // move to normal position
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const ActivitiesSection = () => {
  const navigate = useNavigate();

  return (
    <>
    <section className="text-center py-16 bg-white overflow-hidden">
  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <motion.h2
          className="text-3xl font-bold mb-14"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <span className="text-blue-900 underline">Activities</span> We Offer
        </motion.h2>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {activitiesData.map((activity) => (
            <motion.div
              key={activity.id}
              className="flex w-full max-w-md h-[140px] items-center bg-white text-black rounded-xl cursor-pointer shadow-md hover:shadow-lg transition"
              variants={cardVariants}
              onClick={() => navigate(`/activities/${activity.id}`)}
            >
              {/* Image */}
              <div className="w-40 h-full overflow-hidden rounded-l-xl">
                <motion.div whileHover={{ scale: 1.15 }} transition={{ duration: 0.6 }} className="w-full h-full">
                  <SmartImage
                    src={`Images/${activity.image}`}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Text */}
              <div className="pl-5 pr-4 text-left flex-1">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {activity.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {activity.places} different places
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Explore More Button */}
        {/* <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <motion.button
            onClick={() => navigate("/activities")}
            className="bg-green-700 text-white text-lg px-8 py-3 rounded-lg shadow-md"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#15803d",
              boxShadow: "0px 10px 25px rgba(0,0,0,0.25)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore More
          </motion.button>
        </motion.div> */}
      </div>
    </section>
    </>
  );
};


export default ActivitiesSection;

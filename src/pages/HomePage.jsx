import React from "react";
import { motion } from "framer-motion";
import Header from "../shared_components/Header";
import HeroSection from "../components/homepage/HeroSection";
import WhyBookWithUs from "../components/homepage/WhyBookWithUs";
import Destinations from "../components/homepage/Destinations";
import BestSelections from "../components/homepage/BestSelections";
import TrekkingSection from "../components/homepage/TrekkingSection";
import Activities from "../components/homepage/Activities";
import KnowUs from "../components/homepage/KnowUs";
import FreeCancellationPolicy from "../shared_components/FreeCancellationPolicy";
import ToursSection from "../components/homepage/ToursSection";
import GoogleReviews from "../components/homepage/GoogleReviews";
import StayFlexible from "../shared_components/StayFlexible";
import Associations from "../shared_components/Associations";
import Newsletter from "../shared_components/Newsletter";
import Footer from "../shared_components/Footer";

// Section variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Container for grids with staggered children
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

// Individual card/element variants
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HomePage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={sectionVariants}
      >
        <HeroSection />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={sectionVariants}
      >
        <KnowUs />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={sectionVariants}
      >
        <WhyBookWithUs />
      </motion.div>

      {/* Destinations with staggered cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <Destinations variants={itemVariants} />
      </motion.div>

      {/* Best Selections with staggered cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <BestSelections variants={itemVariants} />
      </motion.div>

      {/* Trekking Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={sectionVariants}
      >
        <TrekkingSection />
      </motion.div>

      {/* Activities Section with staggered cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <Activities variants={itemVariants} />
      </motion.div>

      {/* Free Cancellation Policy */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={sectionVariants}
      >
        <FreeCancellationPolicy />
      </motion.div>

      {/* Tours Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={sectionVariants}
      >
        <ToursSection />
      </motion.div>

      {/* Google Reviews */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={sectionVariants}
      >
        <GoogleReviews />
      </motion.div>

      {/* Stay Flexible */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={sectionVariants}
      >
        <StayFlexible />
      </motion.div>

      {/* Associations */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={sectionVariants}
      >
        <Associations />
      </motion.div>

      {/* Newsletter */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={sectionVariants}
      >
        <Newsletter />
      </motion.div>

      {/* Footer */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={sectionVariants}
      >
        <Footer />
      </motion.div>
    </>
  );
}

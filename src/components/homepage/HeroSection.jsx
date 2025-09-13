import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

// Slide variants for entry/exit
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 1.05,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.6 },
  }),
};

// Text animation
const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.3 },
  },
};

const HeroSection = () => {
  const slides = [
    {
      image: "../../Images/Annapurna.png",
      title: "Authentic Nepalese Flavors",
      subtitle: "Traditional recipes passed down through generations",
    },
    {
      image: "../../Images/Annapurna.png",
      title: "Premium Catering Services",
      subtitle: "Professional service for every occasion",
    },
    {
      image: "../../Images/Annapurna.png",
      title: "Fresh & Quality Ingredients",
      subtitle: "Sourced locally for the best taste",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentSlide((prev) =>
      newDirection === 1
        ? (prev + 1) % slides.length
        : prev === 0
        ? slides.length - 1
        : prev - 1
    );
  };

  return (
    <section className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          {/* Background image with zoom-in effect */}
          <motion.img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="h-full w-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 5, ease: "easeOut" }}
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          {/* Slide Content */}
          <motion.div
            className="absolute bottom-10 left-6 md:left-12 text-white max-w-lg"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <motion.h3
              className="text-2xl md:text-4xl font-bold text-primary-green mb-3 drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {slides[currentSlide].title}
            </motion.h3>
            <motion.p
              className="text-white/90 text-base md:text-lg leading-relaxed drop-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {slides[currentSlide].subtitle}
            </motion.p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Left Arrow */}
      <motion.button
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 z-20 shadow-lg"
        onClick={() => paginate(-1)}
        whileHover={{ scale: 1.15, x: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>

      {/* Right Arrow */}
      <motion.button
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 z-20 shadow-lg"
        onClick={() => paginate(1)}
        whileHover={{ scale: 1.15, x: 2 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>

      {/* Play/Pause */}
      <motion.button
        className="absolute bottom-5 right-5 w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 shadow-lg z-20"
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        whileHover={{ rotate: 15, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isAutoPlaying ? (
          <Pause className="w-5 h-5" />
        ) : (
          <Play className="w-5 h-5 ml-0.5" />
        )}
      </motion.button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white"
                : "bg-white/40 hover:bg-white/70"
            }`}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            whileHover={{ scale: 1.4 }}
            animate={{
              scale: index === currentSlide ? 1.5 : 1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

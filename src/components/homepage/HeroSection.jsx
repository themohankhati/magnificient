import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import SmartImage from "../../shared_components/SmartImage";

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

const textVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 },
  },
};

const HeroSection = () => {
  const slides = [
    {
      image: "/Images/homepage/hero1.jpg",
      title: "Explore the Majestic Himalayas",
      subtitle: "Unforgettable trekking adventures in Nepal's highest peaks",
    },
    {
      image: "/Images/homepage/hero4.jpg",
      title: "Customized Tours & Treks",
      subtitle: "Tailored itineraries to match your interests and pace",
    },
    {
      image: "/Images/nepal/nepal1.jpg",
      title: "Discover Culture & Heritage",
      subtitle: "Experience Nepal's rich traditions and warm hospitality",
    },
    {
      image: "/Images/tibet/tibet3.jpg",
      title: "Mystical Tibet Awaits",
      subtitle: "Journey to the land of monasteries, mountains, and timeless spirituality",
    },
    {
      image: "/Images/bhutan/bhutan1.jpg",
      title: "Bhutan – The Last Shangri-La",
      subtitle: "Explore happiness, serenity, and untouched landscapes in the Kingdom of Bhutan",
    },
    {
      image: "/Images/india/india1.jpg",
      title: "Incredible India Adventures",
      subtitle: "From the Taj Mahal to vibrant festivals, experience India like never before",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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
    <section className="relative w-full h-[60vh] sm:h-[50vh] md:h-[630px] rounded-2xl overflow-hidden shadow-2xl">
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
          {/* This motion.div replaces the previous motion.img */}
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 5, ease: "easeOut" }}
            className="h-full w-full"
          >
            <SmartImage
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="h-full w-full object-cover"
              priority={currentSlide === 0}
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />

          {/* Centered text content */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-8 md:px-12"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <motion.h3
                className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-2xl leading-tight"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {slides[currentSlide].title}
              </motion.h3>
              <motion.p
                className="text-white/95 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed drop-shadow-lg font-light max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              {/* Optional decorative line */}
              <motion.div
                className="w-24 h-1 bg-white/80 mx-auto mt-6 sm:mt-8 rounded-full"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 96, opacity: 0.8 }}
                transition={{ delay: 1, duration: 0.8 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <motion.button
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 z-20 shadow-lg"
        onClick={() => paginate(-1)}
        whileHover={{ scale: 1.15, x: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6" />
      </motion.button>
      <motion.button
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 z-20 shadow-lg"
        onClick={() => paginate(1)}
        whileHover={{ scale: 1.15, x: 2 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6" />
      </motion.button>

      {/* Play/Pause */}
      <motion.button
        className="absolute bottom-3 sm:bottom-5 right-3 sm:right-5 w-8 h-8 sm:w-10 sm:h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 shadow-lg z-20"
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        whileHover={{ rotate: 15, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isAutoPlaying ? (
          <Pause className="w-4 sm:w-5 h-4 sm:h-5" />
        ) : (
          <Play className="w-4 sm:w-5 h-4 sm:h-5 ml-0.5" />
        )}
      </motion.button>

      {/* Indicators */}
      <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
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
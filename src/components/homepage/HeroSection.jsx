import React, { useState, useEffect } from "react";

const images = [
  "Images/chitwan.jpg",
  "Images/Annapurna.png",
  "Images/jungle.jpg",
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[720px] overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <img
          src={images[current]}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-[0_6px_15px_rgba(0,0,0,0.8)]">
          Crafting Unforgettable Adventures.
        </h1>

        {/* Search Box */}
        <div className="flex items-center bg-white py-3 px-2 rounded-full w-full max-w-3xl shadow-lg gap-3">
          {/* Search Item: Where */}
          <div className="flex flex-col w-1/2 text-left pl-6">
            <label htmlFor="where" className="text-sm font-bold text-gray-600 mb-2">
              Where to?
            </label>
            <input
              id="where"
              type="text"
              placeholder="Search for a place or activity"
              className="bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none text-sm"
            />
          </div>

          {/* Divider */}
          <div className="w-px h-8 bg-gray-300"></div>

          {/* Search Item: When */}
          <div className="flex flex-col w-1/2 text-left pl-6">
            <label htmlFor="when" className="text-sm font-bold text-gray-600 mb-2">
              When
            </label>
            <input
              id="when"
              type="text"
              placeholder="Select tentative dates"
              className="bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none text-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

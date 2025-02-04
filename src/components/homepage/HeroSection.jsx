import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 blur-[2px]"
      >
        <source src="Background video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-15 text-shadow-xl drop-shadow-[0_6px_15px_rgba(0,0,0,0.8)]">
          Crafting Unforgettable Adventures.
        </h1>

        {/* Search Box */}
        <div className="flex items-center bg-white py-3 px-2 rounded-full w-[50%] max-w-6xl mx-auto shadow-lg gap-3">
          {/* Search Item: Where */}
          <div className="flex flex-col w-1/2 text-left pl-8">
            <label
              htmlFor="where"
              className="text-sm font-bold text-gray-600 mb-2"
            >
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
          <div className="flex flex-col w-1/2 text-left pl-8">
            <label
              htmlFor="when"
              className="text-sm font-bold text-gray-600 mb-2"
            >
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

import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="Images/Background1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 md:mb-15 drop-shadow-[0_6px_15px_rgba(0,0,0,0.8)] max-w-3xl">
          Crafting Unforgettable Adventures.
        </h1>

        {/* Search Box */}
        <div className="flex flex-col sm:flex-row items-center bg-white py-4 px-4 rounded-full max-w-4xl w-full shadow-lg gap-4 sm:gap-6">
          {/* Search Item: Where */}
          <div className="flex flex-col flex-1 text-left pl-4 sm:pl-8">
            <label
              htmlFor="where"
              className="text-sm font-bold text-gray-600 mb-1"
            >
              Where to?
            </label>
            <input
              id="where"
              type="text"
              placeholder="Search for a place or activity"
              className="bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none text-sm w-full"
            />
          </div>

          {/* Divider for sm and up */}
          <div className="hidden sm:block w-px h-8 bg-gray-300"></div>

          {/* Search Item: When */}
          <div className="flex flex-col flex-1 text-left pl-4 sm:pl-8">
            <label
              htmlFor="when"
              className="text-sm font-bold text-gray-600 mb-1"
            >
              When
            </label>
            <input
              id="when"
              type="text"
              placeholder="Select tentative dates"
              className="bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none text-sm w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

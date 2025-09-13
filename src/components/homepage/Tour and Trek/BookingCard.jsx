import React from "react";

const BookingCard = () => {
  return (
    <div className="bg-gray-50 rounded-md shadow-md p-4 sm:p-6 text-center mt-6 sm:mt-8 lg:mt-10 w-full">
      <div className="text-lg sm:text-xl md:text-2xl font-bold mb-2">Price: Contact Us</div>
      <div className="text-xs sm:text-sm text-gray-600 mb-4"></div>

      <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 sm:py-3 px-4 rounded-md mb-3 sm:mb-4 w-full text-sm sm:text-base transition-colors duration-200">
        Book Now
      </button>

      <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 sm:py-3 px-4 rounded-md mb-2 w-full text-sm sm:text-base transition-colors duration-200">
        Group Booking
      </button>
      <div className="text-xs sm:text-sm text-gray-600 italic mb-3 sm:mb-4">
        Bring your crew and save big!
      </div>

      <div className="text-base sm:text-lg font-semibold mb-2">Want to know more?</div>

      <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 sm:py-3 px-4 rounded-md w-full mb-2 text-sm sm:text-base transition-colors duration-200">
        Talk to an expert
      </button>

      <div className="text-xs sm:text-sm text-gray-600">Contact: +977 1 4523218</div>
    </div>
  );
};

export default BookingCard;

import React from "react";

const BookingCard = () => {
  return (
    <div className="bg-gray-50 rounded-md shadow-md p-6 text-center mt-25 ">
      <div className="text-2xl font-bold mb-2">Price: Contact Us</div>
      <div className="text-sm text-gray-600 mb-4"></div>

      <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md mb-4 w-full">
        Book Now
      </button>

      <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md mb-2 w-full">
        Group Booking
      </button>
      <div className="text-sm text-gray-600 italic mb-4">
        Bring your crew and save big!
      </div>

      <div className="text-lg font-semibold mb-2">Want to know more?</div>

      <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-md w-full mb-2">
        Talk to an expert
      </button>

      <div className="text-sm text-gray-600">Contact: +9779800000021</div>
    </div>
  );
};

export default BookingCard;

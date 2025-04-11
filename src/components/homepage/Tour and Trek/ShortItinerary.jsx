import React from "react";

const ShortItinerary = ({ itinerary }) => {
  return (
    <div className="flex flex-col mt-12 w-full px-4">
      <h1 className="text-4xl font-extrabold text-[#14205c] mb-8 tracking-wide text-start">
        Short Itinerary
      </h1>

      <div className="overflow-x-auto w-full max-w-4xl shadow-md rounded-lg">
        <table className="w-full text-base text-left border border-gray-300 rounded-lg overflow-hidden">
          <tbody>
            {itinerary.map((item, index) => (
              <tr
                key={item._id || index}
                className={`border-b border-gray-200 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-green-50 transition duration-200`}
              >
                <td className="px-6 py-5 font-extrabold text-gray-900 whitespace-nowrap text-lg">
                  Day {item.day_number} :
                </td>
                <td className="px-6 py-5 font-bold text-gray-800 text-lg">
                  {item.title}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShortItinerary;

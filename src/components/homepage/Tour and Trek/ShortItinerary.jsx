import React from "react";

const ShortItinerary = ({itinerary}) => {

  return (
    <>
      <div className="flex flex-col mt-8 w-full">
        <h1 className="text-3xl font-bold"> Short Itinerary</h1>
        <table className="border-collapse border border-gray-400 w-2/3" id="shortItinerary">
          <tbody>
            {itinerary.map((item, index) => (
              <tr
                key={index._id}
                className="text-center border border-gray-400 px-4 py-2"
              >
                <td className=" px-4 py-2 font-bold">{`Day ${item.day_number} :`}</td>
                <td className="text-start">{item.title}</td>
                {/* <td className="text-start">{item.description}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ShortItinerary;

import React from "react";

const ShortItinerary = () => {
  const days = [
    { day: "Day 1", activity: "Arrival in Kathmandu" },
    { day: "Day 2", activity: "Kathmandu Sightseeing" },
    { day: "Day 3", activity: "Kathmandu to Pokhara" },
    { day: "Day 4", activity: "Pokhara to Gorepani" },
    { day: "Day 5", activity: "Gorepani to Tadapani" },
    { day: "Day 6", activity: "Tadapani to Chomrong" },
    { day: "Day 7", activity: "Chomrong to Dovan" },
    { day: "Day 8", activity: "Chomrong to Machhapuchhre Base Camp" },
  ];

  return (
    <>
      <div className="flex flex-col mt-8 w-full">
        <h1 className="text-3xl font-bold"> Short Itinerary</h1>
        <table className="border-collapse border border-gray-400 w-2/3">
          <tbody>
            {days.map((item, index) => (
              <tr
                key={index}
                className="text-center border border-gray-400 px-4 py-2"
              >
                <td className=" px-4 py-2 font-bold">{`${item.day} :`}</td>
                <td className="text-start">{item.activity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ShortItinerary;

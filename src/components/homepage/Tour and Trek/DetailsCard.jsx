import React from "react";

function DetailsCard() {
  const value = [
    {
      Country: "Nepal",
      Duration: "19 Days",
      Difficult: "Strenuous",
      Activity: " Treeking/Hikking",
      MaxAltitude: "5,555 m/18225ft",
      BestSeason: "Feb-Jun, Sep-Dec",
      Accomadation: "Tea House & Hotel",
      Meals: "Included",
      StartEndPoint: "Kathmandu",
    },
  ];
  return (
    <>
      <div className="bg-gray-400 w-1/4">
        {value.map((values) => {
          console.log(values.Accomadation);
        })}
      </div>
    </>
  );
}

export default DetailsCard;

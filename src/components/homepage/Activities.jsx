import React from "react";
import { useNavigate } from "react-router-dom";
import { activitiesData } from "../tour-overview-page/components/data/activityData";

const ActivitiesSection = () => {
  const navigate = useNavigate();
  return (
    <section className="text-center py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">
          <span className="text-blue-900 underline">Activities</span> We Offer
        </h2>

        {/* Grid Container for 2 rows */}
        <div className="flex flex-wrap justify-center gap-15 max-w-5xl mx-auto">
          {activitiesData.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center text-black no-underline rounded-lg transition-transform transform hover:scale-105 basis-[30%] max-w-[300px] cursor-pointer"
              onClick={() => navigate(`/activities/${activity.id}`)}
            >
              <div className="w-32 h-20 overflow-hidden rounded-md">
                <img
                  src={`Images/${activity.image}`}
                  alt={activity.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pl-4 text-left">
                <h3 className="text-lg font-semibold mb-1">{activity.title}</h3>
                <p className="text-sm">{activity.places} different places</p>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="mt-14">
          <a
            href="#explore-more"
            className="bg-green-700 text-white text-lg px-6 py-2 rounded-md transition-colors hover:bg-green-600"
          >
            Explore More
          </a>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;

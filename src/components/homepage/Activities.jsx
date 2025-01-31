import React from "react";

const activities = [
  { id: "jungle-safari", title: "Jungle Safari", places: 5, image: "Homepage-pictures/JungleSafari.jpg" },
  { id: "paragliding", title: "Paragliding", places: 4, image: "Homepage-pictures/paragliding.jpg" },
  { id: "rafting", title: "Rafting", places: 7, image: "Homepage-pictures/rafting.jpg" },
  { id: "bungee-jumping", title: "Bungee Jumping", places: 6, image: "Homepage-pictures/Bungee.jpg" },
  { id: "climbing-expedition", title: "Climbing & Expedition", places: 10, image: "Homepage-pictures/climbingExpedition.jpg" },
  { id: "mountain-flight", title: "Mountain Flight", places: 2, image: "Homepage-pictures/MountainFlight.jpg" },
];

const ActivitiesSection = () => {
  return (
    <section className="text-center py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">
          <span className="text-blue-900 underline">Activities</span> We Offer
        </h2>
        <div className="flex flex-wrap justify-between items-start gap-15 max-w-5xl mx-auto">
          {activities.map((activity) => (
            <a
              key={activity.id}
              href={`#${activity.id}`}
              className="flex items-center text-black no-underline rounded-lg transition-transform transform hover:scale-105 w-full max-w-xs"
            >
              <div className="w-32 h-20 overflow-hidden rounded-md">
                <img src={activity.image} alt={activity.title} className="w-full h-full object-cover" />
              </div>
              <div className="pl-4 text-left">
                <h3 className="text-lg font-semibold mb-1">{activity.title}</h3>
                <p className="text-sm">{activity.places} different places</p>
              </div>
            </a>
          ))}
        </div>
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

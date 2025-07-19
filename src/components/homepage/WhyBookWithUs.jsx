import React from "react";
import { useNavigate } from "react-router-dom";

const WhyBookWithUs = () => {
  const navigate = useNavigate();
  return (
    <section className="text-center py-16 bg-gray-100">
      <h2 className="text-3xl font-bold mb-10">
        Why book with{" "}
        <span className="text-blue-900 font-bold">Magnificent?</span>
      </h2>

      <div className="flex flex-wrap justify-evenly gap-8 max-w-7xl mx-auto">
        {/* Feature Items */}
        {features.map((feature, index) => (
          <div
            key={index}
            className="text-center flex-1 min-w-[200px] max-w-[250px]"
          >
            <img
              src={`Images/${feature.image}`}
              alt={feature.alt}
              className="w-20 mx-auto mb-4"
            />
            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-10">
        <button
          className="bg-green-600 hover:bg-green-700 rounded-lg  text-white py-4 px-3  text-sm font-bold transition duration-300"
          onClick={() => navigate("/aboutus")}
        >
          FIND OUT MORE
        </button>
      </div>
    </section>
  );
}; 

const features = [
  {
    image: "local experts.png",
    alt: "Authentic Experts",
    title: "Authentic Local Experts",
    description: "Experience true culture with guides from the region.",
  },
  {
    image: "Safety.png",
    alt: "Safety Commitment",
    title: "Commitment to Safety",
    description: "Your safety is always our top priority.",
  },
  {
    image: "Value.png",
    alt: "Exceptional Value",
    title: "Exceptional Value",
    description: "Premium adventures at the best prices.",
  },
  {
    image: "experience-years.png",
    alt: "Years of Experience",
    title: "25+ Years Experience",
    description: "Exceptional travel experiences since 1995.",
  },
];

export default WhyBookWithUs;

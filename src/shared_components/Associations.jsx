import React from "react";
export default function Associations() {
  const logos = [
    { src: "Images/ntb-logo.png", alt: "NTB Logo" },
    { src: "Images/nma-logo.png", alt: "NMA Logo" },
    { src: "Images/keep-logo.png", alt: "KEEP Logo" },
    { src: "Images/natta-logo.png", alt: "NATTA Logo" },
    { src: "Images/pata-logo.png", alt: "PATA Logo" },
    { src: "Images/taan-logo.png", alt: "TAAN Logo" },
    { src: "Images/travellife-logo.png", alt: "Travellife Logo" },
  ];

  return (
    <section className="text-center py-15 bg-gray-50">
      <div className="max-w-7xl mx-auto pb-8">
        <h2 className="text-3xl font-bold relative inline-block mb-12">
          We are associated with
          <span className="block w-20 h-1 bg-green-600 mt-2 mx-auto"></span>
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-24 max-w-[160px] object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

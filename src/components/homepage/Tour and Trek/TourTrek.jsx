import React, { useState, useEffect } from "react";
import Header from "../../../shared_components/Header";
import SecondBar from "./SecondBar";
import DetailsCard from "./DetailsCard";
import ShortItinerary from "./ShortItinerary";
import PackageIncludes from "./PackageIncludes";
import PackageExcludes from "./PackageExculdes";
import FAQSection from "../FAQSection";
import BookingCard from "./BookingCard";
import Associations from "../../../shared_components/Associations";
import Newsletter from "../../../shared_components/Newsletter";
import Footer from "../../../shared_components/Footer";
import DetailsItinerary from "./DetailsItinerary";
import PhotoGallery from "./PhotoGallery";

export default function TourTrek({
  title,
  description,
  itinerary,
  faqs,
  includes,
  excludes,
  images,
  detailsItems
}) {
  const [current, setCurrent] = useState(0);
  const heroImages = images && images.length > 0 ? images.slice(0, 4) : ["/Images/placeholder.jpg"];

  useEffect(() => {
    if (heroImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <>
      <Header />
      <section className="bg-blue-100 h-[400px] sm:h-[500px] md:h-[600px] w-full relative overflow-hidden">
        <img
          src={heroImages[current]}
          alt="Hero"
          className="bg-blue-100 h-[400px] sm:h-[500px] md:h-[600px] w-full object-cover transition-all duration-700"
        />
        {heroImages.length > 1 && (
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {heroImages.map((_, idx) => (
              <span
                key={idx}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${current === idx ? "bg-green-600" : "bg-white border border-green-600"}`}
                style={{ display: idx < heroImages.length ? "inline-block" : "none" }}
              ></span>
            ))}
          </div>
        )}
      </section>
      <SecondBar />

      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8">
        <div className="lg:w-2/3 lg:pr-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#14205c] mb-6 sm:mb-8 md:mb-10 tracking-wide mt-6 sm:mt-8">{title}</h1>
          <p section id="Overview" className="text-sm sm:text-base leading-relaxed mb-6">{description}</p>

          <DetailsCard detailsItems={detailsItems} />

          <ShortItinerary itinerary={itinerary} />
          <DetailsItinerary itinerary={itinerary} />

          <div className="flex flex-col w-full mt-8 sm:mt-10">
            <div id="Includes">
              <PackageIncludes includes={includes} />
            </div>
            <div id="Excludes">
              <PackageExcludes excludes={excludes} />
            </div>
          </div>

          <div id="PhotoGallery">
            <PhotoGallery images={images} />
          </div>
          <div id="FAQs">
            <FAQSection className={"mx-[unset]"} />
          </div>
        </div>

        <div className="lg:w-1/3 flex flex-col gap-6">
          <div className="sticky top-20 sm:top-24 mb-8 sm:mb-12 lg:mb-24 mt-6 sm:mt-8 lg:mt-10">
            <BookingCard tourTitle={title} />
          </div>
        </div>
      </div>

      <Associations />
      <Newsletter />
      <Footer />
    </>
  );
}

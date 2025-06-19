import React from "react";
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
  return (
    <>
      <Header />
      <section className="bg-blue-100 h-[600px] w-full">
        <img
          src="Images/Annapurna.png"
          alt=""
          className="bg-blue-100 h-[600px] w-full"
        />
      </section>
      <SecondBar  />

      <div className="flex flex-col lg:flex-row gap-6 p-5">
        <div className="lg:w-2/3 p-13">
          <h1 className="text-4xl font-bold text-[#14205c] mb-10 tracking-wide">{title}</h1>
          <p section id = "Overview">{description}</p>

          <DetailsCard detailsItems={detailsItems}/>

          <ShortItinerary itinerary={itinerary} />
          <DetailsItinerary faqs={faqs} />

          <div className="'flex flex-col w-full mt-10 ">
            <PackageIncludes includes={includes} />
            <PackageExcludes excludes={excludes} />
          </div>

          
          <PhotoGallery  images={images} />
          <FAQSection className={"mx-[unset]"} />
        </div>
       

        <div className="lg:w-1/3 flex flex-col gap-6">
          <BookingCard />
        </div>
      </div>

      <Associations />
      <Newsletter />
      <Footer />
    </>
  );
}

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



export default function TourTrek({ 
  title, 
  description, 
  days, 
  includes, 
  excludes 
}) {
  return (
    <>
  <Header/>
      <section className="bg-blue-100 h-[400px] flex flex-col items-center justify-center text-center p-6 w-full">
        <h1 className="text-4xl font-bold">Meet Our Team</h1>
        <p className="text-gray-700 mt-2">[RANDOM COMPANY AND PEOPLE PICTURES]</p>
      </section>
      <SecondBar/>

      <div className="flex flex-col lg:flex-row gap-6 p-5">
        <div className="lg:w-2/3 p-13">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p>{description}</p>

          <DetailsCard />

     

          <ShortItinerary days={days} />
         
          <div className="flex w-full gap-10 mt-10">
            <PackageIncludes includes={includes} />
            <PackageExcludes excludes={excludes} />
          </div>

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

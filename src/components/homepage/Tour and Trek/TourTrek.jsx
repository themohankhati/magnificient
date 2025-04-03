import React from "react";
import Header from "../../../shared_components/Header";
import SecondBar from "./SecondBar";
import DetailsItinerary from "./DetailsItinerary";
import PackageIncludes from "./PackageIncludes";
import PackageExcludes from "./PackageExculdes";
import Associations from "../../../shared_components/Associations";
import Newsletter from "../../../shared_components/Newsletter";
import Footer from "../../../shared_components/Footer";
import FAQSection from "../FAQSection";
import BookingCard from "./BookingCard";
import DetailsCard from "./DetailsCard";
import ShortItinerary from "./ShortItinerary";

function TourTrek() {
  return (
    <>
      <Header />
      <section className="bg-blue-100 h-[400px] flex flex-col items-center justify-center text-center p-6 w-full">
        <h1 className="text-4xl font-bold">Meet Our Team</h1>
        <p className="text-gray-700 mt-2">
          [RANDOM COMPANY AND PEOPLE PICTURES]
        </p>
      </section>
      <SecondBar />

      <div className="flex flex-col lg:flex-row gap-6 p-5">
        <div className="lg:w-2/3 p-13">
          <h1 className="text-4xl font-bold">
            Annapurna Base Camp Trek -15 days
          </h1>
          <p>
            Annapurna Base Camp Trek, also known as Annapurna Sanctuary Trek, is
            one of our most popular treks in the world. This trek takes you to
            the base camp of Mt. Annapurna (8,091m), the world’s 10th highest
            mountain.
          </p>
          <DetailsCard />

          <h1 className="text-4xl font-bold">Overview</h1>
          <p className="mt-4">
            The Annapurna Base Camp Trek is a renowned adventure that captivates
            trekkers from around the world. Nestled at an altitude of 4,130
            meters, the Annapurna base camp serves as a gateway to the towering
            magnificence of Mount Annapurna, the 10th highest peak globally at
            8,091 meters. The ABC Trek promises an unforgettable experience,
            captivating trekkers as they on this iconic Himalayan adventure.
            Annapurna Sanctuary  boasts awe-inspiring and unique settings,
            surrounded by majestic peaks such as Annapurna I (8,091 m),
            Annapurna South (7,219 m), Machapuchhre (6,993 m), and Hiunchuli
            (6,441 m). This trek is renowned for its remarkable altitude
            variation and diverse ecosystem, making it an extraordinary
            expedition. The trail meanders through verdant forests adorned with
            rhododendrons, picturesque rice paddies, and terraced farmlands,
            providing unrivaled mountain vistas. Immerse yourself in the
            splendor of enormous mountains and gain insights into the rich
            tapestry of Nepalese life and culture. Embarking on ABC trek will
            undoubtedly make you feel like you’re embarking on one of the most
            extraordinary journeys in the world. However, the Annapurna Base
            Camp Trek is not solely about sightseeing. Along the way, you have
            the opportunity to immerse yourself in the local cultures and
            traditions of ethnic Gurungs, Magars, Thakalis, and Lobas.
          </p>

          <ShortItinerary />
          <DetailsItinerary />
          <div className="flex w-full gap-10">
            <PackageIncludes />
            <PackageExcludes />
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

export default TourTrek;

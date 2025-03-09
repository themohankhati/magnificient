import React from "react";
import Header from "../shared_components/Header";
import HeroSection from "../components/homepage/HeroSection";
import WhyBookWithUs from "../components/homepage/WhyBookWithUs";
import Destinations from "../components/homepage/Destinations";
import BestSelections from "../components/homepage/BestSelections";
import Activities from "../components/homepage/Activities";
import FreeCancellationPolicy from "../shared_components/FreeCancellationPolicy";
import ToursSection from "../components/homepage/ToursSection";
import GoogleReviews from "../components/homepage/GoogleReviews";
import FAQSection from "../components/homepage/FAQSection";
import StayFlexible from "../shared_components/StayFlexible";
import Associations from "../shared_components/Associations";
import Newsletter from "../shared_components/Newsletter";
import Footer from "../shared_components/Footer";





export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <WhyBookWithUs />
      <Destinations />
      <BestSelections />
      <Activities />
      <FreeCancellationPolicy />
      <ToursSection />
      <GoogleReviews />
      <FAQSection />
      <StayFlexible />
      <Associations />
      <Newsletter />
      <Footer />
      
      
  
     
    </>
  );
}

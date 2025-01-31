import { useState } from "react";
import React from "react";
import Header from "./shared_components/Header";
import HeroSection from "./components/homepage/HeroSection";
import WhyBookWithUs from "./components/homepage/WhyBookWithUs";
import Destinations from "./components/homepage/Destinations";
import BestSelections from "./components/homepage/BestSelections";
import Activities from "./components/homepage/Activities";
import FreeCancellationPolicy from "./shared_components/FreeCancellationPolicy";
import ToursSection from "./components/homepage/ToursSection";


function App() {
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
    </>
  );
}

export default App;

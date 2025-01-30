import { useState } from "react";
import React from "react";
import Header from "./shared_components/Header";
import HeroSection from "./components/homepage/HeroSection";
import WhyBookWithUs from "./components/homepage/WhyBookWithUs";
import Destinations from "./components/homepage/Destinations";


function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <WhyBookWithUs />
      <Destinations />
    </>
  );
}

export default App;

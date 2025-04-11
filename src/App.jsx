import React from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Destinations from "./components/homepage/Destinations";
import ActivitiesSection from "./components/homepage/Activities";
import TourTrek from "./components/homepage/Tour and Trek/TourTrek";
import ContactUs from "./pages/contactUs";
import AnnapurnaBaseCamp from "./components/homepage/Trek/AnnapurnaBaseCamp";
import ChitwanNationalPark1 from "./components/tour/jungle-safari/chitwan-national-park/ChitwanNationalPark1";
import ChitwanNationalPark2 from "./components/tour/jungle-safari/chitwan-national-park/ChitwanNationalPark2";
import ChitwanNationalPark3 from "./components/tour/jungle-safari/chitwan-national-park/ChitwanNationalPark3";
import ChitwanNationalPark4 from "./components/tour/jungle-safari/chitwan-national-park/ChitwanNationalPark4";
import ChitwanNationalPark5 from "./components/tour/jungle-safari/chitwan-national-park/ChitwanNationalPark5";
import BardiyaNationalPark1 from "./components/tour/jungle-safari/bardiya-national-park/BardiyaNationalPark1";
import BardiyaNationalPark2 from "./components/tour/jungle-safari/bardiya-national-park/BardiyaNationalPark2";
import BardiyaNationalPark3 from "./components/tour/jungle-safari/bardiya-national-park/BardiyaNationalPark3";
import BardiyaNationalPark4 from "./components/tour/jungle-safari/bardiya-national-park/BardiyaNationalPark4";

const HomePage = lazy(() => import("./pages/HomePage"));


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="/destinations"
            element={
              <Suspense>
                <Destinations />
              </Suspense>
            }
          />
            <Route
              path="/activities"
              element={
                <Suspense>
                  <ActivitiesSection />
                </Suspense>
              }
            />
          <Route
            path="/aboutus"
            element={
              <Suspense>
                <AboutUs />
              </Suspense>
            }
          />
            
            <Route
            path="/annapurnabasecamp"
            element={
              <Suspense>
                <AnnapurnaBaseCamp />
              </Suspense>
            }
          />
            
            <Route
            path="/chitwan-national-park1"
            element={
              <Suspense>
                <ChitwanNationalPark1 />
              </Suspense>
            }
          />
            
            <Route
            path="/chitwan-national-park2"
            element={
              <Suspense>
                <ChitwanNationalPark2 />
              </Suspense>
            }
          />
            
            <Route
            path="/chitwan-national-park3"
            element={
              <Suspense>
                <ChitwanNationalPark3 />
              </Suspense>
            }
          />
            
            <Route
            path="/chitwan-national-park4"
            element={
              <Suspense>
                <ChitwanNationalPark4 />
              </Suspense>
            }
          />
            
            <Route
            path="/chitwan-national-park5"
            element={
              <Suspense>
                <ChitwanNationalPark5 />
              </Suspense>
            }
          />
            
            <Route
            path="/bardiya-national-park1"
            element={
              <Suspense>
                <BardiyaNationalPark1 />
              </Suspense>
            }
          />
            
            <Route
            path="/bardiya-national-park2"
            element={
              <Suspense>
                <BardiyaNationalPark2 />
              </Suspense>
            }
          />
            
            <Route
            path="/bardiya-national-park3"
            element={
              <Suspense>
                <BardiyaNationalPark3 />
              </Suspense>
            }
          />
            
            <Route
            path="/bardiya-national-park4"
            element={
              <Suspense>
                <BardiyaNationalPark4 />
              </Suspense>
            }
          />
          <Route
            path="/contactus"
            element={
              <Suspense>
                <ContactUs />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </>
  );
}



export default App;

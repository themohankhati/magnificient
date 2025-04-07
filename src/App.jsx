import React from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Destinations from "./components/homepage/Destinations";
import ActivitiesSection from "./components/homepage/Activities";
import ContactUs from "./pages/contactUs";
import AnnapurnaBaseCamp from "./components/homepage/Trek/AnnapurnaBaseCamp";
<<<<<<< HEAD
import ChitwanNationalPark1 from "./components/homepage/tour/jungle-safari/chitwan-national-park/ChitwanNationalPark1";
import ChitwanNationalPark2 from "./components/homepage/tour/jungle-safari/chitwan-national-park/ChitwanNationalPark2";
import ChitwanNationalPark3 from "./components/homepage/tour/jungle-safari/chitwan-national-park/ChitwanNationalPark3";
import ChitwanNationalPark4 from "./components/homepage/tour/jungle-safari/chitwan-national-park/ChitwanNationalPark4";
import ChitwanNationalPark5 from "./components/homepage/tour/jungle-safari/chitwan-national-park/ChitwanNationalPark5";
import BardiyaNationalPark1 from "./components/homepage/tour/jungle-safari/bardiya-national-park/BardiyaNationalPark1";
import BardiyaNationalPark2 from "./components/homepage/tour/jungle-safari/bardiya-national-park/BardiyaNationalPark2";
import BardiyaNationalPark3 from "./components/homepage/tour/jungle-safari/bardiya-national-park/BardiyaNationalPark3";
import BardiyaNationalPark4 from "./components/homepage/tour/jungle-safari/bardiya-national-park/BardiyaNationalPark4";
import Dashboard from "./components/homepage/AdminDashboard/Components/Dashboard";
import VendorDetails from "./components/homepage/AdminDashboard/Components/VendorDetails";
=======
>>>>>>> parent of 1abcaef (Chitwan and bardiya tours added)

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

import React from "react";
import { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Destinations from "./components/homepage/Destinations";
import ActivitiesSection from "./components/homepage/Activities";
import TourTrek from "./components/homepage/Tour and Trek/TourTrek";

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
            path="/tourtrek"
            element={
              <Suspense>
                <TourTrek />
              </Suspense>
            }
          />
          {/* <Route
            path="/contactus"
            element={
              <Suspense>
                <ContactUs />
              </Suspense>
            }
          /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;

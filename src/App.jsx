import React from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Destinations from "./components/homepage/Destinations";
import ActivitiesSection from "./components/homepage/Activities";
import ContactUs from "./pages/contactUs";
import AnnapurnaBaseCamp from "./components/homepage/Trek/AnnapurnaBaseCamp";
import Dashboard from "./components/homepage/AdminDashboard/Components/Dashboard"
import VendorDetails from "./components/homepage/AdminDashboard/Components/Package";
import UserDetails from "./components/homepage/AdminDashboard/Components/UserDetails";
import CustomerDetails from "./components/homepage/AdminDashboard/Components/CustomerDetails";

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
            path="/dashboard"
            element={
              <Suspense>
                <Dashboard />
              </Suspense>
            }
          />
                         <Route
            path="/package"
            element={
              <Suspense>
                <VendorDetails />
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
          <Route
            path="/userdetails"
            element={
              <Suspense>
                <UserDetails />
              </Suspense>
            }
          />
          <Route
            path="/customerdetails"
            element={
              <Suspense>
                <CustomerDetails />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </>
  );
}



export default App;

import React from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Destinations from "./components/homepage/Destinations";
import ActivitiesSection from "./components/homepage/Activities";
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
import Dashboard from "./components/homepage/AdminDashboard/Components/Dashboard";
import UserDetails from "./components/homepage/AdminDashboard/Components/UserDetails";
import CustomerDetails from "./components/homepage/AdminDashboard/Components/CustomerDetails";
import AuthPage from "./pages/AuthPage";
import TourOverviewPage from "./pages/TourOverviewPage";
import PackageDetails from "./components/homepage/AdminDashboard/Components/Package";
import ActivityOverviewPage from "./pages/ActivityOverviewPage";
import MagnificentTourOverviewPage from "./pages/MagnificentTourOverviewPage";
import TrekkingOverviewPage from "./pages/TrekkingOverviewPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const HomePage = lazy(() => import("./pages/HomePage"));

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
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
              path="/login"
              element={
                <Suspense>
                  <AuthPage />
                </Suspense>
              }
            />
            <Route
              path="/register"
              element={
                <Suspense>
                  <AuthPage />
                </Suspense>
              }
            />
            <Route
              path="/package"
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
            <Route
              path="/dashboard"
              element={
                <Suspense>
                  <Dashboard />
                </Suspense>
              }
            />
            <Route
              path="/login"
              element={
                <Suspense>
                  <AuthPage />
                </Suspense>
              }
            />
            <Route
              path="/register"
              element={
                <Suspense>
                  <AuthPage />
                </Suspense>
              }
            />
            <Route
              path="/dashboardpackage"
              element={
                <Suspense>
                  <PackageDetails />
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
            <Route
              path="/tour/:tourId"
              element={
                <Suspense>
                  <TourOverviewPage />
                </Suspense>
              }
            />
            <Route
              path="/activities/:activityId"
              element={
                <Suspense>
                  <ActivityOverviewPage />
                </Suspense>
              }
            />
            <Route
              path="/tours/:tourId"
              element={
                <Suspense>
                  <MagnificentTourOverviewPage />
                </Suspense>
              }
            />
            <Route
              path="/trekking/:trekkingId"
              element={
                <Suspense>
                  <TrekkingOverviewPage />
                </Suspense>
              }
            />
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;

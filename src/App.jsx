import React from "react";
import { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";

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
            path="/aboutus"
            element={
              <Suspense>
                <AboutUs />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;

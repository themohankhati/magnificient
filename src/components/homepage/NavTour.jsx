import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { magnificentToursData } from "../tour-overview-page/components/data/magnificentTourData";
import Header from "../../shared_components/Header";
import Associations from "../../shared_components/Associations";
import Footer from "../../shared_components/Footer";

const NavTour = () => {
  const navigate = useNavigate();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [showAllTours, setShowAllTours] = useState(false); // ✅ toggle state
  const toursPerPage = 4;

  // Calculate indexes for slicing
  const indexOfLastTour = currentPage * toursPerPage;
  const indexOfFirstTour = indexOfLastTour - toursPerPage;

  // Current tours for page OR show all
  const currentTours = showAllTours
    ? magnificentToursData
    : magnificentToursData.slice(indexOfFirstTour, indexOfLastTour);

  // Total pages count
  const totalPages = Math.ceil(magnificentToursData.length / toursPerPage);

  // Handle page change
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Header />
      <section className="text-center py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10">
            <span className="text-blue-900 underline decoration-green-600">
              Tours
            </span>{" "}
            We Offer
          </h2>

          {/* Tours Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentTours.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 border border-gray-200 cursor-pointer flex flex-col"
                onClick={() => navigate(`/tours/${tour.id}`)}
              >
                <img
                  src={`Images/${tour.img}`}
                  alt={tour.title}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="p-4 flex flex-col justify-center text-left flex-grow">
                  <h3 className="text-lg font-semibold mb-2">{tour.title}</h3>
                  <p className="text-gray-600">{tour.count}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination (only show if not "show all") */}
          {!showAllTours && (
            <div className="mt-10 flex justify-center space-x-4">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`w-4 h-4 rounded-full transition-colors duration-300 ${
                    page === currentPage ? "bg-green-600" : "bg-gray-300"
                  }`}
                  aria-label={`Go to page ${page}`}
                />
              ))}
            </div>
          )}

          {/* Toggle Button */}
          <div className="mt-14 mb-10">
            <button
              onClick={() => {
                setShowAllTours(!showAllTours); // ✅ toggle show/hide
                setCurrentPage(1); // reset to first page when going back
              }}
              className="bg-green-600 text-white text-lg py-2 px-6 rounded-md transition hover:bg-green-800"
            >
              {showAllTours ? "Show Less" : "Explore All Tours"}
            </button>
          </div>
        </div>
      </section>
      <Associations />
      <Footer />
    </>
  );
};

export default NavTour;

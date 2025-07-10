import React from "react";
import { useParams } from "react-router-dom";
import TourOverview from "../components/tour-overview-page/components/TourOverview";
import Header from "../shared_components/Header";
import Footer from "../shared_components/Footer";
import { getTourData } from "../components/tour-overview-page/components/data/tourData";
import { useGetDestinations } from "../services/destinationsService";

const TourOverviewPage = ({ customSliderConfig }) => {
  const { tourId } = useParams();

  const tourData = getTourData(tourId);

  const { data: destinationsResponse = [], isLoading, error } = useGetDestinations();

  const getDestinationsData = Array.isArray(destinationsResponse.data) ? destinationsResponse.data : [];

  if (isLoading) return <div>Loading destinations...</div>;
  if (error) return <div>Error loading destinations</div>;

  if (!tourData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Tour Not Found</h1>
          <p className="text-gray-600">
            The tour `{tourId}` could not be found. Please check the tour ID and try again.
          </p>
        </div>
      </div>
    );
  }

  // Filter all Nepal destinations (case-insensitive)
  const nepalDestinations = getDestinationsData.filter((dest) => dest.country?.toLowerCase() === "nepal");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Main Content */}
      <main className="py-8 px-4">
        <TourOverview tourData={tourData} sliderConfig={customSliderConfig} className="mb-12" />
      </main>

      {/* Nepal destinations container */}
      {nepalDestinations.length > 0 && (
        <section className="px-4 pb-12 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Nepal Destinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {nepalDestinations.map((dest, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow p-4">
                <h3 className="text-lg font-bold text-gray-800">{dest.packageType}</h3>
                <p className="text-sm text-gray-600 mb-3">
                  {dest.adventureType ? `Adventure: ${dest.adventureType}` : ""}
                </p>
                <p className="text-sm text-gray-600 mb-3">{dest.description ? dest.description : "No description"}</p>
                {dest.images?.length > 0 && (
                  <img
                    src={`/Images/nepal/${dest.images[0]}`}
                    alt={`${dest.packageType} - ${dest.country}`}
                    className="rounded-lg object-cover w-full h-48"
                  />
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default TourOverviewPage;

// src/pages/TourOverviewPage.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import TourOverview from '../components/tour-overview-page/components/TourOverview';
import Header from '../shared_components/Header';
import Footer from '../shared_components/Footer';
import { getTourData } from '../components/tour-overview-page/components/data/tourData';
import CountryTourCards from '../components/tour-overview-page/components/CountryTourCards';

const TourOverviewPage = ({
  customSliderConfig
}) => {
  const { tourId } = useParams();
  const tourData = getTourData(tourId);

  if (!tourData) {
    return (
        
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Tour Not Found</h1>
          <p className="text-gray-600">
            The tour "{tourId}" could not be found. Please check the tour ID and try again.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation could go here */}
      <Header />
      
      {/* Main Content */}
      <main className="py-8 px-4">
        <TourOverview 
          tourData={tourData}
          sliderConfig={customSliderConfig}
          className="mb-12"
        />
        {tourData.country && <CountryTourCards country={tourData.country} />}
      </main>

      {/* Footer could go here */}
      <Footer />
    </div>
  );
};

export default TourOverviewPage;

// Example usage in your App.jsx or routing:
export const ExampleUsage = () => {
  return (
    <div>
      {/* Nepal Tour */}
      <TourOverviewPage 
        customSliderConfig={{
          autoSlide: true,
          autoSlideInterval: 4000,
          showDots: true,
          showArrows: true
        }}
      />
      
      {/* Bhutan Tour - different configuration */}
      {/* 
      <TourOverviewPage 
        customSliderConfig={{
          autoSlide: false,
          showDots: false,
          showArrows: true
        }}
      />
      */}
    </div>
  );
};
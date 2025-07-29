import React from 'react';
import { useParams } from 'react-router-dom';
import TourOverview from '../components/tour-overview-page/components/TourOverview';
import Header from '../shared_components/Header';
import Footer from '../shared_components/Footer';
import { getMagnificentTourData } from '../components/tour-overview-page/components/data/magnificentTourData';
import ActivityTourCards from '../components/tour-overview-page/components/ActivityTourCards';

const MagnificentTourOverviewPage = ({ customSliderConfig }) => {
  const { tourId } = useParams();
  const tourData = getMagnificentTourData(tourId);

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
      <Header />
      <main className="py-8 px-4">
        <TourOverview
          tourData={tourData}
          sliderConfig={customSliderConfig}
          className="mb-12"
        />
        <ActivityTourCards categoryType={tourData.id} country={tourData.country} />
      </main>
      <Footer />
    </div>
  );
};

export default MagnificentTourOverviewPage; 
import React from 'react';
import { useParams } from 'react-router-dom';
import TourOverview from '../components/tour-overview-page/components/TourOverview';
import Header from '../shared_components/Header';
import Footer from '../shared_components/Footer';
import { getTrekkingData } from '../components/tour-overview-page/components/data/trekkingData';

const TrekkingOverviewPage = ({ customSliderConfig }) => {
  const { trekkingId } = useParams();
  const trekkingData = getTrekkingData(trekkingId);

  if (!trekkingData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Trekking Destination Not Found</h1>
          <p className="text-gray-600">
            The trekking destination "{trekkingId}" could not be found. Please check the destination ID and try again.
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
          tourData={trekkingData}
          sliderConfig={customSliderConfig}
          className="mb-12"
        />
      </main>
      <Footer />
    </div>
  );
};

export default TrekkingOverviewPage; 
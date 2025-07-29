import React from 'react';
import { useParams } from 'react-router-dom';
import TourOverview from '../components/tour-overview-page/components/TourOverview';
import Header from '../shared_components/Header';
import Footer from '../shared_components/Footer';
import { getActivityData } from '../components/tour-overview-page/components/data/activityData';
import ActivityTourCards from '../components/tour-overview-page/components/ActivityTourCards';

const ActivityOverviewPage = ({ customSliderConfig }) => {
  const { activityId } = useParams();
  const activityData = getActivityData(activityId);

  if (!activityData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Activity Not Found</h1>
          <p className="text-gray-600">
            The activity "{activityId}" could not be found. Please check the activity ID and try again.
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
          tourData={activityData}
          sliderConfig={customSliderConfig}
          className="mb-12"
        />
        <ActivityTourCards categoryType={activityData.id} country={activityData.country} />
      </main>
      <Footer />
    </div>
  );
};

export default ActivityOverviewPage; 
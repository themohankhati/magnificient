// src/components/TourOverview.jsx

import React from 'react';
import ImageSlider from './ImageSlider';

const TourOverview = ({
  tourData,
  sliderConfig = {},
  className = ''
}) => {
  const {
    autoSlide = true,
    autoSlideInterval = 5000,
    showDots = true,
    showArrows = true
  } = sliderConfig;

  if (!tourData) {
    return (
      <div className="w-full max-w-4xl mx-auto p-4">
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">Tour data not available</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      {/* Image Slider Section */}
      <div className="mb-8">
        <ImageSlider
          images={tourData.images}
          alt={tourData.title}
          autoSlide={autoSlide}
          autoSlideInterval={autoSlideInterval}
          showDots={showDots}
          showArrows={showArrows}
          className="rounded-lg shadow-lg overflow-hidden"
        />
      </div>

      {/* Content Section */}
      <div className="px-4 md:px-6">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
          {tourData.title}
        </h1>

        {/* Description */}
        <div className="prose prose-lg max-w-none">
          {tourData.description.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed mb-4 text-justify">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div className="mb-4 sm:mb-0">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                {tourData.country}
              </span>
            </div>
            
            <div className="text-sm text-gray-500">
              Tour ID: {tourData.id}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourOverview;
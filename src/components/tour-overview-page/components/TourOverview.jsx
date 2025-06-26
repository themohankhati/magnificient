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

        {/* Trekking-specific info */}
        {tourData.trips && (
          <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">{tourData.trips}</div>
                <div className="text-sm text-gray-600">Available Trips</div>
              </div>
              {tourData.bestTime && (
                <div>
                  <div className="text-lg font-semibold text-green-600">{tourData.bestTime}</div>
                  <div className="text-sm text-gray-600">Best Time to Visit</div>
                </div>
              )}
              {tourData.difficulty && (
                <div>
                  <div className="text-lg font-semibold text-orange-600">{tourData.difficulty}</div>
                  <div className="text-sm text-gray-600">Difficulty Level</div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Description */}
        <div className="prose prose-lg max-w-none">
          {tourData.description.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed mb-4 text-justify">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Highlights Section for Trekking */}
        {tourData.highlights && (
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Trekking Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {tourData.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Additional Info */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div className="mb-4 sm:mb-0">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                {tourData.country}
              </span>
            </div>
            
            <div className="text-sm text-gray-500">
              {tourData.trips ? 'Trekking' : 'Tour'} ID: {tourData.id}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourOverview;
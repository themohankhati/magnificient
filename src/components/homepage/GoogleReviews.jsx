import React from "react";

const reviews = [
  {
    initial: "S",
    name: "Shaurya Badana",
    rating: 5,
    text: "Exceptional service! Our experience with Magnificent Travels and Tours surpassed all expectations. The guides were knowledgeable and the scenery was breathtaking. Highly recommend!",
  },
  {
    initial: "G",
    name: "Gideon Buys",
    rating: 4,
    text: "We had a fantastic time with the team from Magnificent Travels and Tours. Our guide, Milan, and his crew made a very challenging trip very enjoyable. Would definitely go again!",
  },
  {
    initial: "R",
    name: "Rod McGregor",
    rating: 5,
    text: "Wonderful experience with experienced guide Madan and his team of porters. They took great care of us and ensured we had a memorable trip.",
  },
  {
    initial: "A",
    name: "Alice Johnson",
    rating: 4,
    text: "The trip was well organized and the team was very professional. Some minor issues but overall a great experience.",
  },
  {
    initial: "M",
    name: "Michael Smith",
    rating: 5,
    text: "Amazing experience! Highly recommend Magnificent Travels and Tours for their excellent service and attention to detail.",
  },
  {
    initial: "J",
    name: "Jessica Lee",
    rating: 4,
    text: "A memorable trip with great guides and beautiful scenery. Would love to come back again.",
  },
];

const GoogleReviews = () => {
  return (
    <section className="text-center py-12">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex items-center justify-center gap-5 mb-10">
          <img src="Homepage-pictures/google-logo.png" alt="Google Logo" className="w-10 h-auto" />
          <h2 className="text-3xl font-bold">Google Reviews</h2>
        </div>
        <div className="flex overflow-x-auto rounded-xl space-x-13 p-2 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-900 h-64">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex-none w-80 shadow-md bg-white transform hover:scale-105 transition-transform"
            >
              <div className="flex items-center gap-3 p-4 bg-gray-200">
                <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold">
                  {review.initial}
                </div>
                <div className="font-medium">{review.name}</div>
                <div className="text-yellow-500">{"★".repeat(review.rating)}</div>
              </div>
              <div className="p-4 text-gray-700 text-sm h-24">{review.text}</div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <a
            href="#read-all-reviews"
            className="bg-green-600 text-white text-lg px-6 py-2 rounded-md hover:bg-green-800 transition mb-40"
          >
            Read All Our Reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;

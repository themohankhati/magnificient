export const magnificentToursData = [
  {
    id: "luxury-tour",
    img: "luxury-tour.jpeg",
    title: "Our Special Day Tour",
    count: "9 tours",
    description: `Indulge in the finest experiences with our Luxury Tours. Enjoy premium accommodations, private transfers, gourmet dining, and exclusive access to top attractions. Perfect for travelers who seek comfort, elegance, and personalized service throughout their journey.`,
    images: [
      "/Images/luxury-tour.jpeg",
      "/Images/Top destination-Nepal.jpg"
    ],
    country: "Nepal"
  },
  {
    id: "helicopter-tour",
    img: "helicopter-tour.jpg",
    title: "Helicopter Tours",
    count: "10 tours",
    description: `Experience Nepal from a breathtaking perspective with our Helicopter Tours. Fly over the majestic Himalayas, including Mount Everest, and witness stunning landscapes, remote monasteries, and hidden valleys from the sky.`,
    images: [
      "/Images/tour/Helicopter1.jpg",
      "/Images/tour/Helicopter2.jpg",
      "/Images/tour/Helicopter3.jpg",
      "/Images/tour/Helicopter4.jpg",
      
    ],
    country: "Nepal"
  },
  {
    id: "nature-wildlife-tour",
    img: "nature-wildlife.jpg",
    title: "Nature and Wildlife Tours",
    count: "10 tours",
    description: `Discover Nepal's rich biodiversity with our Nature and Wildlife Tours. Explore national parks, spot rare animals like rhinos and tigers, and immerse yourself in the beauty of untouched forests and wetlands.`,
    images: [
      "/Images/activities/jungle2.jpg",
      "/Images/jungle.jpg",
      "/Images/chitwan.jpg",
      "/Images/activities/jungle3.jpg",
      "/Images/activities/jungle1.jpg"
    ],
    country: "Nepal"
  },
  {
    id: "cultural-historical-tour",
    img: "cultural-historical.jpg",
    title: "Cultural & Historical Tours",
    count: "5 tours",
    description: `Step back in time with our Cultural & Historical Tours. Visit UNESCO World Heritage Sites, ancient temples, royal palaces, and vibrant local markets to experience the rich heritage and traditions of Nepal.`,
    images: [
      "/Images/tour/cultural1.png",
      "/Images/tour/cultural2.png",
      "/Images/tour/cultural3.png",
      "/Images/tour/cultural4.png",
      
    ],
    country: "Nepal"
  },
  {
    id: "India Tours",
    img: "religious-spiritual.jpg",
    title: "India Tours",
    count: "3 tours",
    description: `India is a vibrant tapestry of color, culture, and contrast — a land where ancient traditions blend seamlessly with modern life. From the towering snow-clad peaks of the Himalayas in the north to the palm-fringed beaches and tranquil backwaters of the south, India stretches across a landscape as diverse as its people. Every region tells its own story, shaped by centuries of history, myth, art, and spirit.

Travelers are invited to walk through time as they explore magnificent forts, royal palaces, and sacred temples that echo with the legacies of kings and sages. Whether you're standing before the marble wonder of the Taj Mahal, wandering through the pink-hued streets of Jaipur, or watching the Ganga Aarti light up the riverbanks in Varanasi, India captivates with its soul-stirring beauty. The country is also a spiritual sanctuary, offering seekers the chance to meditate in Himalayan monasteries, join yoga retreats in Rishikesh, or simply find stillness in a land deeply rooted in faith.

Nature reveals itself in breathtaking ways — from desert dunes and dense jungles to emerald tea gardens and lush river valleys. Adventure awaits in every corner, whether you're trekking in Ladakh, cruising the backwaters of Kerala, or spotting Bengal tigers in the wild. Food, too, becomes a journey in India, where every region serves up a symphony of spices and flavors — from sizzling street snacks to elaborate feasts passed down through generations.

What truly sets India apart is the warmth of its people.`,
    images: [
      '/Images/india/india1.jpg',
        '/Images/india/india2.jpg',
        '/Images/india/india3.jpg',
        '/Images/india/india4.jpg',
        '/Images/india/india5.jpg',
     
    ],
    country: "India"
  },
  {
    id: "motorbike-tour",
    img: "motorbike-tour.jpg",
    title: "MotorBike Tours",
    count: "11 tours",
    description: `Feel the thrill of adventure on two wheels with our MotorBike Tours. Ride through scenic mountain roads, remote villages, and breathtaking landscapes for an unforgettable journey across Nepal.`,
    images: [
      "/Images/tour/Motorbike1.jpg",
      "/Images/tour/Motorbike2.jpg",
      "/Images/tour/Motorbike3.jpg",
      "/Images/tour/Motorbike4.jpg",
     
    ],
    country: "Nepal"
  },
  {
    id: "cycling-tour",
    img: "cycling-tour.jpg",
    title: "Bird Watching Tours",
    count: "8 tours",
    description: `Explore Nepal at your own pace with our Cycling Tours. Pedal through picturesque valleys, terraced fields, and charming towns while enjoying the fresh air and stunning views.`,
    images: [
      "/Images/tour/Bird1.JPG",
      "/Images/tour/Bird2.jpg",
      "/Images/tour/Bird3.jpg",
      "/Images/tour/Bird4.jpg",
      
    ],
    country: "Nepal"
  },
  {
    id: "sightseeing-tour",
    img: "sightseeing-tour.jpg",
    title: "Photography Tours",
    count: "6 tours",
    description: `Discover the highlights of Nepal with our Sightseeing Tours. Visit iconic landmarks, bustling cities, and scenic viewpoints, all guided by local experts who share fascinating stories and insights.`,
    images: [
      "/Images/tour/Photography1.jpg",
      "/Images/tour/Photography2.jpg",
      "/Images/tour/Photography3.jpg",
      "/Images/tour/Photography4.jpg",
      
    ],
    country: "Nepal"
  },
  {
    id: "day-sightseeing-tour",
    img: "day-sightseeing-tour.jpg",
    title: "Day Sightseeing Tours",
    count: "4 tours",
    description: `Make the most of your time with our Day Sightseeing Tours. Perfect for travelers with a tight schedule, these tours cover the must-see attractions and hidden gems in a single day.`,
    images: [
      "/Images/tour/Sightseeing1.jpeg",
      "/Images/tour/Sightseeing2.jpg",
      "/Images/tour/Sightseeing3.jpg",
      "/Images/tour/Sightseeing4.jpg",
    ],
    country: "Nepal"
  }
];

export const getMagnificentTourData = (tourId) => {
  return magnificentToursData.find((tour) => tour.id === tourId) || null;
};

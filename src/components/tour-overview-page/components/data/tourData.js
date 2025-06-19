// src/data/tourData.js

export const tourConfigurations = {
    nepal: {
      id: 'nepal',
      title: 'Nepal: Land of Wonders!',
      description: `Nepal, nestled in the heart of the Himalayas, is a land where ancient traditions meet breathtaking natural beauty. This enchanting country offers an unparalleled experience for adventurers and culture enthusiasts alike.
  
  From the towering peaks of Mount Everest to the serene lakes of Pokhara, Nepal's diverse landscapes provide endless opportunities for exploration. Trek through rhododendron forests, witness sunrise over snow-capped mountains, and discover hidden monasteries perched on clifftops.
  
  The rich cultural heritage of Nepal is evident in its UNESCO World Heritage Sites, including the medieval cities of Kathmandu, Bhaktapur, and Patan. These ancient squares showcase intricate wood carvings, golden temples, and centuries-old architecture that tells the story of Nepal's royal past.
  
  Experience the warmth of Nepali hospitality as you stay in traditional tea houses along mountain trails, taste authentic dal bhat, and participate in colorful festivals. Whether you're seeking spiritual enlightenment in Buddhist monasteries or adrenaline-pumping adventures in the world's highest mountains, Nepal offers a transformative journey that will leave lasting memories.
  
  Join us for an unforgettable expedition through this magical kingdom, where every step reveals new wonders and every moment creates stories worth sharing.`,
      images: [
        '/Images/nepal/nepal1.jpg',
        '/Images/nepal/nepal2.jpg',
        '/Images/nepal/nepal3.jpg',
        '/Images/nepal/nepal4.jpg',
        '/Images/nepal/nepal5.jpg'
      ],
      country: 'Nepal'
    },
    
    // Example for other countries - easily extensible
    bhutan: {
      id: 'bhutan',
      title: 'Bhutan: The Last Shangri-La!',
      description: `Discover the mystical kingdom of Bhutan, where Gross National Happiness takes precedence over GDP. This carbon-negative country offers pristine forests, ancient dzongs, and a culture untouched by time.
  
  Experience the magic of this Himalayan kingdom through its colorful festivals, traditional architecture, and warm-hearted people who have preserved their unique way of life for centuries.`,
      images: [
        '/Images/bhutan/bhutan1.jpg',
        '/Images/bhutan/bhutan2.jpg',
        '/Images/bhutan/bhutan3.jpg',
        '/Images/bhutan/bhutan4.jpg',
        '/Images/bhutan/bhutan5.jpg'
      ],
      country: 'Bhutan'
    },
    india: {
      id: 'india',
      title: 'India: Land of Diversity!',
      description: `India is a vibrant tapestry of cultures, landscapes, and traditions. From the snow-capped Himalayas in the north to the sun-kissed beaches of the south, India offers a journey through time and diversity.

Explore ancient temples, bustling markets, and majestic palaces. Savor the flavors of Indian cuisine and experience the warmth of its people. Whether you seek spiritual enlightenment, adventure, or cultural immersion, India welcomes you with open arms.`,
      images: [
        '/Images/india/india1.jpg',
        '/Images/india/india2.jpg',
        '/Images/india/india3.jpg',
        '/Images/india/india4.jpg',
        '/Images/india/india5.jpg'
      ],
      country: 'India'
    },
    tibet: {
      id: 'tibet',
      title: 'Tibet: Roof of the World!',
      description: `Tibet, the mystical land on the roof of the world, captivates travelers with its breathtaking plateaus, ancient monasteries, and spiritual heritage.

Journey across vast landscapes, visit the iconic Potala Palace, and immerse yourself in Tibetan Buddhism. Tibet offers a unique blend of adventure, serenity, and cultural richness.`,
      images: [
        '/Images/tibet/tibet1.jpg',
        '/Images/tibet/tibet2.jpg',
        '/Images/tibet/tibet3.jpg',
        '/Images/tibet/tibet4.jpg',
        '/Images/tibet/tibet5.jpg'
        
      ],
      country: 'Tibet'
    }
  };
  
  export const getTourData = (tourId) => {
    return tourConfigurations[tourId] || null;
  };
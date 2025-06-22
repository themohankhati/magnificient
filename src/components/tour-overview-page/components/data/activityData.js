export const activitiesData = [
  {
    id: "jungle-safari",
    title: "Jungle Safari",
    image: "jungle.jpg",
    places: 5,
    description: `Experience the thrill of exploring Nepal's lush jungles and encountering exotic wildlife. Our Jungle Safari tours take you deep into the heart of national parks, where you can spot rhinos, tigers, elephants, and a variety of bird species. Enjoy jeep safaris, canoe rides, and guided nature walks for an unforgettable adventure in the wild.`,
    images: [
      "/Images/jungle.jpg",
      "/Images/activities/jungle1.jpg",
      "/Images/chitwan.jpg",
      "/Images/activities/jungle2.jpg",
      "/Images/activities/jungle3.jpg"

    ],
    country: "Nepal"
  },
  {
    id: "paragliding",
    title: "Paragliding",
    image: "paragliding.jpg",
    places: 5,
    description: `Soar above the breathtaking landscapes of Nepal with our paragliding adventures. Whether you're a beginner or an experienced flyer, enjoy panoramic views of mountains, lakes, and valleys as you glide through the sky. Pokhara is a world-renowned destination for paragliding, offering safe and exhilarating flights.`,
    images: [
      "/Images/paragliding.jpg",
      "/Images/activities/paragliding1.jpg",
      "/Images/activities/paragliding2.jpg",
      "/Images/activities/paragliding3.jpg"
    ],
    country: "Nepal"
  },
  {
    id: "rafting",
    title: "Rafting",
    image: "rafting.jpg",
    places: 5,
    description: `Navigate the thrilling rapids of Nepal's rivers with our white-water rafting experiences. From gentle floats to adrenaline-pumping rapids, our rafting tours cater to all adventure levels. Enjoy stunning river valleys, lush forests, and the excitement of conquering the waves with expert guides.`,
    images: [
      "/Images/rafting.jpg",
      "/Images/activities/rafting2.jpg",
      "/Images/activities/rafting1.jpg"
    ],
    country: "Nepal"
  },
  {
    id: "bungee-jumping",
    title: "Bungee Jumping",
    image: "Bungee.jpg",
    places: 5,
    description: `Take the leap of a lifetime with bungee jumping in Nepal! Plunge from one of the world's highest suspension bridges into a scenic river gorge. This activity is perfect for thrill-seekers looking for an unforgettable rush and a unique way to experience Nepal's dramatic landscapes.`,
    images: [
      "/Images/Bungee.jpg",
      "/Images/activities/bungee1.jpg",
      "/Images/activities/bungee2.jpeg",
    ],
    country: "Nepal"
  },
  {
    id: "climbing-expedition",
    title: "Peak Climbing",
    image: "climbingExpedition.jpg",
    places: 5,
    description: `Challenge yourself with a climbing or mountaineering expedition in the Himalayas. Our expert-led trips cater to all skill levels, from beginners to seasoned climbers. Scale iconic peaks, learn essential techniques, and immerse yourself in the awe-inspiring beauty of the world's highest mountains.`,
    images: [
      
     "/Images/activities/expedition1.jpg",
      "/Images/activities/expedition2.jpg",
      "/Images/activities/expedition3.jpg",
      "/Images/climbingExpedition.jpg"
    ],
    country: "Nepal"
  },
  {
    id: "mountain-flight",
    title: "Mountain Flight",
    image: "MountainFlight.jpg",
    places: 5,
    description: `Witness the majesty of the Himalayas from the sky with a scenic mountain flight. Enjoy breathtaking aerial views of Mount Everest and other towering peaks, all from the comfort of a window seat. This experience is perfect for those who want to see the mountains up close without trekking.`,
    images: [
      "/Images/MountainFlight.jpg",
      "/Images/activities/expedition1.jpg",
      "/Images/activities/flight1.jpg",
      "/Images/activities/expedition3.jpg"

    ],
    country: "Nepal"
  }
];

export const getActivityData = (activityId) => {
  return activitiesData.find((activity) => activity.id === activityId) || null;
};

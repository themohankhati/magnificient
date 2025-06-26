export const trekkingData = [
  {
    id: "nepal",
    title: "Nepal Trekking Adventures",
    image: "tour/Trekking1.jpg",
    trips: 36,
    description: `Nepal, the crown jewel of the Himalayas, offers some of the most spectacular trekking experiences in the world. With eight of the world's fourteen highest peaks, including the majestic Mount Everest, Nepal is a trekker's paradise that combines breathtaking mountain scenery with rich cultural heritage.

The diverse trekking routes in Nepal cater to all levels of experience, from gentle walks through lush valleys to challenging expeditions to high-altitude passes. The Annapurna Circuit, often called the "Great Himalayan Trail," winds through diverse landscapes from subtropical forests to arid high-altitude deserts, offering panoramic views of the Annapurna massif and surrounding peaks.

Everest Base Camp trek takes you to the foot of the world's highest mountain, where you'll walk in the footsteps of legendary mountaineers while experiencing the unique culture of the Sherpa people. The trek passes through picturesque villages, ancient monasteries, and offers stunning views of some of the world's most iconic peaks.

Langtang Valley, known as the "Valley of Glaciers," provides a more intimate trekking experience with fewer crowds and authentic local culture. The region was affected by the 2015 earthquake but has been rebuilt with the resilience of the local communities, making it a meaningful destination for trekkers who want to support local recovery efforts.

Upper Mustang, once a forbidden kingdom, offers a journey back in time through ancient Tibetan-influenced culture, dramatic landscapes, and some of the most remote and pristine trekking routes in Nepal. The region's unique geography and cultural heritage make it one of the most fascinating trekking destinations in the Himalayas.

Each trekking route in Nepal is carefully designed to provide not just physical challenges but also cultural immersion, allowing trekkers to experience the warmth of Nepali hospitality, taste authentic local cuisine, and learn about the diverse ethnic groups that call these mountains home.`,
    images: [
      "/Images/tour/Trekking1.jpg",
      "/Images/tour/Trekking2.jpg",
      "/Images/tour/Trekking3.jpg",
      "/Images/tour/Trekking4.jpg"
    ],
    country: "Nepal",
    bestTime: "March-May, September-November",
    difficulty: "Easy to Challenging",
    highlights: [
      "Mount Everest Base Camp",
      "Annapurna Circuit",
      "Langtang Valley",
      "Upper Mustang",
      "Poon Hill",
      "Gokyo Lakes"
    ]
  },
  {
    id: "bhutan",
    title: "Bhutan Trekking Expeditions",
    image: "tour/Trekking2.jpg",
    trips: 16,
    description: `Bhutan, the Land of the Thunder Dragon, offers a mystical trekking experience that combines pristine Himalayan landscapes with ancient Buddhist culture. Unlike other Himalayan destinations, Bhutan has carefully preserved its traditions and environment, making it one of the most authentic and unspoiled trekking destinations in the world.

The trekking routes in Bhutan traverse through some of the most remote and beautiful landscapes in the Himalayas, from lush subtropical forests to high-altitude alpine meadows. The Jomolhari Trek, one of Bhutan's most popular routes, takes you to the base of Mount Jomolhari (7,326m), offering spectacular views of this sacred mountain and the surrounding peaks.

The Druk Path Trek connects the ancient capital of Paro with the modern capital of Thimphu, passing through pristine forests, crystal-clear lakes, and high mountain passes. This trek offers a perfect blend of natural beauty and cultural insights, with opportunities to visit ancient monasteries and experience traditional Bhutanese hospitality.

The Snowman Trek, considered one of the most challenging treks in the world, traverses the remote Lunana region and crosses several high passes over 5,000 meters. This epic journey takes you through some of the most isolated and beautiful valleys in Bhutan, where you'll encounter nomadic yak herders and experience a way of life that has remained unchanged for centuries.

Bhutan's unique approach to tourism, with its "High Value, Low Impact" policy, ensures that trekking experiences are intimate and sustainable. The government limits the number of visitors, ensuring that trails remain uncrowded and the environment is preserved for future generations.

Every trek in Bhutan is accompanied by experienced local guides who share their knowledge of the local culture, history, and environment. The treks also include stays in traditional farmhouses and visits to ancient monasteries, providing deep insights into Bhutan's rich spiritual heritage.`,
    images: [
      "/Images/tour/Trekking2.jpg",
      "/Images/bhutan/bhutan1.jpg",
      "/Images/bhutan/bhutan2.jpg",
      "/Images/bhutan/bhutan3.jpg"
    ],
    country: "Bhutan",
    bestTime: "March-May, September-November",
    difficulty: "Moderate to Challenging",
    highlights: [
      "Jomolhari Trek",
      "Druk Path Trek",
      "Snowman Trek",
      "Bumthang Cultural Trek",
      "Gangtey Valley",
      "Tiger's Nest Monastery"
    ]
  },
  {
    id: "tibet",
    title: "Tibet Trekking Journeys",
    image: "tour/Trekking3.jpg",
    trips: 10,
    description: `Tibet, the Roof of the World, offers a unique trekking experience that combines the highest mountains on Earth with one of the most fascinating cultures in the world. Trekking in Tibet is not just about physical challenge; it's a spiritual journey through a land where Buddhism has shaped every aspect of life for over a thousand years.

The trekking routes in Tibet traverse through the vast Tibetan Plateau, the highest plateau in the world, offering views of some of the most spectacular mountain ranges including the Himalayas, Karakoram, and Kunlun ranges. The Mount Kailash Kora, one of the most sacred pilgrimages in the world, takes you around the holy Mount Kailash, revered by Buddhists, Hindus, Jains, and Bonpos.

The Everest North Base Camp trek in Tibet offers a different perspective of the world's highest peak compared to the Nepali side. The Tibetan approach provides more dramatic views of the mountain and crosses through the Rongbuk Valley, home to the world's highest monastery. The trek also includes visits to ancient monasteries and encounters with Tibetan nomads.

The Ganden to Samye trek is one of Tibet's most popular pilgrimages, connecting two of the most important monasteries in Tibetan Buddhism. This trek crosses high passes, traverses beautiful valleys, and provides deep insights into Tibetan culture and spirituality. The route is dotted with ancient monasteries, prayer flags, and mani stones, creating a truly spiritual atmosphere.

Trekking in Tibet requires special permits and must be arranged through authorized travel agencies, but this controlled access helps preserve the region's unique culture and environment. The high altitude of Tibet (most trekking areas are above 4,000 meters) makes acclimatization crucial, but the effort is rewarded with some of the most spectacular mountain views in the world.

The cultural aspect of trekking in Tibet is as important as the physical challenge. Trekkers have the opportunity to visit ancient monasteries, interact with Tibetan nomads, and experience traditional Tibetan hospitality. The region's unique architecture, colorful prayer flags, and the sound of prayer wheels create an atmosphere that is both mystical and deeply moving.`,
    images: [
      "/Images/tour/Trekking3.jpg",
      "/Images/tibet/tibet1.jpg",
      "/Images/tibet/tibet2.jpg",
      "/Images/tibet/tibet3.jpg"
    ],
    country: "Tibet",
    bestTime: "May-October",
    difficulty: "Challenging to Expert",
    highlights: [
      "Mount Kailash Kora",
      "Everest North Base Camp",
      "Ganden to Samye Trek",
      "Nam Tso Lake",
      "Yamdrok Lake",
      "Potala Palace"
    ]
  }
];

export const getTrekkingData = (trekkingId) => {
  return trekkingData.find((trekking) => trekking.id === trekkingId) || null;
};

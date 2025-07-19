import React from 'react';
import Header from "../shared_components/Header";
import Footer from "../shared_components/Footer";
import Associations from "../shared_components/Associations";
import Newsletter from "../shared_components/Newsletter";
import ImageSlider from "../components/tour-overview-page/components/ImageSlider";
import { motion } from 'framer-motion';

const companyImages = [
  
 
  "/Images/company/company3.jpeg",
  "/Images/company/company10.jpeg",
 
  "/Images/company/company14.jpeg",
  "/Images/company/company15.jpeg",
  "/Images/company/company16.jpeg",
  "/Images/company/company1.jpeg",
  "/Images/company/company2.jpeg",
 
  "/Images/company/company18.jpeg",
  "/Images/company/company19.jpeg",
  "/Images/company/company20.jpeg",
  "/Images/company/21.jpeg",
  "/Images/company/22.jpeg",
  "/Images/company/23.jpeg",
  "/Images/company/company13.jpeg",
  "/Images/company/24.jpeg",
  "/Images/company/25.jpeg",
  "/Images/company/company17.jpeg",
  "/Images/company/26.jpeg",
  "/Images/company/27.jpeg",
  "/Images/company/28.jpeg",
  "/Images/company/29.jpeg",
  "/Images/company/30.jpeg",
  "/Images/company/31.jpeg",
  "/Images/company/32.jpeg",
  "/Images/company/33.jpeg",
  "/Images/company/34.jpeg",
  "/Images/company/35.jpeg",
  "/Images/company/shirt.jpeg"
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};
const headingVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};
const galleryStagger = {
  visible: { transition: { staggerChildren: 0.12 } }
};
const galleryItem = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } }
};

const AboutUs = () => {
  // Pick images for each section
  const heroImages = companyImages.slice(0, 6);
  const galleryImages = companyImages.slice(6, 14);
  const communityImages = companyImages.slice(14, 18);

  // Debug: log heroImages
  console.log('AboutUs heroImages:', heroImages);

  return (
    <div className="bg-white text-gray-800">
      <Header />
      {/* Hero Section: Animated Slideshow */}
      <div className="relative w-full h-[400px] flex items-center justify-center bg-gray-100">
        <ImageSlider
          images={heroImages}
          alt="Magnificent Company Slideshow"
          autoSlide={true}
          autoSlideInterval={3500}
          showDots={true}
          showArrows={true}
          className="h-[400px]"
        />
      </div>
      
      {/* About The Company Section */}
      <motion.div
        className="mb-8 mt-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-gray-900 mb-4"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
          >
            About The <span className="text-blue-900">Company</span>
          </motion.h2>
          <p className="text-base leading-relaxed mb-4">
            Established in 1995, Magnificent Travels & Tours (P) Ltd. is a premier travel agency in Nepal, specializing in personalized travel experiences. With over 30 years of dedicated service, we have built a reputation for excellence, ensuring that each journey is seamless, enjoyable, and uniquely tailored to our customers' preferences.
          </p>
          <p className="text-base mb-4">
            At Magnificent Travels & Tours, we take pride in understanding our clients' interests, tastes, and needs, crafting bespoke holiday packages that offer unforgettable experiences. Our approach focuses on customer relationships, fostering travel loyalty through high-quality, flexible, and friendly services. We prioritize safety, trust, and great value, ensuring every traveler receives the highest standard of service.
          </p>
        </div>
      </motion.div>

      {/* Discover Nepal Section */}
      <motion.div
        className="mb-8"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-xl font-semibold mb-2"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
          >
            Discover Nepal with Us
          </motion.h2>
          <p className="text-base mb-4">
            Nepal, a land of breathtaking landscapes, rich cultural heritage, and diverse wildlife, has captivated travelers from around the world for decades. From its majestic Himalayan peaks to its vibrant festivals, stunning architecture, and lush forests, Nepal offers an unparalleled adventure for every type of traveler. Whether you seek spiritual enlightenment, thrilling outdoor activities, or a deep dive into Nepalese culture, we provide customized experiences to meet your desires.
          </p>
        </div>
      </motion.div>

      {/* Our Offerings Section */}
      <motion.div
        className="mb-8"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-xl font-semibold mb-2"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
          >
            Our Offerings
          </motion.h2>
          <ul className="list-disc list-inside text-base">
            <li className="mb-2">Trekking & Peak Climbing - Explore the untouched trails of the Nepali Himalayas, renowned for their natural beauty and cultural significance.</li>
            <li className="mb-2">Mountain Biking & Motorbiking - Ride through scenic landscapes, from high-altitude mountain passes to lush valleys.</li>
            <li className="mb-2">Rafting & Adventure Sports - Experience adrenaline-pumping activities like white-water rafting, bungee jumping, and paragliding.</li>
            <li className="mb-2">Wildlife Safari - Choose Nepal's diverse wildlife in the subtropical forests of the Terai, encountering rhinoceroses, elephants, and tigers.</li>
            <li className="mb-2">Helicopter Tours - Enjoy breathtaking aerial views of Nepal's iconic landscapes, including Everest and Annapurna.</li>
            <li className="mb-2">Sightseeing & Cultural Tours - Visit ancient temples, UNESCO World Heritage Sites, and immerse yourself in Nepal's rich history and traditions.</li>
          </ul>
        </div>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div
        className="mb-8"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-xl font-semibold mb-2"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
          >
            Why Choose Us?
          </motion.h2>
          <p className="text-base mb-4">
            Each of our holiday packages is meticulously crafted to cater to travelers of all ages, groups, families, and solo adventurers. Our team of experienced specialists possesses in-depth knowledge of Nepal's landscapes, cultures, and history, ensuring a journey filled with adventure and discovery. With a commitment to excellence, safety, and personalized service, we strive to create lifelong memories for every traveler.
          </p>
          <p className="text-base mb-8">
            At Magnificent Travels & Tours, we believe in transforming journeys into extraordinary experiences. Let us guide you through Nepal's wonders and create the perfect adventure tailored just for you.
          </p>
        </div>
      </motion.div>

      {/* Gallery Section */}
      <motion.div
        className="w-full bg-gray-50 py-8"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-gray-900 mt-10 mb-2"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
          >
            A Glimpse Into <span className="text-blue-900">Our Company</span>
          </motion.h2>
          <p className="text-base text-gray-700 mt-1 mb-8">
            A small photo gallery showcasing our journey, our company, and our team.
          </p>
          {/* Image Gallery Grid with fade-in animation */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={galleryStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {galleryImages.map((src, index) => (
              <motion.div
                key={index}
                className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden group"
                variants={galleryItem}
              >
                <img
                  src={src}
                  alt={`Company Gallery ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg transform transition duration-500 group-hover:scale-105 group-hover:opacity-90 group-hover:shadow-xl"
                  style={{ animation: 'fadeIn 1s' }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Community Section */}
      <motion.div
        className="container mx-auto px-4"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="text-3xl font-bold text-gray-900 mt-20 mb-4"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
        >
          We Give It Back To <span className="text-blue-900">The Community</span>
        </motion.h2>
        <p className="text-lg mb-4">
          At Magnificent Travels, we believe in making a meaningful difference beyond travel. As part of our corporate social responsibility, we are dedicated to giving back to the communities we serve.
        </p>
        <p className="text-base mb-8">
          Our efforts focus on three key areas: education, public health, and the preservation of art and culture. We support schools to enhance learning opportunities, contribute to public health initiatives to promote well-being, and work to preserve the rich heritage of art and culture for future generations. Through these initiatives, we strive to create a lasting positive impact on society.
        </p>
        <motion.div
          className="flex overflow-x-auto space-x-9 mb-10"
          variants={galleryStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {communityImages.map((src, idx) => (
            <motion.div
              key={idx}
              className="flex-shrink-0 w-64 h-64 bg-gray-200 rounded-lg overflow-hidden group"
              variants={galleryItem}
            >
              <img
                src={src}
                alt={`Community Photo ${idx + 1}`}
                className="w-full h-full object-cover rounded-lg transform transition duration-500 group-hover:scale-105 group-hover:opacity-90 group-hover:shadow-xl"
                style={{ animation: 'fadeIn 1s' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      
        <Associations />
      <Newsletter />
      <Footer />
      </div>
      
   
  );
};

export default AboutUs;
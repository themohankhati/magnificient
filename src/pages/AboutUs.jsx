import React from 'react';
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "../shared_components/Header";
import Footer from "../shared_components/Footer";
import Associations from "../shared_components/Associations";
import NewsLetter from "../shared_components/Newsletter";

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-blue-100 h-[400px] text-center py-40">
        <h1 className="text-4xl font-bold">About the company</h1>
        <p className="text-sm text-gray-600">MAGNIFICENT COMPANY AND PEOPLE PICTURES SLIDESHOW</p>
      </div>
      
      
        
        
        <div className="mb-8 mt-10">
        <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">About The <span className="text-blue-900">Company</span></h2>
        <p className="text-base leading-relaxed mb-4">
            Established in 1995, Magnificent Travels & Tours (P) Ltd. is a premier travel agency in Nepal, specializing in personalized travel experiences. With over 30 years of dedicated service, we have built a reputation for excellence, ensuring that each journey is seamless, enjoyable, and uniquely tailored to our customers' preferences.
          </p>
          <p className="text-base mb-4">
            At Magnificent Travels & Tours, we take pride in understanding our clients' interests, tastes, and needs, crafting bespoke holiday packages that offer unforgettable experiences. Our approach focuses on customer relationships, fostering travel loyalty through high-quality, flexible, and friendly services. We prioritize safety, trust, and great value, ensuring every traveler receives the highest standard of service.
          </p>
        </div>
        </div>

        <div className="mb-8">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-semibold mb-2">Discover Nepal with Us</h2>
          <p className="text-base mb-4">
            Nepal, a land of breathtaking landscapes, rich cultural heritage, and diverse wildlife, has captivated travelers from around the world for decades. From its majestic Himalayan peaks to its vibrant festivals, stunning architecture, and lush forests, Nepal offers an unparalleled adventure for every type of traveler. Whether you seek spiritual enlightenment, thrilling outdoor activities, or a deep dive into Nepalese culture, we provide customized experiences to meet your desires.
          </p>
        </div>
        </div>


        <div className="mb-8">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-semibold mb-2">Our Offerings</h2>
          <ul className="list-disc list-inside text-base">
            <li className="mb-2">Trekking & Peak Climbing - Explore the untouched trails of the Nepali Himalayas, renowned for their natural beauty and cultural significance.</li>
            <li className="mb-2">Mountain Biking & Motorbiking - Ride through scenic landscapes, from high-altitude mountain passes to lush valleys.</li>
            <li className="mb-2">Rafting & Adventure Sports - Experience adrenaline-pumping activities like white-water rafting, bungee jumping, and paragliding.</li>
            <li className="mb-2">Wildlife Safari - Choose Nepal's diverse wildlife in the subtropical forests of the Terai, encountering rhinoceroses, elephants, and tigers.</li>
            <li className="mb-2">Helicopter Tours - Enjoy breathtaking aerial views of Nepal's iconic landscapes, including Everest and Annapurna.</li>
            <li className="mb-2">Sightseeing & Cultural Tours - Visit ancient temples, UNESCO World Heritage Sites, and immerse yourself in Nepal's rich history and traditions.</li>
          </ul>
        </div>
        </div>


        <div className="mb-8">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-semibold mb-2">Why Choose Us?</h2>
          <p className="text-base mb-4">
            Each of our holiday packages is meticulously crafted to cater to travelers of all ages, groups, families, and solo adventurers. Our team of experienced specialists possesses in-depth knowledge of Nepal's landscapes, cultures, and history, ensuring a journey filled with adventure and discovery. With a commitment to excellence, safety, and personalized service, we strive to create lifelong memories for every traveler.
          </p>
          <p className="text-base mb-8">
            At Magnificent Travels & Tours, we believe in transforming journeys into extraordinary experiences. Let us guide you through Nepal's wonders and create the perfect adventure tailored just for you.
          </p>
        </div>
        </div>

        <div className="w-full bg-gray-50 py-8">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-2">
      A Glimpse Into <span className="text-blue-900">Our Company</span>
    </h2>
    <p className="text-base text-gray-700 mt-1 mb-8">
      A small photo gallery showcasing our journey, our company, and our team.
    </p>

    {/* Image Gallery Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        "/images/photo1.jpg",
        "/images/photo2.jpg",
        "/images/photo3.jpg",
        "/images/photo4.jpg",
        "/images/photo5.jpg",
        "/images/photo6.jpg",
        "/images/photo7.jpg",
        "/images/photo8.jpg"
      ].map((src, index) => (
        <div key={index} className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
          <img src={src} alt={`Photo ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
        </div>
      ))}
    </div>
  </div>
</div>



<div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mt-20 mb-4">We Give It Back To <span className="text-blue-900">The Community</span></h2>
        <p className="text-lg mb-4">
          At Magnificent Travels, we believe in making a meaningful difference beyond travel. As part of our corporate social responsibility, we are dedicated to giving back to the communities we serve.
        </p>
        <p className="text-base mb-8">
          Our efforts focus on three key areas: education, public health, and the preservation of art and culture. We support schools to enhance learning opportunities, contribute to public health initiatives to promote well-being, and work to preserve the rich heritage of art and culture for future generations. Through these initiatives, we strive to create a lasting positive impact on society.
        </p>

        <div className="flex overflow-x-auto space-x-9 mb-10">
          {[1, 2, 3, 4].map((photo) => (
            <div key={photo} className="flex-shrink-0 w-64 h-64 bg-gray-200 rounded-lg">
              <img src={`/path/to/community-photo${photo}.jpg`} alt={`Community Photo ${photo}`} className="w-full h-full object-cover rounded-lg" />
            </div>
          ))}
        </div>
  </div>
      
        <Associations />
      <NewsLetter />
      <Footer />
      </div>
      
   
  );
};

export default AboutUs;
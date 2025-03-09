import React, { useState } from "react";
import Header from "../shared_components/Header";
import Footer from "../shared_components/Footer";
import Associations from "../shared_components/Associations";
import NewsLetter from "../shared_components/Newsletter";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "Authentic Local Experts",
    answer:
      "At Magnificent Travels and Tours, we believe that no one knows a destination better than the people who call it home. Our team consists of local experts who have spent years mastering the ins and outs of the regions we offer. Their firsthand knowledge ensures that you experience the true essence of each destination, from hidden gems to cultural insights that most travelers miss."
  },
  {
    question: "Commitment to Safety",
    answer:
      "Your safety is our highest priority. Our guides undergo rigorous training in first aid, emergency response, and high-altitude acclimatization. We stay updated on all local conditions, from weather patterns to road safety, and ensure every aspect of your journey is secure. Additionally, we use trusted transportation and maintain direct communication with our teams at all times, so you can explore worry-free."
  },
  {
    question: "Exceptional Value",
    answer:
      "We believe in offering world-class experiences at competitive prices. Our deep-rooted connections with local vendors and service providers allow us to pass on exclusive savings to our travelers. With flexible booking policies and transparent pricing, you receive outstanding value without hidden costs."
  },
  {
    question: "25+ Years of Experience",
    answer:
      "With over two decades in the travel industry, we have perfected the art of crafting extraordinary trips. Our expertise allows us to anticipate your needs and deliver seamless itineraries, making every trip with us stress-free and enriching.     "
  },
  {
    question: "Ecotourism and Sustainable Tourism",
    answer:
      "We are  practicing sustainable  tourism activities to reduce the carbon emissions significantly  in our tourism sector and have a great positive impact on the locals to fight against poverty and empower local indigenous communities.  We are heavily involved to enhance biodiversity, promote local culture, recommend travelers to explore the wilderness, support adventure tourism and engage to preserve natural resources of the country.We  regularly sit down together with  local stakeholders including local people, tourists, government and other  entrepreneurs to engage, encourage and educate on ecotourism to protect our wildlife, nature and rich cultural heritage. We believe in sustainable Tourism practices to create a positive impact on team members, guests, and the community through local experiences, community engagement, and eco-friendly accommodations. We offer pre-trip meetings, cultural sensitivity workshops and resource kits to guests to make sure every journey is enriching, respectful, and sustainable while understanding the local cultural norms, religious rituals, social norms, environmental considerations, colorful festivals  and important local customs. We also have facilities to interact with local communities  during the village tour and campfire to provide insights into local's life and working together to minimize waste, to understand the fragile alpine environment and to preserve the  local flora and fauna.  This ensures that interactions with the local communities are based on mutual respect and understanding, fostering positive exchanges. "
  },
  {
    question: "Ethical Excursion and Social Responsibility",
    answer:
      "We are committed to provide ethical and sustainable trekking and tours to preserve the mountain, river, glacier, jungle and heritage sites to  keep it clean and protect its unique ecosystem the most social and environmental way. All our employees are trained on how to promote ethical and sustainable trekking and tours packages, motivating guests and partners and influencing on waste management practices, energy efficiency, water reuse, and the creation of economic opportunities for local communities on trips. We also involved with local communities by creating job opportunity to local youth,  conduct various charity works and encourage local participation to involve in social causes. We follow a strict ethical code during wildlife related excursions discouraging any harm to the animals, disturbing wildlife, feeding wild animals or encroaching on their inhabitants so guests can witness and appreciate wildlife in its natural habitat.  "
  },
  {
    question: "Easy and Secure Booking",
    answer:
      "Our Easy booking system is a secure single travel solution integrating all our services including tour, trekking, adventure tourism , flights, hotels, car rental and more in one single booking. We utilize a fully secure payment gateway for convenient online payment processing and your financial data is secure. You can chat with our representatives about any questions you may have regarding the product and services we provide  for our business partners and guests across the globe including ground handling services,  overland tours, trekking and adventure activities along the logistic supports, event management, incentives retreats, events, rescue services, hotel booking, ground transfers, air ticketing, visa support, car rental  and other travel related services.Our sales team in Nepal work actively to book and promote trips making the procedure quick and convenient. ."
  },
  {
    question: "Response Time",
    answer:
      "We are committed to best customer service to ensure that you have a seamless and enjoyable experience on traveling with us . We guarantee a fast response time to your inquiries round-the-clock assisting through the remote chat support to ensure your query is resolved promptly. Whether  you are seeking information or booking your trip our sales representatives are available 24/7 to assist you. During your trip, our trip leader will be there to help you to solve your problem and a professional team is available 24/7 to assist you from the very first day to the trip's end. Our Office is open six days a week for business and in addition 24-hour customer support for inquiries and  the same day on social media inquiries to answer; however within one business day to answer emails."
  },
  {
    question: "Fully-Licensed Operator and Government Certified Guides",
    answer:
      "Magnificent Travels and Tours Pvt. Ltd. is an authorized government-licensed travel agency in Nepal science 1994. In order to create custom packages, we craft tailor made itineraries for adventure seekers, nature lovers or ornithologists  from individual to families as well as large tour groups based on their preferences. We are committed to  a safe and enjoyable holiday for you to make confident when booking a trip with us. All our tour guides are well trained, with years of experience, First Aids certified and licensed by the local government authorities. Trekking guides and expedition leaders are  educated, trained and certified by Nepal Academy of Tourism and Hospital Management (NATHM) that.                           "
  },
  {
    question: "Passion for Travel & Personalized Service",
    answer:
      "At our core, we are travelers just like you. Our team’s passion for exploration drives us to curate experiences that inspire and delight. We take the time to understand your travel aspirations, ensuring that every detail aligns with your vision of the perfect getaway."
  },
  {
    question: "Beyond Borders – Global Travel Experiences",
    answer:
      "While we specialize in breathtaking journeys within Nepal, we also offer incredible travel experiences across Bhutan, Tibet, and beyond. Whether you're looking for a Himalayan adventure or an exotic escape to a distant land, we bring the same level of expertise and dedication to all our destinations."
  },
  {
    question: "Reliable, Credible and Success Rate",
    answer:
      "Our experienced team enProfessional and highly experienced  team with high-quality service we offer from the very beginning to the end of the tour making  a successful journey. Proper tour planning, effective communication, efficient logistics support, widespread network, higher hygiene standard, counseling on good health practice, dedicated customer support,  decades of trustworthy history for reliable, credible Tourism service providers in Nepal. We adopt the latest technology with uptodate equipment, continuous training and development of employees to strive in the Tourism sector while we are committed to safety, sustainability, and customer satisfaction to our valuable guests. Book with confidence with us for a high-quality value tour with transferable deposits, no cancellation fee and deposit guaranteed for lifetime. At Magnificent Travels and Tours, we don’t just take you places—we create unforgettable stories. Choose us for your next journey, and let’s explore the world together in a way that is meaningful, immersive, and truly magnificent.           "
  },
  {
    question: "Guaranteed Departures",
    answer:
      "Our trips are guaranteed to depart regardless of the number of participants once the guest booked their trip with us, unless the minimum group size is listed in the essential trip information or special conditions stated otherwise. If the group experience is important but the number of bookings is low on certain departures and fixed departure dates do not suit your schedule and you prefer to move to a different date or trip, please let us know so we can offer alternative departure dates or trips to you."
  }
];

const WhyChooseUs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [allExpanded, setAllExpanded] = useState(false);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleAll = () => {
    setAllExpanded(!allExpanded);
    setOpenIndex(allExpanded ? null : "all");
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      
      <section className="bg-blue-100 h-[400px] flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-3xl font-bold">Why Book With Magnificent?</h1>
        <p className="text-gray-700 mt-2">[RANDOM COMPANY AND PEOPLE PICTURES]</p>
      </section>
      
      <div className="max-w-4xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>
        <p className="text-gray-700 mt-2">
          Discover the world with Magnificent Travels and Tours, where every journey is curated
          to perfection. Our passion for exploration and commitment to exceptional service ensure
          unforgettable travel experiences tailored just for you.
        </p>

        <button
          className="bg-green-700 text-white px-4 py-2 rounded-md mt-4"
          onClick={toggleAll}
        >
          {allExpanded ? "Collapse All" : "Expand All"}
        </button>

        <div className="mt-7 space-y-6 mb-10">
          {faqData.map((faq, index) => (
            <div key={index} className="rounded-lg shadow-md">
              <div
                className="bg-green-100 p-6 flex justify-between items-center cursor-pointer rounded-t-lg"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
                <span className={`transform transition-transform ${openIndex === index || openIndex === "all" ? "rotate-180" : "rotate-0"}`}>
                  ▼
                </span>
              </div>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openIndex === index || openIndex === "all" ? "auto" : 0, opacity: openIndex === index || openIndex === "all" ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                {(openIndex === index || openIndex === "all") && (
                  <div className="bg-white p-4 rounded-b-lg ">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
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

export default WhyChooseUs;

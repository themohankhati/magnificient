import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../shared_components/Header";
import Newsletter from "../../shared_components/Newsletter";
import Associations from "../../shared_components/Associations";
import Footer from "../../shared_components/Footer";

import ImageGallery from "./ImageGallery";
import TourDescription from "./TourDescription";
import TourPackages from "./TourPackages";
import { getPackages } from "../../services/packageService";

const TourPage = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTour = async () => {
      setLoading(true);
      const allPackages = await getPackages();
      // Support both _id and _id.$oid
      const found = allPackages.find(pkg => (pkg._id?.$oid || pkg._id) === id);
      setTour(found);
      setLoading(false);
    };
    fetchTour();
  }, [id]);

  if (loading || !tour) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="bg-white">
      <Header />
      <div className="w-full mx-auto mt-5">
        <ImageGallery images={tour.images} />
        <TourDescription title={tour.title} description={tour.description} />
        {/* You can add more detail components here, e.g., DetailsCard, Itinerary, etc. */}
      </div>
      <Associations />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default TourPage;
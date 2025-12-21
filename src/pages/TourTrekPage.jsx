import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPackages } from "../services/packageService";
import TourTrek from "../components/homepage/Tour and Trek/TourTrek";

const TourTrekPage = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTour = async () => {
      setLoading(true);
      const allPackages = await getPackages();
      const found = allPackages.find(pkg => (pkg._id?.$oid || pkg._id) === id);
      if (found) {
        // Ensure images are display-ready:
        // - Keep absolute URLs (e.g., http(s)://localhost:3000/uploads/...)
        // - Keep already-rooted paths (/Images/...)
        // - For legacy plain filenames, prefix with public Images by country
        const countryFolder =
          (found.tripDetails &&
            found.tripDetails[0] &&
            found.tripDetails[0].country &&
            String(found.tripDetails[0].country).toLowerCase()) ||
          "nepal";

        found.images = (found.images || []).map((img) => {
          if (!img) return img;
          const isAbsolute = /^https?:\/\//i.test(img);
          if (isAbsolute || img.startsWith("/")) return img;
          return `/Images/${countryFolder}/${img}`;
        });
      }
      setTour(found);
      setLoading(false);
    };
    fetchTour();
  }, [id]);

  if (loading || !tour) return <div className="text-center mt-10">Loading...</div>;

  return (
    <TourTrek
      title={tour.title}
      description={tour.description}
      itinerary={tour.itinerary || []}
      faqs={tour.faqs || []}
      includes={tour.package_includes}
      excludes={tour.package_excludes}
      images={tour.images}
      detailsItems={tour.tripDetails}
    />
  );
};

export default TourTrekPage;
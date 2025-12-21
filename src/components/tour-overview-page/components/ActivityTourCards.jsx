import React, { useEffect, useState } from "react";
import { getPackagesByCategoryType, getPackagesByCategoryPlace } from "../../../services/packageService";
import Card from "../../../shared_components/Card";
import CardTitle from "../../../shared_components/CardTitle";

function truncateToTwoLines(text) {
  if (!text) return "";
  const maxLength = 120;
  if (text.length <= maxLength) return text;
  let truncated = text.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  if (lastSpace > 0) truncated = truncated.slice(0, lastSpace);
  truncated += "...";
  return truncated;
}

const ActivityTourCards = ({ categoryType, categoryPlace, country }) => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetch = categoryPlace
      ? getPackagesByCategoryPlace(categoryPlace)
      : getPackagesByCategoryType(categoryType);
    fetch.then(pkgs => {
      setPackages(pkgs);
      setLoading(false);
    });
  }, [categoryType, categoryPlace]);

  if (loading) return <div className="text-center my-10">Loading...</div>;
  if (!packages.length) return null;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 mt-6">
      <CardTitle />
      <div className="flex flex-wrap gap-6 justify-center">
        {packages.map(pkg => {
          let imgSrc = pkg.images?.[0] || "";
let countryFolder = (pkg.tripDetails && pkg.tripDetails[0] && pkg.tripDetails[0].country)
  || (Array.isArray(country) ? country[0] : country)
  || "nepal";
countryFolder = countryFolder.toLowerCase();
const isAbsolute = /^https?:\/\//i.test(imgSrc);
if (imgSrc && !isAbsolute && !imgSrc.startsWith("/")) {
  imgSrc = `/Images/${countryFolder}/${imgSrc}`;
}
          return (
            <Card
              key={pkg._id?.$oid || pkg._id}
              image={imgSrc}
              country={countryFolder.charAt(0).toUpperCase() + countryFolder.slice(1)}
              title={pkg.title}
              duration={pkg.tripDetails?.[0]?.duration}
              months={pkg.tripDetails?.[0]?.bestSeason}
              difficulty={pkg.tripDetails?.[0]?.difficulty}
              description={truncateToTwoLines(pkg.description)}
              id={pkg._id?.$oid || pkg._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ActivityTourCards; 
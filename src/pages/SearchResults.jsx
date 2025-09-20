import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchPackages, getTripTypeOptions } from "../services/searchService";
import Card from "../shared_components/Card";
import CardTitle from "../shared_components/CardTitle";
import Header from '../shared_components/Header';
import Footer from '../shared_components/Footer';

function truncateToTwoLines(text) {
  if (!text) return "";
  const maxLength = 140;
  if (text.length <= maxLength) return text;
  let truncated = text.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  if (lastSpace > 0) truncated = truncated.slice(0, lastSpace);
  truncated += "...";
  return truncated;
}

export default function SearchResults() {
  const [params] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [packages, setPackages] = useState([]);
  const [typeOptions, setTypeOptions] = useState([]); // [{id,title}]

  const filters = useMemo(() => {
    const country = params.get("country") || "";
    const typeId = params.get("type") || ""; // category_type id
    return { country, typeId };
  }, [params]);

  useEffect(() => {
    setTypeOptions(getTripTypeOptions());
  }, []);

  useEffect(() => {
    let mounted = true;
    async function run() {
      try {
        setLoading(true);
        const results = await searchPackages(filters);
        if (!mounted) return;
        setPackages(results);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    run();
    return () => {
      mounted = false;
    };
  }, [filters]);

  const typeLabel = useMemo(() => {
    if (!filters.typeId) return "";
    const found = typeOptions.find((t) => t.id === filters.typeId);
    return found?.title || filters.typeId;
  }, [filters.typeId, typeOptions]);

  const headingParts = [];
  if (filters.country) headingParts.push(filters.country);
  if (typeLabel) headingParts.push(typeLabel);
  const heading = headingParts.length ? headingParts.join(" · ") : "All Results";

  if (loading) return <div className="text-center my-10">Loading...</div>;

  return (
    <>
      <Header />

      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 mt-6 mb-16">
        <CardTitle title={`Search Results: ${heading}`} />
        {packages.length === 0 ? (
          <div className="text-center text-gray-600 my-10">
            No packages match your filters.
          </div>
        ) : (
          <div className="flex flex-wrap gap-6 justify-center">
            {packages.map((pkg) => {
              let imgSrc = pkg.images?.[0] || "";
              let countryFolder =
                (pkg.tripDetails &&
                  pkg.tripDetails[0] &&
                  pkg.tripDetails[0].country) ||
                "nepal";
              countryFolder = countryFolder.toLowerCase();
              if (imgSrc && !imgSrc.startsWith("/")) {
                imgSrc = `/Images/${countryFolder}/${imgSrc}`;
              }
              const id = pkg._id?.$oid || pkg._id;
              return (
                <Card
                  key={id}
                  image={imgSrc}
                  country={
                    countryFolder.charAt(0).toUpperCase() + countryFolder.slice(1)
                  }
                  title={pkg.title}
                  duration={pkg.tripDetails?.[0]?.duration}
                  months={pkg.tripDetails?.[0]?.bestSeason}
                  difficulty={pkg.tripDetails?.[0]?.difficulty}
                  description={truncateToTwoLines(pkg.description)}
                  id={id}
                />
              );
            })}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

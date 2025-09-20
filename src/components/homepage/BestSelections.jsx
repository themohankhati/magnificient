import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Card from "../../shared_components/Card";
import { getPackages } from "../../services/packageService";

const CARDS_PER_PAGE = 3;

function truncateToThreeLines(text) {
  if (!text) return "";
  // Normalize whitespace and collapse newlines to avoid unexpected long layout
  const normalized = text.replace(/\s+/g, " ").trim();
  const maxLength = 110; // tighter cap to ensure ~3 lines within card width
  if (normalized.length <= maxLength) return normalized;
  let truncated = normalized.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  if (lastSpace > 0) truncated = truncated.slice(0, lastSpace);
  return truncated + "...";
}

export default function BestSelection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [items, setItems] = useState([]); // selected up to 6 packages

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        setLoading(true);
        setError("");
        const pkgs = await getPackages();
        if (!mounted) return;

        // Select up to 6 latest by created time derived from Mongo ObjectId (fallback to random)
        const withKey = pkgs.map((p) => {
          const id = (p?._id?.$oid || p?._id || "") + "";
          let ts = 0;
          if (id && /^[a-fA-F0-9]{24}$/.test(id)) {
            try {
              ts = parseInt(id.substring(0, 8), 16);
            } catch (_) {
              ts = 0;
            }
          }
          return { pkg: p, ts };
        });

        let selected = [];
        if (withKey.some((w) => w.ts > 0)) {
          selected = withKey
            .sort((a, b) => b.ts - a.ts)
            .slice(0, 6)
            .map((w) => w.pkg);
        } else {
          // Fallback to random 6
          selected = pkgs
            .slice()
            .sort(() => Math.random() - 0.5)
            .slice(0, 6);
        }

        setItems(selected);
      } catch (e) {
        setError("Failed to load packages.");
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => {
      mounted = false;
    };
  }, []);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const pages = useMemo(() => Math.ceil(items.length / CARDS_PER_PAGE) || 1, [items.length]);
  const paginated = useMemo(
    () => items.slice(currentPage * CARDS_PER_PAGE, currentPage * CARDS_PER_PAGE + CARDS_PER_PAGE),
    [items, currentPage]
  );

  return (
    <section className="bg-[#f0fcf9] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center">
          Best Selection From{" "}
          <span className="text-[#14205c] underline">Travellers</span>
        </h2>
        <p className="text-sm mt-3 mb-10 text-gray-600 text-center">
          Discover top adventures chosen by our guests.
        </p>

        {error && <div className="text-red-600 mb-6">{error}</div>}

        {/* Cards - match layout used in ActivityTourCards for consistency */}
        <motion.div className="flex flex-wrap gap-6 justify-center transition-all duration-500">
          {loading ? (
            <div className="col-span-full text-gray-600">Loading...</div>
          ) : (
            paginated.map((pkg) => {
              let imgSrc = pkg.images?.[0] || "";
              let countryFolder = (pkg.tripDetails && pkg.tripDetails[0] && pkg.tripDetails[0].country) || "nepal";
              countryFolder = (countryFolder || "nepal").toLowerCase();
              if (imgSrc && !imgSrc.startsWith("/")) {
                imgSrc = `/Images/${countryFolder}/${imgSrc}`;
              }
              const id = pkg._id?.$oid || pkg._id;
              return (
                <Card
                  key={id}
                  image={imgSrc}
                  country={countryFolder.charAt(0).toUpperCase() + countryFolder.slice(1)}
                  title={pkg.title}
                  duration={pkg.tripDetails?.[0]?.duration}
                  months={pkg.tripDetails?.[0]?.bestSeason}
                  difficulty={pkg.tripDetails?.[0]?.difficulty}
                  description={truncateToThreeLines(pkg.description)}
                  id={id}
                />
              );
            })
          )}
        </motion.div>

        {/* Pagination Buttons */}
        <div className="mt-10 flex justify-center gap-2">
          {Array.from({ length: pages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => handlePageChange(idx)}
              className={`w-8 h-8 rounded-full text-sm font-medium cursor-pointer transition duration-300 ${
                currentPage === idx
                  ? "bg-green-600 text-white"
                  : "bg-white border border-gray-300 text-black hover:bg-gray-100"
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

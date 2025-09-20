import React from "react";

import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAvailableCountries, getTripTypeOptions } from "../../services/searchService";

export default function SearchBar({ onSearch }) {
  const [countries, setCountries] = useState([]);
  const [types, setTypes] = useState([]); // [{id,title}]
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState(""); // stores selected type id
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;
    async function init() {
      try {
        setLoading(true);
        const [availableCountries] = await Promise.all([
          getAvailableCountries(),
        ]);
        if (!mounted) return;
        setCountries(availableCountries);
        setTypes(getTripTypeOptions());
      } finally {
        if (mounted) setLoading(false);
      }
    }
    init();
    return () => {
      mounted = false;
    };
  }, []);

  const canSearch = useMemo(() => {
    return Boolean(country || type);
  }, [country, type]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!canSearch || submitting) return;
    setSubmitting(true);
    try {
      const params = new URLSearchParams();
      if (country) params.set("country", country);
      if (type) params.set("type", type); // type is id (category_type)
      navigate(`/search?${params.toString()}`);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="w-full flex justify-center my-6 px-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-stretch bg-white shadow-xl rounded-2xl overflow-hidden w-full md:w-4/5 lg:w-2/3"
      >
        {/* Where To */}
        <div className="flex-1 p-4 border-b md:border-b-0 md:border-r">
          <label className="text-sm text-gray-500 mb-1 block">Where to</label>
          {loading ? (
            <div className="text-gray-400 text-sm">Loading countries...</div>
          ) : (
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full text-base font-medium text-blue-900 outline-none bg-transparent"
            >
              <option value="">All destinations</option>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          )}
        </div>

        {/* When */}
        <div className="flex-1 p-4 border-b md:border-b-0 md:border-r">
          <label className="text-sm text-gray-500 mb-1 block">When</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full text-base font-medium text-blue-900 outline-none bg-transparent placeholder-gray-400"
          />
        </div>

        {/* Type */}
        <div className="flex-1 p-4 border-b md:border-b-0 md:border-r">
          <label className="text-sm text-gray-500 mb-1 block">Type</label>
          {loading ? (
            <div className="text-gray-400 text-sm">Loading types...</div>
          ) : (
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full text-base font-medium text-blue-900 outline-none bg-transparent"
            >
              <option value="">All trip types</option>
              {types.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.title}
                </option>
              ))}
            </select>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={!canSearch || submitting}
          className="bg-green-600 hover:bg-green-700 disabled:bg-green-700 disabled:cursor-not-allowed text-white font-semibold px-6 sm:px-8 md:rounded-none md:rounded-r-2xl py-4 md:py-0 w-full md:w-auto"
        >
          {submitting ? "Searching..." : "FIND NOW"}
        </button>
      </form>
    </div>
  );
}

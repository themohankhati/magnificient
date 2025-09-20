import { getPackages } from "./packageService";
import { activitiesData } from "../components/tour-overview-page/components/data/activityData";
import { magnificentToursData } from "../components/tour-overview-page/components/data/magnificentTourData";
import { trekkingData } from "../components/tour-overview-page/components/data/trekkingData";

// Build a unique, sorted list of trip type options { id, title } from static data sources
export function getTripTypeOptions() {
  const items = [
    ...activitiesData.map((a) => ({ id: a.id, title: a.title })),
    ...magnificentToursData.map((m) => ({ id: m.id, title: m.title })),
    ...trekkingData.map((t) => ({ id: t.id, title: t.title })),
  ];
  const byId = new Map();
  for (const it of items) {
    if (it.id && it.title && !byId.has(it.id)) byId.set(it.id, it);
  }
  const unique = Array.from(byId.values());
  unique.sort((a, b) => a.title.localeCompare(b.title));
  return unique;
}

// Fetch all packages and derive unique country list from tripDetails[0].country
export async function getAvailableCountries() {
  const packages = await getPackages();
  const countries = new Set();
  for (const pkg of packages) {
    const country = pkg?.tripDetails?.[0]?.country;
    if (country) countries.add(country);
  }
  return Array.from(countries).sort((a, b) => a.localeCompare(b));
}

// Search by exact country and category_type (typeId)
export async function searchPackages({ country, typeId }) {
  const packages = await getPackages();
  return packages.filter((pkg) => {
    const pkgCountry = pkg?.tripDetails?.[0]?.country || "";
    const categoryType = pkg?.category_type || "";

    let ok = true;
    if (country) {
      ok = ok && pkgCountry.toLowerCase() === country.toLowerCase();
    }
    if (typeId) {
      ok = ok && categoryType === typeId;
    }
    return ok;
  });
}

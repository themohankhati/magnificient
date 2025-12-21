import axios from "axios";

const base_url = "http://localhost:3000/api/";
const uploads_base = "http://localhost:3000/uploads/";

const mapImage = (name) => {
  if (!name) return name;
  if (/^https?:\/\//i.test(name)) return name;
  return uploads_base + encodeURIComponent(name);
};

const mapPackage = (pkg) => {
  const mapped = { ...pkg };
  if (Array.isArray(pkg.images)) {
    mapped.images = pkg.images.map(mapImage);
  }
  if (Array.isArray(pkg.tripDetails)) {
    mapped.tripDetails = pkg.tripDetails.map((td) => ({
      ...td,
      ...(Array.isArray(td?.trip_map) ? { trip_map: td.trip_map.map(mapImage) } : {}),
    }));
  }
  return mapped;
};

export const getPackages = async () => {
  const res = await axios.get(base_url + "package");
  return Array.isArray(res.data) ? res.data.map(mapPackage) : [];
};

export const createPackage = async (formData) => {
  const res = await axios.post(base_url + "package", formData);
  return mapPackage(res.data);
};

export const getIndiaPackages = async () => {
  const res = await axios.get(base_url + "package");
  return res.data
    .filter((pkg) => {
      if (pkg.tripDetails && pkg.tripDetails[0] && pkg.tripDetails[0].country) {
        return pkg.tripDetails[0].country.toLowerCase() === "india";
      }
      return false;
    })
    .map(mapPackage);
};

export const getPackagesByCountry = async (country) => {
  const res = await axios.get(base_url + "package");
  return res.data
    .filter((pkg) => {
      if (pkg.tripDetails && pkg.tripDetails[0] && pkg.tripDetails[0].country) {
        return pkg.tripDetails[0].country.toLowerCase() === country.toLowerCase();
      }
      return false;
    })
    .map(mapPackage);
};

export const getPackagesByActivity = async (activityId) => {
  const res = await axios.get(base_url + "package");
  return res.data
    .filter((pkg) => {
      if (pkg.tripDetails && pkg.tripDetails[0] && pkg.tripDetails[0].activity) {
        return pkg.tripDetails[0].activity === activityId;
      }
      return false;
    })
    .map(mapPackage);
};

export const getPackagesByCategoryType = async (categoryType) => {
  const res = await axios.get(base_url + "package");
  return res.data.filter((pkg) => pkg.category_type === categoryType).map(mapPackage);
};

export const getPackagesByCategoryPlace = async (categoryPlace) => {
  const res = await axios.get(base_url + "package");
  return res.data.filter((pkg) => pkg.category_place === categoryPlace).map(mapPackage);
};
import axios from "axios";

const base_url  = "http://localhost:3000/api/";

export const getPackages = async() => {
    const response = await axios.get(base_url + "package");
    return response.data;

};

export const createPackage = async (newPackage) => {
    const response = await axios.post(base_url + "package", newPackage);
    return response.data;
  };

export const getIndiaPackages = async () => {
    const response = await axios.get(base_url + "package");
    // Filter packages where country is India (case-insensitive)
    return response.data.filter(pkg => {
        if (pkg.tripDetails && pkg.tripDetails[0] && pkg.tripDetails[0].country) {
            return pkg.tripDetails[0].country.toLowerCase() === 'india';
        }
        return false;
    });
};

export const getPackagesByCountry = async (country) => {
    const response = await axios.get(base_url + "package");
    return response.data.filter(pkg => {
        if (pkg.tripDetails && pkg.tripDetails[0] && pkg.tripDetails[0].country) {
            return pkg.tripDetails[0].country.toLowerCase() === country.toLowerCase();
        }
        return false;
    });
};

export const getPackagesByActivity = async (activityId) => {
    const response = await axios.get(base_url + "package");
    return response.data.filter(pkg => {
        if (pkg.tripDetails && pkg.tripDetails[0] && pkg.tripDetails[0].activity) {
            return pkg.tripDetails[0].activity === activityId;
        }
        return false;
    });
};

export const getPackagesByCategoryType = async (categoryType) => {
    const response = await axios.get(base_url + "package");
    return response.data.filter(pkg => pkg.category_type === categoryType);
};

export const getPackagesByCategoryPlace = async (categoryPlace) => {
    const response = await axios.get(base_url + "package");
    return response.data.filter(pkg => pkg.category_place === categoryPlace);
};
  

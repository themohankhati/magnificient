import axios from "axios";

const base_url  = "http://localhost:3000/api/";

export const getPackages = async() => {
    try {
        console.log('Fetching packages from:', base_url + "package");
        const response = await axios.get(base_url + "package");
        console.log('Packages fetched successfully:', response.data?.length || 0, 'packages');
        return response.data;
    } catch (error) {
        console.error('Error fetching packages:', error);
        throw error;
    }
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
    try {
        console.log('Fetching packages by country:', country);
        const response = await axios.get(base_url + "package");
        console.log('Raw packages received:', response.data?.length || 0);
        
        const filtered = response.data.filter(pkg => {
            if (pkg.tripDetails && pkg.tripDetails[0] && pkg.tripDetails[0].country) {
                return pkg.tripDetails[0].country.toLowerCase() === country.toLowerCase();
            }
            return false;
        });
        
        console.log('Filtered packages for', country, ':', filtered.length);
        return filtered;
    } catch (error) {
        console.error('Error fetching packages by country:', error);
        throw error;
    }
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
    try {
        console.log('Fetching packages by category type:', categoryType);
        const response = await axios.get(base_url + "package");
        console.log('Raw packages received:', response.data?.length || 0);
        
        const filtered = response.data.filter(pkg => pkg.category_type === categoryType);
        console.log('Filtered packages for category type', categoryType, ':', filtered.length);
        return filtered;
    } catch (error) {
        console.error('Error fetching packages by category type:', error);
        throw error;
    }
};

export const getPackagesByCategoryPlace = async (categoryPlace) => {
    try {
        console.log('Fetching packages by category place:', categoryPlace);
        const response = await axios.get(base_url + "package");
        console.log('Raw packages received:', response.data?.length || 0);
        
        const filtered = response.data.filter(pkg => pkg.category_place === categoryPlace);
        console.log('Filtered packages for category place', categoryPlace, ':', filtered.length);
        return filtered;
    } catch (error) {
        console.error('Error fetching packages by category place:', error);
        throw error;
    }
};
  

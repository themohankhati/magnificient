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
  

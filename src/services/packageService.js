import axios from "axios";

const base_url  = "http://localhost:3000/api/";

export const getPackages = async() => {
    const response = await axios.get(base_url + "package");
    return response.data;

};
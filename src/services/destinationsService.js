import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const baseUrl = "http://localhost:3000/";

export const useGetDestinations = () => {
  return useQuery({
    queryKey: ["GET_DESTINATIONS"],
    queryFn: () => {
      return axios.get(`${baseUrl}api/destination`);
    },
    onSuccess(res) {
      return res?.data;
    },
  });
};

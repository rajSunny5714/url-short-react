import { useQuery } from "@tanstack/react-query";
import api from "../api/api";

export const useFetchMyShortUrls = (token, onError) => {
  return useQuery({
    queryKey: ["my-shortenurls", token],
    queryFn: async () => {
      if (!token) throw new Error("Token not provided");

      const res = await api.get("/api/urls/myurls", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      });
      return res.data;
    },
    select: (data) => {
      const sortedData = data.sort(
        (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
      );
      return sortedData;
    },
    onError,    
    staleTime: 5000, 
  });
};

export const useFetchTotalClicks = (token, onError) => {
  return useQuery({
    queryKey: ["url-totalclick", token],
    queryFn: async () => {
      if (!token) throw new Error("Token not provided");

      const res = await api.get(
        "http://localhost:8080/api/urls/totalClicks?startDate=2025-09-09&endDate=2026-10-30",
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      return res.data;
    },
    select: (data) => {
      if (!data) return [];
      return Object.keys(data).map((key) => ({
        clickDate: key,
        count: data[key],
      }));
    },
    onError,      
    staleTime: 5000,
    retry: 1,     
  });
};
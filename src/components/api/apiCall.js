import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiCall = createApi({
  reducerPath: "dailynews",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://newsapi.org/v2/top-headlines?apiKey=8f91f6d22e4c4597bb189ebc0c208191&q=cricket",
  }),
  tagTypes: ["dailynews"],
  endpoints: (builder) => ({
    getDailyNews: builder.query({
      query: () => ({
        method: "GET",
      }),
      providesTags: ["dailynews"],
    }),
  }),
});

export const { useGetDailyNewsQuery } = apiCall;

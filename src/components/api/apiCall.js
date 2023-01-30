import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiCall = createApi({
  reducerPath: "dailynews",
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),
  tagTypes: ["dailynews"],
  endpoints: (builder) => ({
    getDailyNews: builder.query({
      query: ({ country, category }) => ({
        url: `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=739418d8c5034bc09ddf7ec21eb71b21`,
        method: "GET",
      }),
      providesTags: ["dailynews"],
    }),
  }),
});

export const { useGetDailyNewsQuery } = apiCall;

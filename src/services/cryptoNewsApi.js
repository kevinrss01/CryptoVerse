import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://bing-news-search1.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("X-BingApis-SDK", "true");
      headers.set(
        "X-RapidAPI-Key",
        "fdd690444bmsh9229d5ddb699948p158323jsna812a71735c5"
      );
      headers.set("X-RapidAPI-Host", "bing-news-search1.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      //Fait attention à bien mettre les accolades dans les parenthèses !!!
      query: ({ newsCategory, count }) =>
        `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://coinranking1.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "fdd690444bmsh9229d5ddb699948p158323jsna812a71735c5"
      );
      headers.set("X-RapidAPI-Host", "coinranking1.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => `/coins?limit=${count}`,
    }),
  }),
});

/*export const coinGeckoAPI = createApi({
  reducerPath: "coinGeckoAPI",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://coingecko.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "fdd690444bmsh9229d5ddb699948p158323jsna812a71735c5"
      );
      headers.set("X-RapidAPI-Host", "coingecko.p.rapidapi.com");
    },
  }),
  endpoints: (builder) => ({
    getCoinGecko: builder.query({
      query: () => "/exchanges",
    }),
  }),
});*/

//"Use" before and 'Query' after
export const { useGetCryptosQuery } = cryptoApi;
//export const { useGetCoinGeckoQuery } = coinGeckoAPI;

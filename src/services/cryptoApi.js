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
    getCryptoDetails: builder.query({
      query: (coinId) => `/coin/${coinId}`,
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        `coin/${coinId}/history?timePeriod=${timePeriod}`,
    }),
  }),
});

//"use" before and 'Query' after
export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;

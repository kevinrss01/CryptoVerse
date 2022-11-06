import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";
// import { coinGeckoAPI } from "../services/cryptoApi";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    //[coinGeckoAPI.reducerPath]: coinGeckoAPI.reducer,
  },
});

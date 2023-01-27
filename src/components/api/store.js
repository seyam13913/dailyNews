import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiCall } from "./apiCall";

export const store = configureStore({
  reducer: {
    [apiCall.reducerPath]: apiCall.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiCall.middleware),
});

setupListeners(store.dispatch);

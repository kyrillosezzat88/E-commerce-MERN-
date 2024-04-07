import { configureStore } from "@reduxjs/toolkit";
import AlertReducer from "./slices/Alert";

const store = configureStore({
  reducer: {
    alert: AlertReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

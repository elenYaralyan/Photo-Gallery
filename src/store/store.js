import { configureStore } from "@reduxjs/toolkit";
import photoSlice from "./features/photoSlice";

export const store = configureStore({
  reducer: {
    photos: photoSlice,
  },
});

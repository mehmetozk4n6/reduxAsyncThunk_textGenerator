import { configureStore } from "@reduxjs/toolkit";
import paragraphsSlice from "./paragraphSlice";

export const store = configureStore({
  reducer: {
    paragraphs: paragraphsSlice,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import FilterCarData from "./slice/filterData";

export const store = configureStore({
  reducer: {
    filterCarJsonData: FilterCarData,
  },
});

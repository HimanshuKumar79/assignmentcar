import { createSlice } from "@reduxjs/toolkit";
import carData from "../../data/cars.json";
const initialState = {
  carData,
  filterData: carData,
};

export const FilterCarData = createSlice({
  name: "loginCheck",
  initialState,
  reducers: {
    filterCarData: (state, action) => {
      if (action.payload === "") {
        state.filterData = state.carData;
      } else {
        state.filterData = state.carData.filter((car) => {
          const carName = car.Name.toLowerCase();
          return carName.includes(action.payload.toLowerCase());
        });
      }
    },
  },
});

export const { filterCarData } = FilterCarData.actions;

export default FilterCarData.reducer;

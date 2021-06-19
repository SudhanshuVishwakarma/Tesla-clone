import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: ["Modal S", "Modal X", "Modal Y", "Modal 3"],
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

export const selectCars = (state) => state.car.cars;

export default carSlice.reducer;

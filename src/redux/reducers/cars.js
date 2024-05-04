import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  Cars: [],
  Car:[]
};

// Define the slice
const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setCars: (state, action) => {
      state.Cars = action.payload;
    },
    setCar: (state, action) =>{
        state.Car = action.payload;
    }
  },
});

// export the setter funtion
export const { setCars,setCar } = carSlice.actions;

// export the reducer
export default carSlice.reducer;

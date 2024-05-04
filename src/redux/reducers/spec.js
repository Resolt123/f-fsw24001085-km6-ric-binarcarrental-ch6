import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  Specs: [],
};

// Define the slice
const specSlice = createSlice({
  name: "spec",
  initialState,
  reducers: {
    setSpec: (state, action) => {
      state.Specs = action.payload;
    },
  },
});

// export the setter funtion
export const { setSpec } = carSlice.actions;

// export the reducer
export default specSlice.reducer;

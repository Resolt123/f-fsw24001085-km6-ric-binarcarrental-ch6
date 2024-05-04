import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  Options: [],
};

// Define the slice
const optionSlice = createSlice({
  name: "option",
  initialState,
  reducers: {
    setOption: (state, action) => {
      state.Options = action.payload;
    },
  },
});

// export the setter funtion
export const { setOption } = optionSlice.actions;

// export the reducer
export default optionSlice.reducer;

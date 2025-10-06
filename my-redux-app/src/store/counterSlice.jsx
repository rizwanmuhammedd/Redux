import { createSlice } from "@reduxjs/toolkit";

// Step 1: Initial state
const initialState = {
  count: 0,
};

// Step 2: Create a slice
const counterSlice = createSlice({
  name: "counter",initialState,
  
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

// Step 3: Export actions and reducer
export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;

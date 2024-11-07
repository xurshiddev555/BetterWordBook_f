import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  search: "",
};

// Slice definition
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

// Export the action creators
export const { setSearch } = counterSlice.actions;

// Export the reducer for the store
export default counterSlice.reducer;

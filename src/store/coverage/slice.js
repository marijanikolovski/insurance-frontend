import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  getCoverages: () => { },
};

export const coveragesSlice = createSlice({
  name: "coverages",
  initialState: {
    coverages: [],
  },
  reducers: {
    setCoverages: (state, action) => {
      state.coverages = action.payload;
    },

    ...middlewareActions,
  },
});

export const {
  getCoverages,
  setCoverages,
} = coveragesSlice.actions;

export default coveragesSlice.reducer;


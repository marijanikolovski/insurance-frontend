import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  getCites: () => { },
};

export const citiesSlice = createSlice({
  name: "cities",
  initialState: {
    cities: [],
  },
  reducers: {
    setCities: (state, action) => {
      state.cities = action.payload;
    },

    ...middlewareActions,
  },
});

export const {
  getCites,
  setCities,
} = citiesSlice.actions;

export default citiesSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  getDiscounts: () => { },
};

export const discountsSlice = createSlice({
  name: "discounts",
  initialState: {
    discounts: [],
  },
  reducers: {
    setDiscounts: (state, action) => {
      state.discounts = action.payload;
    },

    ...middlewareActions,
  },
});

export const {
  getDiscounts,
  setDiscounts,
} = discountsSlice.actions;

export default discountsSlice.reducer;


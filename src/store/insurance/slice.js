import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  calculateInsurance: () => { },
};

export const insuranceSlice = createSlice({
  name: "insurance",
  initialState: {
    insurance: {
      name: '',
      age_id: '',
      city_id: '',
      vehicle_power: '',
      voucher: 0,
      price_match: 0,
      discount_id: [],
      coverage_id: [],
      base_price: 0,
      total_price: 0,
    },
  },
  reducers: {
    setInsurance: (state, action) => {
      state.insurance = action.payload;
    },

    setResetForm: (state) => {
      state.insurance = {
        name: '',
        age_id: '',
        city_id: '',
        vehicle_power: '',
        voucher: 0,
        price_match: 0,
        discount_id: [],
        coverage_id: [],
        base_price: 0,
        total_price: 0,
      }
    },

    ...middlewareActions,
  },
});

export const {
  calculateInsurance,
  setInsurance,
  setResetForm
} = insuranceSlice.actions;

export default insuranceSlice.reducer;


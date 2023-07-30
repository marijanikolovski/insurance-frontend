import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  calculateInsurance: () => { },
};

export const insuranceSlice = createSlice({
  name: "insurance",
  initialState: {
    insurance: {
      name: '',
      age_id: 0,
      city_id: 0,
      vehicle_power: '',
      voucher: 0,
      price_match: 0,
      discount_id: [],
      coverage_id: [],
      base_price: 0,
      total_price: 0,
      message: '',
      value_bonus_protection: 0,
      value_user_under30: 0,
      value_user_over: 0,
      value_glass_protection: 0,
      value_commercial_discount: 0,
      value_strong_car_surcharge: 0,
      value_adviser_discount_bonus: 0,
      value_sumer_discount: 0,
      value_adviser_discount_ao_younger: 0,
      value_adviser_discount_ao_older: 0,
      value_adviser_discount_glass_protection: 0,
      voucher: 0
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


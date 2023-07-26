import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  getAge: () => { },
};

export const ageSlice = createSlice({
  name: "age",
  initialState: {
    age: [],
  },
  reducers: {
    setAge: (state, action) => {
      state.age = action.payload;
    },

    ...middlewareActions,
  },
});

export const {
  setAge,
  getAge,
} = ageSlice.actions;

export default ageSlice.reducer;


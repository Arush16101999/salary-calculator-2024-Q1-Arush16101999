import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basicSalary: 0,
  earnings: [],
  deductions: [],
};

const salarySlice = createSlice({
  name: "salary",
  initialState,
  reducers: {
    setBasicSalary: (state, action) => {
      state.basicSalary = action.payload;
    },
    addEarning: (state, action) => {
      state.earnings.push(action.payload);
    },
    updateEarning: (state, action) => {
      const { index, earning } = action.payload;
      state.earnings[index] = earning;
    },
    removeEarning: (state, action) => {
      state.earnings.splice(action.payload, 1);
    },
    addDeduction: (state, action) => {
      state.deductions.push(action.payload);
    },
    updateDeduction: (state, action) => {
      const { index, deduction } = action.payload;
      state.deductions[index] = deduction;
    },
    removeDeduction: (state, action) => {
      state.deductions.splice(action.payload, 1);
    },
    reset: (state) => {
      state.basicSalary = 0;
      state.earnings = [];
      state.deductions = [];
    },
  },
});

export const {
  setBasicSalary,
  addEarning,
  updateEarning,
  removeEarning,
  addDeduction,
  updateDeduction,
  removeDeduction,
  reset,
} = salarySlice.actions;

export default salarySlice.reducer;

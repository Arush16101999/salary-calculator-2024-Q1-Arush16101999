import { configureStore } from "@reduxjs/toolkit";
import salaryReducer from "./salarySlice";

const store = configureStore({
  reducer: {
    salary: salaryReducer,
  },
});

export default store;

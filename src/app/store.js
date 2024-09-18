import { configureStore } from "@reduxjs/toolkit";
import  showData  from "../feature/useSlice";

export const store = configureStore({
  reducer: {
    show : showData
  },
});
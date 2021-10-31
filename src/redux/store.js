import { configureStore } from "@reduxjs/toolkit";
import savedReducer from "./slice/savedSlice";

export default configureStore({
  reducer: {
    saved: savedReducer,
  },
});

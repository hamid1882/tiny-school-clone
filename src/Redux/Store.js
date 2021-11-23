import { configureStore } from "@reduxjs/toolkit";
import App from "./AppSlice";

export const store = configureStore({
  reducer: { App },
});

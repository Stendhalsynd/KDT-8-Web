import { configureStore } from "@reduxjs/toolkit";
import cartsSlice from "../features/carts/cartsSlice";

export const store = configureStore({
  reducer: {
    carts: cartsSlice,
  },
});

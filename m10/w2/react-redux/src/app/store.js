import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import cartsSlice from "../features/cart/cartsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartsSlice,
  },
});

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

export const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    cartsAdded: (state, action) => {
      const { id, name, price } = action.payload;
      state.carts.push({
        id,
        name,
        price,
      });
    },
    cartsDeleted: (state, action) => {
      state.carts = state.carts.filter((cart) => cart.id !== action.payload);
    },
  },
});

export const carts = (state) => state.cart.carts;

export const { cartsAdded, cartsDeleted } = cartsSlice.actions;

export default cartsSlice.reducer;

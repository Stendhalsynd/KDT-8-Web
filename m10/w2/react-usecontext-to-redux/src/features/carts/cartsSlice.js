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
  },
});

export const carts = (state) => state.carts;

export const { cartsAdded } = cartsSlice.actions;

export default cartsSlice.reducer;

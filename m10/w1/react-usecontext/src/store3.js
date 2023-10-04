import { createContext } from "react";

const CartContext = createContext({
  id: 0,
  name: "",
  price: 0,
  products: [],
  cart: [],
  setCart: () => {},
});

export default CartContext;

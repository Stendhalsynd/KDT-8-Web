import { createStore } from "redux";

export const ADD_CART = "ADD_CART";
export const DELETE_CART = "DELETE_CART";

// reducer
const reducer = (
  state = {
    products: [
      { id: 1, name: "장난감", price: 10 },
      { id: 2, name: "쌀", price: 20 },
      { id: 3, name: "햄버거", price: 30 },
    ],
    cart: [],
  },
  action
) => {
  switch (action.type) {
    case ADD_CART:
      const id = state.cart.length;
      const product = state.products.find(
        (product) => product.id === action.id
      );
      const item = { ...product, id };
      return [...state, item];
    case DELETE_CART:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

// store
const store = createStore(reducer);

export default store;

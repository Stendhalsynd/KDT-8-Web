import React from "react";
import { Counter } from "./features/counter/Counter";
import ProductList from "./features/product/ProductList";
import Cart from "./features/cart/Cart";

function App() {
  return (
    <div>
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;

import { useState } from "react";

import LanguageSelector from "./LanguageSelector";
import ThemeSelector from "./ThemeSelector";
import Provider from "./Provider";
import CartContext from "./store3";
import CartItem from "./CartItem";
import ProductList from "./ProductList";
import Cart from "./Cart";

function App() {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: "장난감", price: 10 },
    { id: 2, name: "쌀", price: 20 },
    { id: 3, name: "햄버거", price: 30 },
  ];

  return (
    <>
      <CartContext.Provider value={{ products, cart, setCart }}>
        <ProductList />
        <Cart />
      </CartContext.Provider>
    </>
    // <div style={{ backgroundColor: "orange" }}>
    //   <Provider>
    //     <LanguageSelector />
    //     <ThemeSelector />
    //   </Provider>
    // </div>
  );
}

export default App;

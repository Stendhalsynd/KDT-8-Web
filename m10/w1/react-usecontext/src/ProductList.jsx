import CartContext from "./store3";
import { useContext } from "react";

export default function ProductList() {
  const { products, cart, setCart } = useContext(CartContext);

  return (
    <div
      style={{
        background: "antiquewhite",
        padding: "3vw 8vw",
        borderRadius: "50px",
        margin: "4vw",
      }}
    >
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        🍯 상품 리스트
      </h2>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {products.map((product) => (
          <li
            style={{
              padding: "5px",
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid gray",
              marginTop: "5px",
            }}
            key={product.id}
          >
            이름: {product.name} 가격: {product.price}{" "}
            <button
              style={{
                border: "none",
                background: "white",
                padding: "10px",
                borderRadius: "20px",
                fontWeight: 700,
              }}
              onClick={() => {
                setCart((prev) => [
                  ...prev,
                  {
                    id: prev.length + 1,
                    name: product.name,
                    price: product.price,
                  },
                ]);
              }}
            >
              장바구니에 추가
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

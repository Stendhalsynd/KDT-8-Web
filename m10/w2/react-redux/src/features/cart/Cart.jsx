import { useState, useEffect } from "react";

import { carts, cartsAdded, cartsDeleted } from "../cart/cartsSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Cart() {
  const dispatch = useDispatch();
  const cartList = useSelector(carts);

  const [total, setTotal] = useState(0);

  const handleRemoveItem = (itemId, price) => {
    dispatch(cartsDeleted(itemId));
    setTotal((prev) => prev - price);
  };

  useEffect(() => {
    let sum = 0;
    cartList.map((item) => {
      sum += item.price;
    });
    setTotal(sum);
  });

  return (
    <>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          alignItems: "space-between",
          background: "gainsboro",
          margin: "4vw",
          borderRadius: "30px",
          padding: "3vw 8vw",
          flexDirection: "column",
        }}
      >
        <h3 style={{ display: "flex", justifyContent: "center" }}>
          🥝 장바구니
        </h3>
        {cartList.map((item) => (
          <li
            style={{
              padding: "5px",
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid gray",
              marginTop: "5px",
            }}
            key={item.id}
          >
            이름: {item.name} 가격: {item.price}{" "}
            <button
              style={{
                border: "none",
                background: "white",
                padding: "10px",
                borderRadius: "20px",
                fontWeight: 700,
              }}
              onClick={() => handleRemoveItem(item.id, item.price)}
            >
              제거
            </button>
          </li>
        ))}
      </ul>
      <h3 style={{ display: "flex", justifyContent: "center" }}>
        장바구니 총액 : {total}
      </h3>
    </>
  );
}

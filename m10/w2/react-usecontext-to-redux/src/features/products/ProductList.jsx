// // import { products } from "./productsSlice";
// // import { carts, cartsAdded } from "../carts/cartsSlice";
// // import { useSelector, useDispatch } from "react-redux";
// import { useState } from "react";

// const initialState = [
//   {
//     id: 0,
//     name: "장난감",
//     price: 10,
//   },
//   {
//     id: 1,
//     name: "쌀",
//     price: 20,
//   },
//   {
//     id: 2,
//     name: "햄버거",
//     price: 30,
//   },
// ];

// export default function ProductList() {
//   // const dispatch = useDispatch();
//   // const cartList = useSelector(carts);
//   // const productList = useSelector(products);

//   const [products, setProducts] = useState(initialState);

//   return (
//     <div>제품 리스트</div>
//     // <div
//     //   style={{
//     //     background: "antiquewhite",
//     //     padding: "3vw 8vw",
//     //     borderRadius: "50px",
//     //     margin: "4vw",
//     //   }}
//     // >
//     //   테스트
//     //   <h2 style={{ display: "flex", justifyContent: "center" }}>
//     //     🍯 상품 리스트
//     //   </h2>
//     //   <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//     //     {productList.map((product) => (
//     //       <li
//     //         style={{
//     //           padding: "5px",
//     //           display: "flex",
//     //           justifyContent: "space-between",
//     //           borderBottom: "1px solid gray",
//     //           marginTop: "5px",
//     //         }}
//     //         key={product.id}
//     //       >
//     //         이름: {product.name} 가격: {product.price}{" "}
//     //         <button
//     //           style={{
//     //             border: "none",
//     //             background: "white",
//     //             padding: "10px",
//     //             borderRadius: "20px",
//     //             fontWeight: 700,
//     //           }}
//     //           onClick={() => {
//     //             dispatch(
//     //               cartsAdded({
//     //                 id: cartList.length,
//     //                 name: product.name,
//     //                 price: product.price,
//     //               })
//     //             );
//     //           }}
//     //         >
//     //           장바구니에 추가
//     //         </button>
//     //       </li>
//     //     ))}
//     //   </ul>
//     // </div>
//   );
// }

let product;
let price;

goMart();

pickDrink()
  .then(() => console.log(`상품명: ${product}, 가격: ${price}`))
  .catch((message) => console.log(message));

function goMart() {
  console.log("마트에 가서 어떤 음료를 살지 고민한다.");
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("고민 끝!");
      product = "옥수수 수염차";
      price = 2000;
      if (price <= 2000) {
        resolve();
      } else {
        reject("돈이 부족합니다.");
      }
    }, 3000);
  });
}

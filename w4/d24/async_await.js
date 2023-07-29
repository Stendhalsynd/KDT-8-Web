// async / await

// 구조
// 함수 앞에 async 키워드 붙이기
// 비동기 처리 메서드 앞에 await 붙이기 (기다려줄 것)
// async, await 항상 같이 쓰기~!

let product;
let price;

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

function pay() {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

async function exec() {
  goMart(); // 1번 실행
  await pickDrink(); // 2번 실행
  pay(); // 3번 실행
}

exec();

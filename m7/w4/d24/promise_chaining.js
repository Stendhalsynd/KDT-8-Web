// (4 + 3)*2 -1 = 13 연산
// 덧셈 -> 곱셈 -> 뺄셈 순서

// function add(num1, num2, callback) {
//   setTimeout(function () {
//     let result = num1 + num2;
//     callback(result);
//   }, 1000);
// }

// function mul(num, callback) {
//   setTimeout(function () {
//     let result = num * 2;
//     callback(result);
//   }, 700);
// }

// function sub(num, callback) {
//   setTimeout(function () {
//     let result = num - 1;
//     callback(result);
//   }, 500);
// }

// without chaining

// add(4, 3, function (x) {
//   console.log("1: ", x);
//   mul(x, function (y) {
//     console.log("2: ", y);
//     sub(y, function (z) {
//       console.log("3: ", z);
//     });
//   });
// });

// with chaining

function add(num1, num2) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = num1 + num2;
      resolve(result);
    }, 1000);
  });
}

function mul(num) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = num * 2;
      resolve(result);
    }, 700);
  });
}

function sub(num) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = num - 1;
      // resolve(result);
      reject(new Error("에러 처리"));
    }, 500);
  });
}

add(4, 3)
  .then(function (result) {
    console.log("1: ", result);
    return mul(result);
  })
  .then(function (result) {
    console.log("2: ", result);
    return sub(result);
  })
  .then(function (result) {
    console.log("3: ", result);
  })
  .catch(function (result) {
    console.log("4: ", result);
  });

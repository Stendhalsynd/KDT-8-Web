// 콜백함수 사용 예시
// 메인 함수, 함수 타입 파라미터 맨 마지막에 하나 더 선언

/*
function mainFunc(param1, param2, callback) {
  // 콜백 함수에 결과 전달
  let result = param1 + param2;
  console.log(`mainFunc`);
  callback(result);
}

function callbackFunc(param) {
  console.log(param);
}

mainFunc(1, 2, callbackFunc);
*/

// #######
// callback hell

// 1초마다 배경색이 변경되는 코드
// 빨 -> 주 -> 노 -> 초 -> 파

setTimeout(function () {
  document.querySelector("body").style.backgroundColor = "red";
  setTimeout(function () {
    document.querySelector("body").style.backgroundColor = "orange";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "yellow";
      setTimeout(function () {
        document.querySelector("body").style.backgroundColor = "green";
        setTimeout(function () {
          document.querySelector("body").style.backgroundColor = "blue";
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

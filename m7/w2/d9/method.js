// 문자열 관련 메서드
let str = "     Happy day~!    ";

// 1. 문자열 길이
console.log("length: ", str.length);

// 2. 대소문자
console.log("toUpperCase :", str.toUpperCase());
console.log("toLowerCase :", str.toLowerCase());

// 3. indexOf, 첫번째 등장하는 대상의 index, 마지막 등장하는 인덱스
console.log("index :", str.indexOf("y"));

console.log("lastIndex :", str.lastIndexOf("y"));

// 4. 문자열 자르기, 첫번째 필수, 두번째 옵션
console.log("slice :", str.slice(0, 4));

console.log("str : ", str);

console.log("slice :", str.slice(4));

// 5. 바꾸기, replace 여러개 있어도 먼저 등장한 것만 바꾼다. replaceAll 모두 바꿈
console.log("replace p -> a : ", str.replace("p", "a"));

console.log("replaceAll a -> k :", str.replaceAll("a", "k"));

// 6. 반복 (repeat)
console.log("repeat : ", str.repeat(10));

// 7. split ( 문자열을 내가 원하는 부분에서 자르고 리스트로 만들어준다.)
// split 대상도 포함해서 자르니 두번째 예시에선 a 가 제거된다.
console.log('split " " : ', str.split(" "));
console.log('split "a" : ', str.split("a"));
console.log('split "": ', str.split(""));

// 8. trim() : 공백 제거
console.log("trim 전 : ", str);
console.log("trim 후 : ", str.trim());

// 배열 관련 메소드
let days = [
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
  "일요일",
];

// 0. 길이
console.log("length : ", days.length);

// 1. 마지막 요소 추가/삭제
// push() : 마지막 요소 추가, 추가된 이후의 리스트 길이를 반환
let pushResult = days.push(...days);
days;
console.log("pushResult : ", pushResult);

// pop() : 마지막 요소 삭제, 반환,
let popResult = days.pop(); // string | undefined; > 문자열 혹은 undefined  반환
popResult;
days;

// 2. 맨 앞 요소 추가/삭제
// unshift() : 첫 번째 위치에 원하는 만큼 요소를 추가하고 추가된 이후의 리스트 길이를 반환해주는 함수
let unshiftResult = days.unshift("T", "A");
days;
unshiftResult;

// shift() : 첫번째 위치의 요소를 추출해 반환해준다. 추출하기 때문에 리스트에서 삭제
let shiftResult = days.shift();
shiftResult;
days;

// 3. 인덱스 가져오기
// indexOf(찾을 요소, [검색을 시작할 인덱스])
days;
console.log(days.indexOf("화요일"));
console.log(days.indexOf("화요일", 2));
console.log(days.indexOf("화요일", 3));
console.log(days.lastIndexOf("화요일"));

// 4. includes() 포함유무
// includes(찾을요소, [검색을 시작할 인덱스])
// includes() : 요소를 ㅊ자고 그에 대한 결과를 불린형으로 반환
// 일부만 포함되어있어도 false 이고 완전한 형태가 있어야 한다.
console.log(days.includes("화요일"));
console.log(days.includes("화"));

// 5. reverse() : 반전시키는 함수
console.log(days.reverse());

// 6. join() : 배열을 연결해서 문자열로 가져온다.
// join([연결자]) : 연결자로 배열내 element 를 이어서 문자열로 반환한다.
console.log(days.join());
console.log(days.join("&"));

let str2 =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores iste cumque vero dolorum repellat corrupti temporibus? Tempora explicabo dicta eos inventore! Consequatur rerum, itaque eius quibusdam explicabo culpa mollitia alias.";

let splitResult = str2.split("");
splitResult;
let reverseResult = splitResult.reverse();
reverseResult;
let joinResult = reverseResult.join("");
joinResult;

// 메서드 체이닝 : 메서드에 반환값이 있을 때만 사용 가능하다.
let total = str2.split("").reverse().join("");
total;

//////

// array 반복문
// for (초기식; 조건식; 증감식) {동작}

let fruits = ["apple", "banana", "melon", "cherry", "grape"];
fruits;

console.log(fruits[0]);

for (let i = 0; i < fruits.length; i++) {
  console.log(`fruits[${i}] :`, fruits[i]);
}

// for of
for (let element of fruits) {
  console.log(element);
}

// for each ((변수, 인덱스, 배열))
// 변수 > 배열에 들어 있는 요소가 하나씩 들어온다.
// 인덱스 > 변수가 하나씩 들어올 때 인덱스
// 배열 > 현재 내가 돌고 있는 배열
fruits.forEach((element) => {
  console.log(element);
});
fruits.forEach((f, index, arr) => {
  f;
  index;
  arr;
});

let numbers = [1, 2, 3, 4, 5, 6];
let arr;

arr = numbers.filter((num) => num > 3);
arr;

// 콜백함수 : 다른 함수에 parameter 로 보내지는 함수
// 그 함수한테 너가 원하는 작업을 하면 콜백함수를 실행시켜줘
// 위의 예시는 forEach 함수가 반복을 돌고 function1 을 실행시켜달라

let sentence = "Happy Day";
console.log(sentence.slice());
console.log(sentence.slice(0));
console.log(sentence.slice(1));
console.log(sentence.slice(2));

sentence.replace();

let n = 4;
var answer = "";
let repeatNum = 0;
repeatNum = n / 2;
let result = "";
if (n % 2 == 0) {
  answer = "수박";
  console.log(answer.repeat(repeatNum));
  console.log(answer);
} else {
  result = "수";
  answer = "박수";
  answer.repeat(repeatNum);
  result += answer;
  answer = result;
}

let num = 6;
console.log(num % 1);

var answer = 0;
n = 12;
for (let i = 1; i <= n; i++) {
  if (n % i == 0) {
    answer += i;
  }
}

//////

// Object

// 표준객체 : 자바스크립트에 기본적으로 내장되어 있다
// String, Number, Array

// Date
// Date : javascript 에서 시간, 날짜에 대한 정보를 얻기 위해 사용되는 객체
// 초기화를 해야 사용가능하다. (new)
// new Date(년, 월, 일, 시, 분, 초, 밀리초)
let date = new Date(); // 현재 시간
date;
// 초기화시 Date 에 값을 넣으면 (숫자를 넣으면) 어떤 시간?
// 1970 년 1월 1일 0시부터 (숫자)밀리초만큼 지난 날짜

let date2 = new Date(2023, 7, 11); // 파라미터로 넣은 특정 시간을 가져온다.
date2;
// month = ['january', 'fabuary' ...] 라서 month 에 0을 넣으면 1월로 시작한다.

console.log(Date.now()); // 기준 시간으로부터 지금까지 지난 밀리초
const today = new Date();
console.log(today.toString());

// Date 객체
console.log(date.getFullYear()); // 년도
console.log(date.getMonth()); // 현재 월
console.log(date.getDate()); // 초기화한 시간의 일
console.log(date.getDay()); // 요일인데 일요일(0) 부터 월요일(1) 화요일(2) 수요일(3) ...
console.log(date.getTime()); // 내가 기준으로 잡은 시간이 기준 시간으로부터 얼마나 지났는지 밀리초
console.log(date.getHours()); // 현재 시간 (시)
console.log(date.getMinutes()); // 현재 시간 (분)
console.log(date.getSeconds()); // 현재 시간 (초)

// yyyy-mm-dd
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDay();

console.log(`${year}-${month}-${day}`);

// Math : 수학적 계산을 하기 위해 사용

console.log(Math.PI);
console.log(Math.abs(-2));
console.log(Math.E);
console.log(Math.SQRT2); // 루트

// Math 객체 안의 메소드
// (1) min : 최솟값
console.log(Math.min(13, 5124, 1231, 123, 34));
// (2) max : 최댓값
console.log(Math.max(3, 144, 15, 13, 35, 145, 1, 1234));
// (3) random : 랜덤
console.log(Math.random());
let max = 10,
  min = 1;
let a = Math.random() * (max - min) + min; // min ~ max 의 수를 뽑는다.
console.log(a);
// (4) round, floor, ceil
// round 반올림
console.log(Math.round(2.4));
console.log(Math.round(2.5));
// floor 내림 - 인수로 전달받은 값과 같거나 작은 수 중에서 가장 큰 정수를 반환
console.log(Math.floor(2.4));
console.log(Math.floor(2.5));
// ceil 내림 - 인수로 전달받은 값과 같거나 큰 수 중에서 가장 작은 정수를 반환
console.log(Math.ceil(2.4));
console.log(Math.ceil(2.5));

console.log(String.prototype.length.prototype);

const strObj = new String();
strObj;

console.log(Object.getOwnPropertyDescriptors(strObj));

const nums = [1, 2, 3, 4, 5];
const roots = nums.filter((item) => item % 2); // 홀수인 요소만 필터링한다. (1이 Truthy)
nums;
roots;

console.log(Math.PI);
console.log(Math.abs(-2)); // 절댓값
console.log(Math.round(1.4)); // 반올림
console.log(Math.round(1.5));
console.log(Math.ceil(1.4)); // 올림
console.log(Math.ceil(1.5));
console.log(Math.floor(1.4)); // 내림
console.log(Math.floor(1.5));
console.log(Math.sqrt(4)); // 제곱근
console.log(Math.sqrt(9));
console.log(Math.random()); // 0 ~ 1 실수
console.log(Math.pow(2, 3)); // 거듭제곱
console.log(Math.max(1, 2, 3));
console.log(Math.min(1, 2, 3));

const o = { x: { y: 1 } };

// 얕은 복사
const c1 = { ...o };
console.log(c1 === o); // 얕은 복사와 깊은 복사로 생성된 객체는 원본과는 다른 객체다.
console.log(c1.x === o.x);
c1;
o;

const v = 1;

// 깊은 복사
const c2 = v;
console.log(c2 === v);

const o2 = { x: 1 };
// 얕은 복사
const c3 = o2;
console.log(c3 === o2);

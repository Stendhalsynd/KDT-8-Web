let arr = ["apple", "banana", "orange"];

let copyArray = arr.forEach((item, index, array) => {
  if (index == 1) {
    item = "grape";
  }
  console.log("item, index, array : ", item, index, array);
});

console.log("origin array : ", arr); // 원본은 바뀌지 않음
console.log("copy array : ", copyArray); // undefined

let users = [
  { id: 1, name: "john" },
  { id: 2, name: "tom" },
  { id: 3, name: "danny" },
];

let user1 = users.find((item, index) => item.id == 1);
let user2 = users.find((item, index) => index == 1);

console.log(user1, user2);

// 배열 변형, 요소를 재정렬
// filter
// find 와 유사하나 조건에 맞는 요소 전체를 담은 배열을 반환한다.
let result_filter = arr.filter(function (item, index, array) {});

let someUsers = users.filter((item) => item.id < 3);
console.log("someUsers : ", someUsers);

// map

let result = arr.map(function (item, index, array) {});

let length = arr.map((item) => item.length);
console.log("length : ", length); // map 의 결과로 해당하는 배열이 반환된다.
console.log("arr : ", arr); // 원본 바뀌지 않음

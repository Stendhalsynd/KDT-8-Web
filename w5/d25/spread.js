const obj = {
  name: "john",
  age: 20,
  addr: "seoul",
  height: 180,
  oj: [1, 2, 3],
};

// console.log({ ...obj });

const array = ["john", 20, "seoul", 180];

// console.log(...array);

//

function get(a, b, ...rest) {
  console.log(rest);
  console.log(a, b, ...rest);
}

get(10, 20, 30, 40, 50);

get("a", "bc", "de", "f", "g");

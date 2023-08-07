function promise1(flag) {
  return new Promise(function (resovle, reject) {
    if (flag) {
      resovle(
        "promsie 상태가 fulfilled 이고 then 으로 연결된다. \n 이때의 flag 는 true"
      );
    } else {
      reject(
        "promise 상태는 rejected 이고 catch 로 연결된다. \n 이때의 flag 는 false"
      );
    }
  });
}

// console.log(promise1(true));
promise1(true)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

promise1(false)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
